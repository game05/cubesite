export default function Home() {
  const features = [
    {
      icon: <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>,
      title: 'Design Personnalisé',
      description: 'Personnalisez chaque aspect de votre site avec notre éditeur intuitif. Couleurs, images, textes... Tout est modifiable !'
    },
    {
      icon: <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: 'Intégration Minecraft',
      description: 'Synchronisation en temps réel avec votre serveur : nombre de joueurs, statut, classements et bien plus encore.'
    },
    {
      icon: <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: 'Boutique Intégrée',
      description: 'Vendez des grades, items et avantages directement sur votre site avec notre système de boutique sécurisé.'
    },
    {
      icon: <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>,
      title: 'Wiki & Guides',
      description: 'Créez facilement des guides, règles et wikis pour votre communauté avec notre éditeur de contenu.'
    },
    {
      icon: <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>,
      title: 'Forum Communautaire',
      description: 'Un espace de discussion complet pour votre communauté avec catégories, mentions et notifications.'
    },
    {
      icon: <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      title: 'Statistiques Avancées',
      description: 'Suivez la croissance de votre serveur avec des statistiques détaillées et des graphiques interactifs.'
    }
  ];

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
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Une solution complète pour votre serveur
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Tout ce dont vous avez besoin pour faire briller votre serveur Minecraft
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">{feature.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Choisissez votre offre
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions adaptées à tous les serveurs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Gratuit</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-bold tracking-tight">0€</span>
                  <span className="ml-1 text-xl font-semibold">/mois</span>
                </p>
                <p className="mt-6 text-gray-500">L'essentiel pour démarrer votre présence en ligne.</p>

                <ul className="mt-6 space-y-6">
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Site web personnalisable</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Sous-domaine gratuit</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Statistiques basiques</span>
                  </li>
                </ul>
              </div>
              <a href="/register" className="mt-8 block w-full bg-gray-50 py-3 px-6 border border-gray-300 rounded-md text-center font-medium text-gray-900 hover:bg-gray-100">
                Commencer gratuitement
              </a>
            </div>

            {/* Premium Plan */}
            <div className="relative p-8 bg-white border border-blue-500 rounded-2xl shadow-sm flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex px-4 py-1 border border-blue-500 rounded-full text-sm font-semibold text-blue-500 bg-white">
                Populaire
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-bold tracking-tight">9.99€</span>
                  <span className="ml-1 text-xl font-semibold">/mois</span>
                </p>
                <p className="mt-6 text-gray-500">Tout ce dont vous avez besoin pour un serveur prospère.</p>

                <ul className="mt-6 space-y-6">
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Tout de l'offre Gratuite</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Nom de domaine personnalisé</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Boutique intégrée</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Support prioritaire</span>
                  </li>
                </ul>
              </div>
              <a href="/register" className="mt-8 block w-full bg-blue-500 py-3 px-6 border border-transparent rounded-md text-center font-medium text-white hover:bg-blue-600">
                Commencer l'essai gratuit
              </a>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-bold tracking-tight">24.99€</span>
                  <span className="ml-1 text-xl font-semibold">/mois</span>
                </p>
                <p className="mt-6 text-gray-500">Pour les grands serveurs qui veulent le meilleur.</p>

                <ul className="mt-6 space-y-6">
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Tout de l'offre Premium</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Forum communautaire</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">API personnalisée</span>
                  </li>
                  <li className="flex">
                    <svg className="flex-shrink-0 w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-500">Support dédié 24/7</span>
                  </li>
                </ul>
              </div>
              <a href="/register" className="mt-8 block w-full bg-gray-50 py-3 px-6 border border-gray-300 rounded-md text-center font-medium text-gray-900 hover:bg-gray-100">
                Contacter les ventes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
