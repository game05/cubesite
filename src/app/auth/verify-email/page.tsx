'use client'

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Vérifiez votre email</h2>
        <p className="text-gray-600 mb-6">
          Un email de confirmation a été envoyé à votre adresse email. 
          Veuillez cliquer sur le lien dans l'email pour activer votre compte.
        </p>
        <p className="text-sm text-gray-500">
          Si vous ne recevez pas l'email dans les prochaines minutes, 
          vérifiez votre dossier spam.
        </p>
        <a
          href="/auth/login"
          className="mt-6 inline-block text-sm text-indigo-600 hover:text-indigo-500"
        >
          Retour à la page de connexion
        </a>
      </div>
    </div>
  )
}
