import styled from 'styled-components'

import { theme } from '@styles/theme'

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.space.medium};
  display: flex;
`

export const ParisContainer = styled.div`
  align-self: flex-end;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tinyScreen}) {
    margin-left: ${({ theme }) => theme.space.medium};
    width: auto;
  }
`

export const PrevisionContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.xLarge};
`

export const PrevisionCardWrapper = styled.div`
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`
