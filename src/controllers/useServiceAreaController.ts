import { useState } from 'react'
import { SERVICE_AREAS } from '../models/data/serviceAreas.data'
import type { ServiceAreaCity } from '../models/types'

export function useServiceAreaController() {
  const [selectedCityId, setSelectedCityId] = useState<string>('vista')

  const selectedCity: ServiceAreaCity =
    SERVICE_AREAS.find((c) => c.id === selectedCityId) || SERVICE_AREAS[0]

  const selectCity = (cityId: string) => {
    setSelectedCityId(cityId)
  }

  return {
    cities: SERVICE_AREAS,
    selectedCity,
    selectedCityId,
    selectCity,
  }
}
