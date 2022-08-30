import { buildServicesUrl } from '..'

import { API_BASE_URL, CITY, DEFAUL_LANG, UNITS } from '@src/constants'

describe('buildServicesUrl', () => {
  it('should build the url properly', () => {
    expect(buildServicesUrl('forecast')).toStrictEqual(
      `${API_BASE_URL}/forecast?q=${CITY}&units=${UNITS}&lang=${DEFAUL_LANG}&appid=${process.env.OPEN_WEATHERMAP_API_KEY}`
    )
  })
})
