import type { Clouds, Main, Weather, Wind } from '@src/types/common'

export interface Previsions {
  cod: string
  message: number
  cnt: number
  list: Prevision[]
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

export interface Prevision {
  dt: number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: {
    pod: string
  }
  dt_txt: string
}
