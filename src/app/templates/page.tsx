'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Templates() {
  const [previewOpen, setPreviewOpen] = useState(false)

  const featuredTemplate = {
    id: "modern-craft",
    name: "Modern Craft",
    description: "Un thème moderne et élégant pour votre serveur Minecraft. Design responsive, animations fluides, et une mise en page optimisée pour une expérience utilisateur exceptionnelle.",
    features: [
      "Design responsive",
      "Mode sombre/clair",
      "Animations fluides",
      "Intégration parfaite avec le serveur",
      "Boutique personnalisable",
      "Support multilingue"
    ],
    price: "49.99€",
    image: "/templates/modern-craft-preview.jpg"
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Templates <span className="text-blue-600">Premium</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Des thèmes professionnels pour votre serveur Minecraft. Design moderne, performances optimisées et personnalisation complète.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Template */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src={featuredTemplate.image}
                alt={featuredTemplate.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Template Vedette
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{featuredTemplate.name}</h2>
                  <p className="mt-4 text-gray-500">{featuredTemplate.description}</p>
                </div>
                <p className="text-3xl font-bold text-blue-600">{featuredTemplate.price}</p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">Fonctionnalités</h3>
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {featuredTemplate.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-500">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href={`/templates/modern-craft/preview`}
                  className="flex-1 bg-white border border-gray-300 rounded-md py-3 px-8 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Voir l'aperçu
                </Link>
                <Link
                  href={`/templates/modern-craft`}
                  className="flex-1 bg-blue-600 border border-transparent rounded-md py-3 px-8 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Commander
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500"
                  onClick={() => setPreviewOpen(false)}
                >
                  <span className="sr-only">Fermer</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="h-[80vh] overflow-y-auto">
                <Image
                  src={featuredTemplate.image}
                  alt={`Aperçu complet de ${featuredTemplate.name}`}
                  width={1920}
                  height={1080}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
