'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface SiteData {
  name: string
  subdomain: string
  settings: any
}

export default function DefaultTemplate() {
  const [site, setSite] = useState<SiteData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSite = async () => {
      try {
        // Récupérer le hostname actuel
        const hostname = window.location.hostname
        const subdomain = hostname.replace('.cubesite.vercel.app', '')

        const { data: site, error } = await supabase
          .from('sites')
          .select('*')
          .eq('subdomain', subdomain)
          .single()

        if (error) throw error
        setSite(site)
      } catch (error) {
        console.error('Erreur lors du chargement du site:', error)
      } finally {
        setLoading(false)
      }
    }

    loadSite()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Site non trouvé</h1>
          <p className="mt-2 text-gray-600">Ce site n'existe pas ou n'est pas actif.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{site.name}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Contenu du template par défaut */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Contenu du template par défaut</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
