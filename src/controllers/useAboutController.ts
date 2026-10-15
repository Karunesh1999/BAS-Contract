import { useState } from 'react'
import type { AboutContactFormData } from '../models/types'

const INITIAL_FORM: AboutContactFormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  message: '',
}

export function useAboutController() {
  const [formData, setFormData] = useState<AboutContactFormData>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const updateField = (field: keyof AboutContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errorMessage) setErrorMessage(null)
  }

  const resetForm = () => {
    setFormData(INITIAL_FORM)
    setIsSubmitted(false)
    setErrorMessage(null)
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.')
      return
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      // Simulate real asynchronous submission to contractor lead system
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitted(true)
    } catch {
      setErrorMessage('An unexpected error occurred. Please call Belen directly at (760) 801-2065.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    updateField,
    handleSubmit,
    resetForm,
    isSubmitting,
    isSubmitted,
    setIsSubmitted,
    errorMessage,
  }
}
