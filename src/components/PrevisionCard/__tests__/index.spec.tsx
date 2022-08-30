import { render, screen } from '@testing-library/react'

import { previsions } from '@src/__mocks__/previsions'

import PrevisionCard from '..'

describe('PrevisionCard', () => {
  describe('render', () => {
    it('should render correctly with formatted previsions data', () => {
      // GIVEN
      render(<PrevisionCard prevision={previsions.list[0]} />)

      // THEN
      expect(screen.getByText('lun.', { exact: true })).toBeInTheDocument()
      expect(screen.getByText('28°', { exact: true })).toBeInTheDocument()
      expect(screen.getByAltText('ciel dégagé')).toBeInTheDocument()
    })
  })
})
