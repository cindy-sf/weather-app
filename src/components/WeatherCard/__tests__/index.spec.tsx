import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'

import { weather } from '@src/__mocks__/weather'

import WeatherCard from '..'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

describe('WeatherCard', () => {
  describe('render', () => {
    it('should render correctly with formatted weather data', () => {
      // GIVEN
      render(<WeatherCard weatherData={weather} />)

      // THEN
      expect(screen.getByText('17°', { exact: true })).toBeInTheDocument()
      expect(
        screen.getByText('ciel dégagé', { exact: true })
      ).toBeInTheDocument()
      expect(screen.getByAltText('ciel dégagé')).toBeInTheDocument()
    })
  })

  describe('redirection', () => {
    it('should redirect to details page by clicking on the card', () => {
      // GIVEN
      const mockedUseRouter = useRouter as jest.Mock
      const push = jest.fn()
      mockedUseRouter.mockImplementation(() => ({
        push,
      }))

      render(<WeatherCard weatherData={weather} />)

      // WHEN
      fireEvent.click(screen.getByRole('link'))

      // THEN
      expect(push).toHaveBeenCalledTimes(1)
      expect(push).toHaveBeenCalledWith('/details')
    })
  })
})
