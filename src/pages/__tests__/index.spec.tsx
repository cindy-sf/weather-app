import { render, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'

import { previsions } from '@src/__mocks__/previsions'
import { weather } from '@src/__mocks__/weather'

import Home from '..'

describe('Home', () => {
  describe('render', () => {
    it('should render the page properly', () => {
      // GIVEN
      render(<Home dailyWeather={weather} previsions={previsions.list} />)

      // THEN
      expect(screen.getByText('Paris', { exact: true })).toBeInTheDocument()
      expect(screen.getByTitle('Plus de détails')).toBeInTheDocument()
      expect(
        screen.getByText('Prévisions sur 5 jours', { exact: true })
      ).toBeInTheDocument()
    })

    it('should display "Error" or data fetching error', () => {
      // GIVEN
      render(<Home dailyWeather={null} previsions={null} />)

      // THEN
      expect(screen.getByText('Erreur', { exact: true })).toBeInTheDocument()
    })

    it('should display "Chargement" or when the data is fetching', () => {
      // GIVEN
      render(<Home dailyWeather={undefined} previsions={undefined} />)

      // THEN
      expect(
        screen.getByText('Chargement...', { exact: true })
      ).toBeInTheDocument()
    })
  })
})
