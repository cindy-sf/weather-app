import styled from 'styled-components'

import { theme } from '@src/styles/theme'

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
