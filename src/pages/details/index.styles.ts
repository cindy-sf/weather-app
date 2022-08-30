import styled from 'styled-components'

import { theme } from '@src/styles/theme'

export const DetailsCard = styled.div`
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.space.medium};
  display: flex;
  align-items: center;
  align-self: center;
  height: 10rem;
  width: 24rem;

  @media screen and (min-width: ${theme.breakpoints.tinyScreen}) {
    height: 14rem;
    width: 28rem;
    border-radius: ${({ theme }) => theme.radius.large};
  }
`

export const DetailsCardContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.small};
  width: 100%;
  display: flex;
  overflow-x: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.space.small};
  grid-row-gap: ${({ theme }) => theme.space.small};
  margin-bottom: ${({ theme }) => theme.space.xLarge};

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: ${theme.breakpoints.tinyScreen}) {
    max-width: 60rem;
  }

  @media screen and (min-width: ${theme.breakpoints.mediumScreen}) {
    margin-bottom: ${({ theme }) => theme.space.none};
  }
`

export const DetailsInfosContainer = styled.div`
  margin-left: ${({ theme }) => theme.space.large};
`

export const WeatherCardContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.large};
`

export const PageTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.xLarge};
`
