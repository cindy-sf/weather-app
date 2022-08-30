import { buildServicesUrl } from '@src/utils/buildServicesUrl'

import type { Weather } from '@src/types/weather'

export const fetchDailyWeather = async (): Promise<Weather> => {
  const data = await fetch(buildServicesUrl('weather'))
  return await data.json()
}
