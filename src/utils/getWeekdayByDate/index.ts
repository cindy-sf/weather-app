export const getWeekdayByDate = (date: string): string =>
  new Date(date).toLocaleString('fr', {
    weekday: 'long',
  })
