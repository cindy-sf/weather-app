import Image from 'next/image'
import type { ReactElement } from 'react'
import { useRouter } from 'next/router'

import NewTabIcon from '@assets/icons/new_tab.png'

import Text from '@components/Text'

import type { Weather } from '@src/types/weather'

import {
  StyledWeatherCard,
  TemperatureContainer,
  WeatherTextContainer,
} from './index.styles'

interface Props {
  weatherData: Weather
}

const WeatherCard = ({ weatherData }: Props): ReactElement => {
  const router = useRouter()

  return (
    <StyledWeatherCard
      onClick={(): void => {
        router.push('/details')
      }}
      role="link"
      title="Plus de détails"
    >
      <WeatherTextContainer>
        <Text fontFamily="Katwijkmono" size="large">
          Auj.
        </Text>
        <Image src={NewTabIcon} height={28} width={28} layout="fixed" />
      </WeatherTextContainer>
      <TemperatureContainer>
        <Text fontFamily="Katwijkmono" size="large">
          {Math.round(weatherData.main.temp)}°
        </Text>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          height={92}
          width={92}
          alt={weatherData.weather[0].description}
        />
      </TemperatureContainer>
      <Text fontFamily="Katwijkmono">{weatherData.weather[0].description}</Text>
    </StyledWeatherCard>
  )
}

export default WeatherCard
