import styled from 'styled-components'

import { theme } from '@styles/theme'

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.space.medium} 0;
`

export const LayoutContainer = styled.div`
  max-width: 106rem;
  padding: 3.2rem;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${theme.breakpoints.tinyScreen}) {
    justify-content: flex-start;
  }
`
