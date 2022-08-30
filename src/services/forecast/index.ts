import { buildServicesUrl } from '@src/utils/buildServicesUrl'

import type { Previsions } from '@src/types/previsions'

export const fetchPrevisions = async (): Promise<Previsions> => {
  const data = await fetch(buildServicesUrl('forecast'))
  return await data.json()
}
