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
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [sites, setSites] = useState<Site[]>([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newSite, setNewSite] = useState({
    name: '',
    subdomain: ''
  })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (user) {
        // Charger les sites de l'utilisateur
        const { data: sites, error } = await supabase
          .from('sites')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Erreur lors du chargement des sites:', error)
        } else {
          setSites(sites || [])
        }
      }
      setLoading(false)
    }

    getUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  const validateSubdomain = (subdomain: string) => {
    const regex = /^[a-z0-9-]+$/
    return regex.test(subdomain)
  }

  const handleCreateSite = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!validateSubdomain(newSite.subdomain)) {
      setError('Le sous-domaine ne peut contenir que des lettres minuscules, des chiffres et des tirets')
      return
    }

    try {
      const { data: existingSite } = await supabase
        .from('sites')
        .select('subdomain')
        .eq('subdomain', newSite.subdomain)
        .single()

      if (existingSite) {
        setError('Ce sous-domaine est déjà utilisé')
        return
      }

      const { data, error } = await supabase
        .from('sites')
        .insert([
          {
            name: newSite.name,
            subdomain: newSite.subdomain,
            user_id: user.id,
            status: 'pending',
            template: 'default'
          }
        ])
        .select()
        .single()

      if (error) throw error

      setSites([data, ...sites])
      setShowCreateModal(false)
      setNewSite({ name: '', subdomain: '' })
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Se déconnecter
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 mt-6">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <h2 className="text-xl font-semibold text-gray-800">Mes Sites</h2>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Créer un nouveau site
            </button>
          </div>

          {sites.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun site</h3>
              <p className="mt-1 text-sm text-gray-500">
                Commencez par créer votre premier site web.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sites.map((site) => (
                <div
                  key={site.id}
                  className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{site.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      cubesite.vercel.app/sites/{site.subdomain}
                    </p>
                    <div className="mt-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        site.status === 'active' ? 'bg-green-100 text-green-800' :
                        site.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {site.status === 'active' ? 'Actif' :
                         site.status === 'pending' ? 'En attente' :
                         'Désactivé'}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex justify-between space-x-3">
                      <button
                        onClick={() => router.push(`/dashboard/sites/${site.id}`)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
                      >
                        Gérer
                      </button>
                      <a
                        href={`/sites/${site.subdomain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200"
                      >
                        Visiter
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de création de site */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Créer un nouveau site</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Fermer</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleCreateSite}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="site-name" className="block text-sm font-medium text-gray-700">
                    Nom du site
                  </label>
                  <input
                    type="text"
                    id="site-name"
                    value={newSite.name}
                    onChange={(e) => setNewSite({ ...newSite, name: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subdomain" className="block text-sm font-medium text-gray-700">
                    Sous-domaine
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      id="subdomain"
                      value={newSite.subdomain}
                      onChange={(e) => setNewSite({ ...newSite, subdomain: e.target.value.toLowerCase() })}
                      className="flex-1 min-w-0 block w-full border border-gray-300 rounded-none rounded-l-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      .cubesite.vercel.app
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Lettres minuscules, chiffres et tirets uniquement
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Créer le site
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
