export const API_BASE_URL = 'https://api.openweathermap.org/data/2.5'
export const CITY = 'Paris'
export const DEFAUL_LANG = 'fr'
export const UNITS = 'metric'

export const cookiesOptions = {
  maxAge: 60 * 60, // 1 hour
}

export const weatherDetailsInfos = [
  {
    name: 'Vent',
    icon: 'wind.png',
    dataPath: 'wind.speed',
    unit: 'km/h',
  },
  {
    name: 'Ressenti',
    icon: 'termometer.png',
    dataPath: 'main.feels_like',
    unit: '°',
  },
  {
    name: 'Humidité',
    icon: 'humidity.png',
    dataPath: 'main.feels_like',
    unit: '%',
  },
  {
    name: 'Pression',
    icon: 'pressure.png',
    dataPath: 'main.pressure',
    unit: 'hPa',
  },
]
