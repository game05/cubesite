'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ModernCraftPreview() {
  const news = [
    {
      title: "Les meilleurs serveurs Minecraft Survie de 2025",
      description: "Quels sont les meilleurs serveurs Minecraft survie ? Découvrez notre sélection des meilleurs serveurs Minecraft survie gratuits et français dévouvrir en 2025. Trouvez le serveur Minecraft survie qui...",
      image: "https://static.planetminecraft.com/files/resource_media/screenshot/1249/2012-12-09_164037_4174932.jpg",
      author: "ImWhyyy",
      date: "1 décembre 2024"
    },
    {
      title: "Comment jouer en Oneblock Minecraft ?",
      description: "Comment jouer en Oneblock Minecraft ? Découvrez nos conseils et astuces pour bien débuter votre aventure Oneblock Minecraft 1.21. Guide complet facile étape par étape.",
      image: "https://staticg.sportskeeda.com/editor/2021/07/33fad-16256357312551-800.jpg",
      author: "ImWhyyy",
      date: "2 décembre 2024"
    },
    {
      title: "Comment créer un serveur Minecraft gratuitement ?",
      description: "Comment créer un serveur Minecraft gratuitement ? Découvrez comment créer un serveur Minecraft gratuit facilement grâce à notre guide rapide, étape par étape.",
      image: "https://cdn.gameserver.news/img/minecraft-server-hosting/minecraft-server-hosting.jpg",
      author: "ImWhyyy",
      date: "1 décembre 2024"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barre de navigation fixe en haut */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/templates" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Retour aux templates</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <span className="text-sm text-gray-600">Aperçu du template Modern Craft</span>
          </div>
          <Link
            href="/templates"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium text-white transition-colors"
          >
            Commander pour 49.99€
          </Link>
        </div>
      </div>

      {/* Contenu */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
            L'actualité des serveurs Minecraft
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {item.author[0]}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{item.author}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
