'use client'

import Image from 'next/image'

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
    <div className="min-h-screen bg-[#1A1A1A] text-white font-minecraft">
      {/* Navigation */}
      <nav className="bg-[#2D2D2D] border-b-4 border-[#404040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-500">{site.name}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200">
                Accueil
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200">
                Boutique
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200">
                Forum
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200">
                Wiki
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Bienvenue sur {site.name}</h2>
          <p className="text-xl mb-8">Le meilleur serveur Minecraft français !</p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-bold transition-transform duration-200 hover:scale-105">
              Jouer Maintenant
            </button>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-bold transition-transform duration-200 hover:scale-105">
              Discord
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border-2 border-[#404040] hover:border-green-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-4 text-green-500">PvP Faction</h3>
              <p className="text-gray-300">
                Créez votre faction, recrutez des alliés et dominez le serveur !
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border-2 border-[#404040] hover:border-green-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-4 text-green-500">Mini-jeux</h3>
              <p className="text-gray-300">
                Des dizaines de mini-jeux pour vous divertir entre amis !
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A1A] p-6 rounded-lg border-2 border-[#404040] hover:border-green-500 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-4 text-green-500">Events</h3>
              <p className="text-gray-300">
                Participez à nos events hebdomadaires et gagnez des récompenses !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">1000+</div>
              <div className="text-gray-400">Joueurs en ligne</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
              <div className="text-gray-400">Mini-jeux</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] border-t-4 border-[#404040] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-500">À propos</h4>
              <p className="text-gray-400">
                {site.name} est un serveur Minecraft français offrant une expérience de jeu unique et immersive.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-500">Liens utiles</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-500">Règlement</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">Vote</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-500">Nous rejoindre</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-500">Discord</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">Twitter</a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-500">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@{site.subdomain}.fr</li>
                <li>Discord: discord.gg/{site.subdomain}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#404040] text-center text-gray-400">
            <p>&copy; 2024 {site.name}. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
