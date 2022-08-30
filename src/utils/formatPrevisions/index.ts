import { getWeekdayByDate } from '@src/utils/getWeekdayByDate'

import type { Previsions } from '@src/types/previsions'

export const formatPrevisions = (
  previsionsList: Previsions['list']
): Previsions['list'] => {
  return previsionsList.reduce(
    (prev, current) => {
      const previousPrevisionDate = prev[prev.length - 1]?.dt_txt
      const currentPrevisionDate = current?.dt_txt

      const prevWeekday = getWeekdayByDate(previousPrevisionDate)
      const currentWeekday = getWeekdayByDate(currentPrevisionDate)

      console.log('//////', prev, current)

      if (prevWeekday === currentWeekday) return [...prev]

      return [...prev, current]
    },
    [previsionsList[0]]
  )
}
