import { useState, type FormEvent } from 'react'
import type { EstimateFormData, ProjectCategory } from '../models/types'

const INITIAL_FORM: EstimateFormData = {
  fullName: '',
  phone: '',
  email: '',
  projectType: '',
  propertyAddress: '',
  notes: '',
  estimatedBudgetRange: '$50,000 - $150,000',
  preferredTimeline: 'Within 1-3 months',
}

export function useEstimateController() {
  const [formData, setFormData] = useState<EstimateFormData>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const updateField = (field: keyof EstimateFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errorMessage) setErrorMessage(null)
  }

  const handleProjectTypeSelect = (type: ProjectCategory) => {
    updateField('projectType', type)
  }

  const validate = (): boolean => {
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.')
      return false
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number so Belen can reach you.')
      return false
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return false
    }
    if (!formData.projectType) {
      setErrorMessage('Please select your project scope.')
      return false
    }
    if (!formData.propertyAddress.trim()) {
      setErrorMessage('Please enter your property address or zip code.')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setErrorMessage(null)

    // Simulate realistic asynchronous network request to contractor CRM / notification system
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitted(true)
    } catch {
      setErrorMessage('Unable to send request right now. Please call (760) 801-2065 directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData(INITIAL_FORM)
    setIsSubmitted(false)
    setErrorMessage(null)
  }

  return {
    formData,
    updateField,
    handleProjectTypeSelect,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    errorMessage,
    resetForm,
    setIsSubmitted,
  }
}
