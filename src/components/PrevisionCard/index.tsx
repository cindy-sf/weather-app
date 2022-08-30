import Image from 'next/image'
import type { ReactElement } from 'react'

import { getWeekdayByDate } from '@src/utils/getWeekdayByDate'

import Text from '@components/Text'

import type { Prevision } from '@src/types/previsions'

import { Hr, StyledPrevisionCard } from './index.styles'

interface Props {
  prevision: Prevision
}

const PrevisionCard = ({ prevision }: Props): ReactElement => (
  <StyledPrevisionCard key={prevision.dt}>
    <Text fontFamily="Katwijkmono" size="large">
      {getWeekdayByDate(prevision.dt_txt).slice(0, 3)}.
    </Text>
    <Hr />
    <Image
      src={`https://openweathermap.org/img/wn/${prevision.weather[0].icon}@2x.png`}
      height={82}
      width={82}
      alt={prevision.weather[0].description}
    />
    <Text fontFamily="Katwijkmono" size="large">
      {Math.round(prevision.main.temp)}°
    </Text>
  </StyledPrevisionCard>
)

export default PrevisionCard
