import { useState, useCallback } from 'react'
import type { ServicesQuoteFormData } from '../models/types'

const INITIAL_FORM: ServicesQuoteFormData = {
  fullName: '',
  phone: '',
  email: '',
  propertyCity: '',
  primaryService: '',
  projectNotes: '',
}

export function useServicesQuoteController() {
  const [formData, setFormData] = useState<ServicesQuoteFormData>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const updateField = <K extends keyof ServicesQuoteFormData>(
    field: K,
    value: ServicesQuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errorMessage) setErrorMessage(null)
  }

  const selectServiceAndScroll = useCallback(
    (serviceName: string, notesHint?: string) => {
      setFormData((prev) => ({
        ...prev,
        primaryService: serviceName,
        projectNotes: notesHint ? notesHint : prev.projectNotes,
      }))

      const quoteEl = document.getElementById('consultation-quote')
      if (quoteEl) {
        quoteEl.scrollIntoView({ behavior: 'smooth' })
      }
    },
    []
  )

  const resetForm = () => {
    setFormData(INITIAL_FORM)
    setIsSubmitted(false)
    setErrorMessage(null)
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.')
      return
    }

    if (!formData.phone.trim()) {
      setErrorMessage('Please enter a valid phone number.')
      return
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    if (!formData.propertyCity) {
      setErrorMessage('Please select the property city.')
      return
    }

    if (!formData.primaryService) {
      setErrorMessage('Please select the primary service required.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      // Simulate real asynchronous submission to contractor lead intake system
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitted(true)
    } catch {
      setErrorMessage(
        'An error occurred submitting your request. Please call us directly at (760) 801-2065.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    updateField,
    selectServiceAndScroll,
    handleSubmit,
    resetForm,
    isSubmitting,
    isSubmitted,
    errorMessage,
  }
}
