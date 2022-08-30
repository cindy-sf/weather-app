import Image from 'next/image'

import { formatPrevisions } from '@src/utils/formatPrevisions'
import { fetchPrevisions } from '@src/services/forecast'
import { fetchDailyWeather } from '@src/services/weather'

import PrevisionCard from '@components/PrevisionCard'
import Text from '@components/Text'
import WeatherCard from '@components/WeatherCard'
import useWindowSize from '@src/hooks/useWindowSize'

import type { Previsions } from '@src/types/previsions'
import type { Weather } from '@src/types/weather'

import EiffelTowerImg from '@assets/images/eiffel_tower.png'

import {
  Container,
  ParisContainer,
  PrevisionContainer,
  PrevisionCardWrapper,
} from './index.styles'

interface Props {
  dailyWeather?: Weather | null
  previsions?: Previsions['list'] | null
}

const Home = ({ dailyWeather, previsions }: Props) => {
  const { width: windowWidth } = useWindowSize()

  if (dailyWeather === null || previsions === null) {
    return <Text as="h2">Erreur</Text>
  }

  if (!dailyWeather || !previsions) {
    return <Text as="h2">Chargement...</Text>
  }

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
          <WeatherCard weatherData={dailyWeather} />
        </ParisContainer>
      </Container>
      <PrevisionContainer>
        <Text as="h2" size="xLarge">
          Prévisions sur 5 jours
        </Text>
        <PrevisionCardWrapper>
          {previsions.map((prevision) => (
            <PrevisionCard key={prevision.dt} prevision={prevision} />
          ))}
        </PrevisionCardWrapper>
      </PrevisionContainer>
    </>
  )
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
  try {
    const dailyWeather = await fetchDailyWeather()
    const previsions = await fetchPrevisions()

    return {
      props: {
        dailyWeather,
        previsions: formatPrevisions(previsions.list),
      },
    }
  } catch (error) {
    return {
      props: {
        dailyWeather: null,
        previsions: null,
      },
    }
  }
}

export default Home

