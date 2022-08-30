import styled from 'styled-components'

import { theme } from '@src/styles/theme'

export const FullStyledWeatherCard = styled.div`
  border-radius: ${({ theme }) => theme.radius.large};
  background-color: ${({ theme }) => theme.colors.purple};
  padding: ${({ theme }) => theme.space.medium};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.smallScreen}) {
    flex-direction: row;
    justify-content: space-between;
    height: 20rem;
    width: 100%;
  }
`

export const FullTemperatureInfos = styled.div`
  display: grid;
  flex-direction: initial;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: ${theme.breakpoints.tinyScreen}) {
  }
`

export const StyledWeatherCard = styled.div`
  border-radius: ${({ theme }) => theme.radius.large};
  background-color: ${({ theme }) => theme.colors.purple};
  padding: ${({ theme }) => theme.space.medium};
  border-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  height: 20rem;
  width: 100%;
  transition: border-width 0.1s ease-in;

  @media screen and (min-width: ${theme.breakpoints.tinyScreen}) {
    width: 20rem;
  }

  &:hover {
    border-width: 2px;
    border-style: solid;
  }
`

export const TemperatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WeatherTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
