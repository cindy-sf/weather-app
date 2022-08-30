import { fireEvent, render, screen } from '@testing-library/react'

import { weather } from '@src/__mocks__/weather'

import WeatherCard from '..'

describe('WeatherCard', () => {
  describe('render', () => {
    describe('default variant', () => {
      it('should render correctly with formatted weather data', () => {
        // GIVEN
        render(<WeatherCard weatherData={weather} variant="default" />)

        // THEN
        expect(screen.getByText('17°', { exact: true })).toBeInTheDocument()
        expect(
          screen.getByText('ciel dégagé', { exact: true })
        ).toBeInTheDocument()
        expect(screen.getByAltText('ciel dégagé')).toBeInTheDocument()
      })
    })

    describe('full variant', () => {
      it('should render correctly with formatted weather data', () => {
        // GIVEN
        render(<WeatherCard weatherData={weather} variant="full" />)

        // THEN
        expect(screen.getByText('Min.16°', { exact: true })).toBeInTheDocument()
        expect(screen.getByText('Max.18°', { exact: true })).toBeInTheDocument()
        expect(screen.getByText('17°', { exact: true })).toBeInTheDocument()
        expect(
          screen.getByText('ciel dégagé', { exact: true })
        ).toBeInTheDocument()
        expect(screen.getByAltText('ciel dégagé')).toBeInTheDocument()
      })
    })
  })
})
