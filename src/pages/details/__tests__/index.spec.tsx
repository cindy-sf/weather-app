import { render, screen } from '@testing-library/react'

import { weather } from '@src/__mocks__/weather'

import Details from '..'

describe('Details', () => {
  describe('render', () => {
    it('should render the page properly', () => {
      // GIVEN
      render(<Details dailyWeather={weather} />)

      // THEN
      expect(screen.getByText('à Paris')).toBeInTheDocument()
    })

    it('should display "Error" or data fetching error', () => {
      // GIVEN
      render(<Details dailyWeather={null} />)

      // THEN
      expect(screen.getByText('Erreur', { exact: true })).toBeInTheDocument()
    })

    it('should display "Chargement" or when the data is fetching', () => {
      // GIVEN
      render(<Details dailyWeather={undefined} />)

      // THEN
      expect(
        screen.getByText('Chargement...', { exact: true })
      ).toBeInTheDocument()
    })
  })
})
