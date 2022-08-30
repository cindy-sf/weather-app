import Image from 'next/image'
import Link from 'next/link'
import type { ReactElement } from 'react'

import NewTabIcon from '@assets/icons/new_tab.png'

import Text from '@components/Text'

import type { Weather } from '@src/types/weather'

import {
  FullStyledWeatherCard,
  FullTemperatureInfos,
  StyledWeatherCard,
  TemperatureContainer,
  WeatherTextContainer,
} from './index.styles'

interface Props {
  weatherData: Weather
  variant?: 'default' | 'full'
}

const WeatherCard = ({
  weatherData,
  variant = 'default',
}: Props): ReactElement => {
  if (variant === 'full') {
    return (
      <FullStyledWeatherCard>
        <FullTemperatureInfos>
          <Text size="xLarge">{Math.round(weatherData.main.temp)}°</Text>
          <div>
            <Text size="small">
              Min.{Math.round(weatherData.main.temp_min)}°
            </Text>
            <Text size="small">
              Max.{Math.round(weatherData.main.temp_max)}°
            </Text>
          </div>
        </FullTemperatureInfos>
        <TemperatureContainer>
          <Image
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            height={148}
            width={148}
            alt={weatherData.weather[0].description}
          />
        </TemperatureContainer>
        <Text>{weatherData.weather[0].description}</Text>
      </FullStyledWeatherCard>
    )
  }

  return (
    <Link href="/details">
      <StyledWeatherCard title="Plus de détails">
        <a>
          <WeatherTextContainer>
            <Text size="large">Auj.</Text>
            <Image src={NewTabIcon} height={28} width={28} layout="fixed" />
          </WeatherTextContainer>
          <TemperatureContainer>
            <Text size="large">{Math.round(weatherData.main.temp)}°</Text>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              height={92}
              width={92}
              alt={weatherData.weather[0].description}
            />
          </TemperatureContainer>
          <Text>{weatherData.weather[0].description}</Text>
        </a>
      </StyledWeatherCard>
    </Link>
  )
}

export default WeatherCard
