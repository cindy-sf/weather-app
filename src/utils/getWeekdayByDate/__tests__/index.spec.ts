import { getWeekdayByDate } from '..'

describe('getWeekdayByDate', () => {
  it('should build the url properly', () => {
    expect(getWeekdayByDate('2022-08-29 18:00:00')).toStrictEqual('lundi')
  })
})
