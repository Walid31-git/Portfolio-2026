'use client'

import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const CVClient = dynamic(() => import('../../components/CVClient'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">Chargement du CV...</div>
})

export default function CV() {
  return <CVClient />
}

