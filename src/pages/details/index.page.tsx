import Cookies from 'universal-cookie'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactElement } from 'react'
import { FunctionComponent, useEffect, useState } from 'react'

import Text from '@components/Text'

import { fetchDailyWeather } from '@src/services/weather'

import { cookiesOptions, weatherDetailsInfos } from '@src/constants'
import { getObjectValueByPath } from '@src/utils/getObjectValueByPath'
import type { Weather } from '@src/types/weather'

import useWindowSize from '@src/hooks/useWindowSize'

import WeatherCard from '@components/WeatherCard'

import {
  DetailsCard,
  DetailsCardContainer,
  DetailsInfosContainer,
  PageTitleContainer,
  WeatherCardContainer,
} from './index.styles'

interface Props {
  dailyWeather?: Weather | null
}

const Details: FunctionComponent = (): ReactElement => {
  const [dailyWeatherData, setDailyWeatherData] = useState<Weather | null>()
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const cookies = new Cookies()
      const dailyWeatherCookie = cookies.get('dailyWeather')

      if (dailyWeatherCookie) {
        setDailyWeatherData(dailyWeatherCookie)
        return
      }

      try {
        const dailyWeather = await fetchDailyWeather()

        cookies.set(
          'dailyWeather',
          JSON.stringify(dailyWeather),
          cookiesOptions
        )

        setDailyWeatherData(dailyWeather)
      } catch (error) {
        setDailyWeatherData(null)
      }
    }

    fetchData()
  }, [])

  if (dailyWeatherData === null) return <Text as="h2">Erreur</Text>

  if (!dailyWeatherData) return <Text as="h2">Chargement...</Text>

  const BackLink = (): ReactElement => (
    <Link href="/">
      <Text size="small" as="a" role="link" title="Acceuil">
        ← Retour à l'accueil
      </Text>
    </Link>
  )

  return (
    <>
      <PageTitleContainer>
        <Text as="h2" size="xLarge">
          <Text as="span" color="purpleLight" size="xLarge">
            Aujourd'hui
          </Text>{' '}
          à Paris
        </Text>
        {windowWidth && windowWidth > 768 && <BackLink />}
      </PageTitleContainer>

      <WeatherCardContainer>
        <WeatherCard variant="full" weatherData={dailyWeatherData} />
      </WeatherCardContainer>

      <Text as="h2" size="xLarge" marginTop="large">
        Plus de détails
      </Text>

      <DetailsCardContainer>
        {weatherDetailsInfos.map((info) => {
          const data = getObjectValueByPath(
            info.dataPath,
            dailyWeatherData
          ) as number

          return (
            <DetailsCard key={info.name}>
              <Image
                src={require(`@assets/icons/${info.icon}`).default}
                layout="intrinsic"
              />
              <DetailsInfosContainer>
                <Text as="p">{info.name}</Text>
                <Text as="p" marginTop="small">
                  {Math.round(data)} {info.unit}
                </Text>
              </DetailsInfosContainer>
            </DetailsCard>
          )
        })}
      </DetailsCardContainer>

      {windowWidth && windowWidth < 768 && <BackLink />}
    </>
  )
}

export default Details
