import { useState, useMemo } from 'react'
import type { AduCalculationInputs, AduCalculationResults } from '../models/types'

const DEFAULT_INPUTS: AduCalculationInputs = {
  squareFootage: 650,
  aduType: 'detached',
  finishLevel: 'luxury',
}

export function useAduCalculator() {
  const [inputs, setInputs] = useState<AduCalculationInputs>(DEFAULT_INPUTS)
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  const setSquareFootage = (sqft: number) => {
    setInputs((prev) => ({ ...prev, squareFootage: Math.max(250, Math.min(1200, sqft)) }))
  }

  const setAduType = (aduType: AduCalculationInputs['aduType']) => {
    setInputs((prev) => ({ ...prev, aduType }))
  }

  const setFinishLevel = (finishLevel: AduCalculationInputs['finishLevel']) => {
    setInputs((prev) => ({ ...prev, finishLevel }))
  }

  const results: AduCalculationResults = useMemo(() => {
    const { squareFootage, aduType, finishLevel } = inputs

    // Base cost per square foot in North County San Diego (licensed general contractor turnkey rate)
    let baseRate = 310
    if (aduType === 'garage_conversion') baseRate = 220
    if (aduType === 'jadu') baseRate = 195
    if (aduType === 'attached') baseRate = 275

    // Finish multiplier
    let multiplier = 1.0
    if (finishLevel === 'standard') multiplier = 0.88
    if (finishLevel === 'ultra_premium') multiplier = 1.25

    const estimatedCostMin = Math.round((squareFootage * baseRate * multiplier * 0.95) / 1000) * 1000
    const estimatedCostMax = Math.round((squareFootage * baseRate * multiplier * 1.1) / 1000) * 1000

    // Monthly rental yield based on North County coastal/inland averages
    let rentPerSqft = 3.6
    if (aduType === 'detached') rentPerSqft = 4.1
    const rentalYieldMin = Math.round((squareFootage * rentPerSqft * 0.9) / 50) * 50
    const rentalYieldMax = Math.round((squareFootage * rentPerSqft * 1.15) / 50) * 50

    // Immediate property appraisal equity surge (typically 1.1x to 1.4x of construction cost in San Diego County)
    const equitySurgeMin = Math.round((estimatedCostMin * 1.1) / 5000) * 5000
    const equitySurgeMax = Math.round((estimatedCostMax * 1.35) / 5000) * 5000

    // Typical timeline in weeks
    let timelineWeeks = '12 - 16 Weeks'
    if (aduType === 'garage_conversion') timelineWeeks = '8 - 12 Weeks'
    if (aduType === 'jadu') timelineWeeks = '6 - 10 Weeks'
    if (squareFootage > 900) timelineWeeks = '16 - 20 Weeks'

    return {
      estimatedCostMin,
      estimatedCostMax,
      monthlyRentalYieldMin: Math.max(1600, rentalYieldMin),
      monthlyRentalYieldMax: Math.max(2200, rentalYieldMax),
      equitySurgeMin,
      equitySurgeMax,
      timelineWeeks,
    }
  }, [inputs])

  return {
    inputs,
    results,
    setSquareFootage,
    setAduType,
    setFinishLevel,
    isCalculatorOpen,
    setIsCalculatorOpen,
  }
}
