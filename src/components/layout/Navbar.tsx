'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setIsMenuOpen(false) // Ferme le menu mobile si ouvert
    } else {
      // Si l'élément n'existe pas (probablement sur une autre page), 
      // on navigue vers la page avec l'ancre
      router.push(`/#${id}`)
    }
  }

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">CubeSite</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Accueil
              </Link>
              <a
                href="/#features"
                onClick={(e) => handleScroll(e, 'features')}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Fonctionnalités
              </a>
              <a
                href="/#pricing"
                onClick={(e) => handleScroll(e, 'pricing')}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Nos offres
              </a>
              <Link
                href="/templates"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Templates
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Connexion
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Inscription
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Accueil
            </Link>
            <a
              href="/#features"
              onClick={(e) => handleScroll(e, 'features')}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              Fonctionnalités
            </a>
            <a
              href="/#pricing"
              onClick={(e) => handleScroll(e, 'pricing')}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              Nos offres
            </a>
            <Link href="/templates" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Templates
            </Link>
          </div>
          
          {/* Séparateur */}
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="space-y-2 px-3">
              <Link href="/login" className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                Connexion
              </Link>
              <Link 
                href="/register" 
                className="block text-center py-2 px-4 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Inscription
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
