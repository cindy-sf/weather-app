import { getWeekdayByDate } from '..'

describe('getWeekdayByDate', () => {
  it('should return the weekday properly', () => {
    expect(getWeekdayByDate('2022-08-29 18:00:00')).toStrictEqual('lundi')
  })

  it('should return "-" when the date format is invalid', () => {
    expect(getWeekdayByDate('invalid-format')).toStrictEqual('-')
  })
})
