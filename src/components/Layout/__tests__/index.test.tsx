import { render, screen } from '@testing-library/react'

import Layout from '..'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

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
        screen.getByText('Fait avec ❤️ par Cindy Saint Fleurant', {
          exact: true,
        })
      ).toBeInTheDocument()
    })
  })
})
