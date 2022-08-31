import Cookies from 'universal-cookie'
import Image from 'next/image'
import { FunctionComponent, useEffect, useState } from 'react'

import { formatPrevisions } from '@src/utils/formatPrevisions'
import { fetchPrevisions } from '@src/services/forecast'
import { fetchDailyWeather } from '@src/services/weather'

import PrevisionCard from '@components/PrevisionCard'
import Text from '@components/Text'
import WeatherCard from '@components/WeatherCard'
import useWindowSize from '@src/hooks/useWindowSize'

import type { Previsions } from '@src/types/previsions'
import type { Weather } from '@src/types/weather'
import { cookiesOptions } from '@src/constants'

import EiffelTowerImg from '@assets/images/eiffel_tower.png'

import {
  Container,
  ParisContainer,
  PrevisionContainer,
  PrevisionCardWrapper,
} from './index.styles'

const Home: FunctionComponent = () => {
  const [dailyWeatherData, setDailyWeatherData] = useState<Weather | null>()
  const [previsionsData, setPrevisionsData] = useState<
    Previsions['list'] | null
  >()
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const cookies = new Cookies()
      const allCookies = cookies.getAll()

      if (allCookies.dailyWeather && allCookies.previsions) {
        setDailyWeatherData(allCookies.dailyWeather)
        setPrevisionsData(allCookies.previsions)
        return
      }

      try {
        const dailyWeather = await fetchDailyWeather()
        const previsions = await fetchPrevisions()
        const formattedPrevisions = formatPrevisions(previsions.list)

        cookies.set(
          'dailyWeather',
          JSON.stringify(dailyWeather),
          cookiesOptions
        )
        cookies.set(
          'previsions',
          JSON.stringify(formattedPrevisions),
          cookiesOptions
        )

        setDailyWeatherData(dailyWeather)
        setPrevisionsData(formattedPrevisions)
      } catch (error) {
        setDailyWeatherData(null)
        setPrevisionsData(null)
      }
    }

    fetchData()
  }, [])

  if (dailyWeatherData === null || previsionsData === null)
    return <Text as="h2">Erreur</Text>

  if (!dailyWeatherData || !previsionsData)
    return <Text as="h2">Chargement...</Text>

  return (
    <>
      <Container>
        {windowWidth && windowWidth > 742 && (
          <Image src={EiffelTowerImg} width={590} height={343} layout="fixed" />
        )}

        <ParisContainer>
          <Text as="h2" size="xLarge">
            Paris
          </Text>
          <WeatherCard weatherData={dailyWeatherData} />
        </ParisContainer>
      </Container>

      <PrevisionContainer>
        <Text as="h2" size="xLarge">
          Prévisions sur 5 jours
        </Text>

        <PrevisionCardWrapper>
          {previsionsData.map((prevision, index) => (
            <PrevisionCard key={index} prevision={prevision} />
          ))}
        </PrevisionCardWrapper>
      </PrevisionContainer>
    </>
  )
}

export default Home

