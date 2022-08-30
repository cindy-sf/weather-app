import { API_BASE_URL, CITY, DEFAUL_LANG, UNITS } from '@src/constants'

export const buildServicesUrl = (type: 'forecast' | 'weather'): string => {
  return `${API_BASE_URL}/${type}?q=${CITY}&units=${UNITS}&lang=${DEFAUL_LANG}&appid=${process.env.OPEN_WEATHERMAP_API_KEY}`
}
