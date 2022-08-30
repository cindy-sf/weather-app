import { render, screen } from '@testing-library/react'

import Layout from '..'

describe('Layout', () => {
  describe('render', () => {
    it("should render correctly the component with it's child and footer", () => {
      // GIVEN
      render(
        <Layout>
          <p>Toto</p>
        </Layout>
      )

      // THEN
      expect(screen.getByText('Toto')).toBeInTheDocument()
      expect(
        screen.getByText('Fait avec ❤️ par Cindy SF', {
          exact: true,
        })
      ).toBeInTheDocument()
    })
  })
})
