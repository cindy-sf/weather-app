export const getWeekdayByDate = (date: string): string => {
  const d = new Date(date)
  const isInvalidDate = isNaN(d.getTime())

  if (isInvalidDate) return '-'

  return d.toLocaleString('fr', {
    weekday: 'long',
  })
}
