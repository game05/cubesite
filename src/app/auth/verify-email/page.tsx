'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function VerifyEmailPage() {
  const router = useRouter()
  const [resendStatus, setResendStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleResendEmail = async () => {
    setResendStatus('sending')
    setError(null)

    try {
      const { data, error } = await supabase.auth.resend({
        type: 'signup',
        email: window.localStorage.getItem('userEmail') || '',
      })

      if (error) throw error

      setResendStatus('sent')
    } catch (error: any) {
      setError(error.message)
      setResendStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-12 w-12 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold mb-4">Vérifiez votre email</h2>
        
        <p className="text-gray-600 mb-6">
          Un email de confirmation a été envoyé à votre adresse email. 
          Veuillez cliquer sur le lien dans l'email pour activer votre compte.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {resendStatus === 'sent' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Email de vérification renvoyé avec succès !
          </div>
        )}

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Si vous ne recevez pas l'email dans les prochaines minutes, 
            vérifiez votre dossier spam ou cliquez ci-dessous pour renvoyer l'email.
          </p>

          <button
            onClick={handleResendEmail}
            disabled={resendStatus === 'sending'}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {resendStatus === 'sending' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              "Renvoyer l'email de vérification"
            )}
          </button>

          <div className="pt-4 border-t border-gray-200">
            <a
              href="/auth/login"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à la page de connexion
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
