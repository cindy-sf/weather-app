import { render, screen, waitFor } from '@testing-library/react'
import Cookies from 'universal-cookie'
import fetchMock from 'jest-fetch-mock'

import { buildServicesUrl } from '@src/utils/buildServicesUrl'
import { formattedPrevisions, previsions } from '@src/__mocks__/previsions'
import { weather } from '@src/__mocks__/weather'

import Home from '../index.page'

jest.mock('universal-cookie', () => {
  const mockedCookies = {
    getAll: jest.fn(),
  }
  return jest.fn(() => mockedCookies)
})

describe('Home', () => {
  afterEach(jest.clearAllMocks)

  const cookies = new Cookies()

  describe('with cookies', () => {
    ;(cookies.getAll as jest.Mocked<any>).mockReturnValue({
      previsions: formattedPrevisions,
      dailyWeather: weather,
    })

    it('should render the page properly', async () => {
      // GIVEN
      render(<Home />)

      // THEN
      expect(
        await screen.findByText('Paris', { exact: true })
      ).toBeInTheDocument()
      expect(screen.getByTitle('Plus de détails')).toBeInTheDocument()
      expect(
        screen.getByText('Prévisions sur 5 jours', { exact: true })
      ).toBeInTheDocument()
    })

    it('should not fetchData if cookies are present', async () => {
      // GIVEN
      jest.spyOn(global, 'fetch')
      render(<Home />)

      // THEN
      expect(global.fetch).not.toHaveBeenCalled()
    })
  })

  describe('without cookies', () => {
    beforeEach(() => {
      fetchMock.enableMocks()
      fetchMock.doMock()
      fetchMock.mockResponse(JSON.stringify(previsions))
      fetchMock.mockResponse(JSON.stringify(weather))
      ;(cookies.getAll as jest.Mocked<any>).mockReturnValue({})
    })

    it('should fetch data without cookies', async () => {
      // GIVEN
      jest.spyOn(global, 'fetch')
      render(<Home />)

      // THEN
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(2)
      })
      expect(global.fetch).toHaveBeenNthCalledWith(
        1,
        buildServicesUrl('weather')
      )
      expect(global.fetch).toHaveBeenNthCalledWith(
        2,
        buildServicesUrl('forecast')
      )
    })

    it('should display "Chargement" or when the data is fetching', () => {
      // GIVEN
      render(<Home />)

      // THEN
      expect(
        screen.getByText('Chargement...', { exact: true })
      ).toBeInTheDocument()
    })

    it('should display "Error" or data fetching error', async () => {
      // GIVEN
      fetchMock.mockResponse(() => Promise.reject('error'))
      render(<Home />)

      // THEN
      expect(
        await screen.findByText('Erreur', { exact: true })
      ).toBeInTheDocument()
    })
  })
})
