'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

interface Site {
  id: string
  name: string
  subdomain: string
  created_at: string
  status: 'active' | 'pending' | 'disabled'
  template: string
  settings: any
}

export default function SiteManagementPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [site, setSite] = useState<Site | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('general')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    const loadSite = async () => {
      try {
        const { data: site, error } = await supabase
          .from('sites')
          .select('*')
          .eq('id', params.id)
          .single()

        if (error) throw error
        setSite(site)
      } catch (error: any) {
        console.error('Erreur lors du chargement du site:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadSite()
  }, [params.id])

  const handleUpdateSite = async (updates: Partial<Site>) => {
    setError(null)
    setSuccess(null)
    
    try {
      const { data, error } = await supabase
        .from('sites')
        .update(updates)
        .eq('id', params.id)
        .select()
        .single()

      if (error) throw error

      setSite(data)
      setSuccess('Site mis à jour avec succès')
    } catch (error: any) {
      setError(error.message)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!site) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Site non trouvé</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>Le site demandé n'existe pas ou vous n'avez pas les permissions nécessaires.</p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => router.push('/dashboard')}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                  >
                    Retour au tableau de bord
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{site.name}</h1>
            <p className="mt-1 text-sm text-gray-500">
              {site.subdomain}.cubesite.vercel.app
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`https://${site.subdomain}.cubesite.vercel.app`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Visiter le site
            </a>
            <button
              onClick={() => router.push('/dashboard')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Retour au dashboard
            </button>
          </div>
        </div>

        {/* Messages de succès/erreur */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-sm">
            {success}
          </div>
        )}

        {/* Onglets */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('general')}
              className={`${
                activeTab === 'general'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Général
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`${
                activeTab === 'design'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveTab('pages')}
              className={`${
                activeTab === 'pages'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Pages
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`${
                activeTab === 'settings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Paramètres
            </button>
          </nav>
        </div>

        {/* Contenu des onglets */}
        <div className="py-6">
          {activeTab === 'general' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Informations générales</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Informations de base de votre site web.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nom du site
                      </label>
                      <input
                        type="text"
                        value={site.name}
                        onChange={(e) => handleUpdateSite({ name: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Sous-domaine
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          value={site.subdomain}
                          readOnly
                          className="flex-1 block w-full border border-gray-300 rounded-l-md bg-gray-50 py-2 px-3 sm:text-sm"
                        />
                        <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                          .cubesite.vercel.app
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Le sous-domaine ne peut pas être modifié après la création.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Statut
                      </label>
                      <select
                        value={site.status}
                        onChange={(e) => handleUpdateSite({ status: e.target.value as Site['status'] })}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="active">Actif</option>
                        <option value="pending">En attente</option>
                        <option value="disabled">Désactivé</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Template
                      </label>
                      <select
                        value={site.template}
                        onChange={(e) => handleUpdateSite({ template: e.target.value })}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="default">Template par défaut</option>
                        <option value="gaming">Template Gaming</option>
                        <option value="business">Template Business</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Personnalisation du design</h3>
              <p className="mt-1 text-sm text-gray-500">Cette fonctionnalité sera bientôt disponible.</p>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Gestion des pages</h3>
              <p className="mt-1 text-sm text-gray-500">Cette fonctionnalité sera bientôt disponible.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">Paramètres avancés</h3>
              <p className="mt-1 text-sm text-gray-500">Cette fonctionnalité sera bientôt disponible.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
