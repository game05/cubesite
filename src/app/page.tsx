export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Créez votre site Minecraft en quelques clics
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Une solution clé en main pour donner une présence web professionnelle à votre serveur Minecraft.
              Personnalisez, gérez et développez votre communauté facilement.
            </p>
            <div className="mt-10">
              <a
                href="/register"
                className="rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
              >
                Commencer gratuitement
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tout ce dont vous avez besoin
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Des fonctionnalités essentielles pour votre serveur Minecraft
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    Personnalisation complète
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Modifiez les couleurs, les textes et la mise en page selon vos besoins
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    Installation rapide
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Votre site est en ligne en quelques minutes, sans configuration complexe
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    Support premium
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Une équipe dédiée pour vous aider à chaque étape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
