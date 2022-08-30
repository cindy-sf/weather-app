import Image from 'next/image'
import type { ReactElement } from 'react'
import Link from 'next/link'

import Text from '@components/Text'

import { fetchDailyWeather } from '@src/services/weather'

import type { Weather } from '@src/types/weather'
import { weatherDetailsInfos } from '@src/constants'
import useWindowSize from '@src/hooks/useWindowSize'

import {
  DetailsCard,
  DetailsCardContainer,
  DetailsInfosContainer,
  PageTitleContainer,
  WeatherCardContainer,
} from './index.styles'
import WeatherCard from '@components/WeatherCard'
import { getObjectValueByPath } from '@src/utils/getObjectValueByPath'

interface Props {
  dailyWeather?: Weather | null
}

const Details = ({ dailyWeather }: Props): ReactElement => {
  const { width: windowWidth } = useWindowSize()

  if (dailyWeather === null) {
    return <Text as="h2">Erreur</Text>
  }

  if (!dailyWeather) {
    return <Text as="h2">Chargement...</Text>
  }

  const BackLink = () => (
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
        <WeatherCard variant="full" weatherData={dailyWeather} />
      </WeatherCardContainer>

      <Text as="h2" size="xLarge" marginTop="large">
        Plus de détails
      </Text>

      <DetailsCardContainer>
        {weatherDetailsInfos.map((info) => {
          const data = getObjectValueByPath(
            info.dataPath,
            dailyWeather
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

export const getStaticProps = async (): Promise<{ props: Props }> => {
  try {
    const dailyWeather = await fetchDailyWeather()

    return {
      props: {
        dailyWeather,
      },
    }
  } catch (error) {
    return {
      props: {
        dailyWeather: null,
      },
    }
  }
}

export default Details
