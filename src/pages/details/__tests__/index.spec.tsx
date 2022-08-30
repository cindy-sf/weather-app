import { render, screen, waitFor } from '@testing-library/react'
import Cookies from 'universal-cookie'
import fetchMock from 'jest-fetch-mock'

import { buildServicesUrl } from '@src/utils/buildServicesUrl'
import { weather } from '@src/__mocks__/weather'

import Details from '../index.page'

jest.mock('universal-cookie', () => {
  const mockedCookies = {
    get: jest.fn(),
  }
  return jest.fn(() => mockedCookies)
})

describe('Details', () => {
  afterEach(jest.clearAllMocks)

  const cookies = new Cookies()

  describe('with cookies', () => {
    beforeEach(() => {
      ;(cookies.get as jest.Mocked<any>).mockReturnValue(weather)
    })

    it('should render the page properly', async () => {
      // GIVEN
      render(<Details />)

      // THEN
      expect(await screen.findByText('à Paris')).toBeInTheDocument()
    })

    it('should not fetchData if cookies are present', async () => {
      // GIVEN
      jest.spyOn(global, 'fetch')
      render(<Details />)

      // THEN
      expect(global.fetch).not.toHaveBeenCalled()
    })
  })

  describe('without cookies', () => {
    beforeEach(() => {
      fetchMock.enableMocks()
      fetchMock.doMock()
      fetchMock.mockResponse(JSON.stringify(weather))
      ;(cookies.get as jest.Mocked<any>).mockReturnValue(undefined)
    })

    it('should fetch data without cookies', async () => {
      // GIVEN
      jest.spyOn(global, 'fetch')
      render(<Details />)

      // THEN
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(1)
      })
      expect(global.fetch).toHaveBeenCalledWith(buildServicesUrl('weather'))
    })

    it('should display "Chargement" or when the data is fetching', () => {
      // GIVEN
      render(<Details />)

      // THEN
      expect(
        screen.getByText('Chargement...', { exact: true })
      ).toBeInTheDocument()
    })

    it('should display "Error" or data fetching error', async () => {
      // GIVEN
      render(<Details />)

      // THEN
      expect(
        await screen.findByText('Erreur', { exact: true })
      ).toBeInTheDocument()
    })
  })
})
