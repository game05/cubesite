'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface SiteData {
  name: string
  subdomain: string
  settings: any
  template: string
}

export default function SitePage({ params }: { params: { subdomain: string } }) {
  const [site, setSite] = useState<SiteData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSite = async () => {
      try {
        const { data: site, error } = await supabase
          .from('sites')
          .select('*')
          .eq('subdomain', params.subdomain)
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
  }, [params.subdomain])

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

  // Charger dynamiquement le template correspondant
  const Template = require(`@/templates/${site.template}`).default

  return <Template site={site} />
}
