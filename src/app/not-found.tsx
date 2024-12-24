import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Page non trouvée
              </h1>
              <p className="mt-4 text-base text-gray-500">
                Oups ! On dirait que vous vous êtes perdu dans le Nether...
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Retour à l'accueil
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </main>

        {/* Minecraft-style decoration */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-800 to-green-600 rounded-lg transform rotate-45"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-brown-800 to-brown-600 rounded-lg transform -rotate-12"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg transform rotate-12"></div>
        </div>
      </div>
    </div>
  )
}
