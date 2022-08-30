export const getObjectValueByPath = (path: string, obj: any): unknown => {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : null
  }, obj)
}
