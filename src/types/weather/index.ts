import type {
  Clouds,
  Main,
  Weather as WeatherType,
  Wind,
} from '@src/types/common'

export interface Weather {
  coord: {
    lon: number
    lat: number
  }
  weather: WeatherType[]
  base: string
  main: Main
  wind: Wind
  clouds: Clouds
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
  visibility: number
}
