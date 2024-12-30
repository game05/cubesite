'use client'

interface SiteData {
  name: string
  subdomain: string
  settings: any
}

interface TemplateProps {
  site: SiteData
}

export default function DefaultTemplate({ site }: TemplateProps) {
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