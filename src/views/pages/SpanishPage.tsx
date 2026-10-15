import React from 'react'
import { COMPANY_DATA } from '../../models/data/company.data'
import { ShieldCheck, Phone, Award, Home, Star } from 'lucide-react'
import { EstimateFormSection } from '../../components/sections/EstimateFormSection'

export const SpanishPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
      {/* Title */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span>Contratista General Licenciado en California • CSLB #1092902</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Hablamos Español — Construcción y Remodelación en San Diego
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Bienvenido a BAS General Contractor Inc. Dirigido directamente por Belén y nuestro equipo calificado. Ofrecemos presupuestos transparentes y honestos para construcción de ADU (casitas independientes), ampliaciones de casa, remodelación completa de cocinas y baños.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#0051d5] text-white font-bold text-sm shadow-md hover:bg-blue-600 transition-colors gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Llamar a Belén: {COMPANY_DATA.phone}</span>
          </a>
        </div>
      </div>

      {/* Servicios en Español */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0051d5] flex items-center justify-center">
            <Home className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">Construcción de ADU y JADU</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Casas para renta o para la familia en su patio trasero. Tramitamos permisos con la ciudad, planos de arquitectura, cimentación y plomería.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0051d5] flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">Cocinas y Baños de Lujo</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gabinetes a la medida, barras de cuarzo, regaderas estilo spa con azulejo fino y pisos de madera o vinilo de alta resistencia.
          </p>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0051d5] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-heading text-lg font-bold text-slate-900">Garantía y Confianza</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Más de 7 años trabajando en Vista, Carlsbad, Oceanside y San Marcos con licencia estatal activa, fianza y aseguranza completa.
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-slate-900">
          Solicite su Consulta Gratuita
        </h2>
        <EstimateFormSection initialNotes="Hola Belén, solicito presupuesto para mi proyecto..." />
      </div>
    </div>
  )
}
