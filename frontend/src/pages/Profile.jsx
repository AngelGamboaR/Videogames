import { sendEmailVerification } from 'firebase/auth'
import {auth} from '../firebase-config'
import React from 'react'
import Navbar from '../components/Navbar'

export default function Profile() {

    const emailVerification = ( )=>{
        sendEmailVerification(auth.currentUser)
        .then(
            alert('Correo de Verificacion enviado!')
        )
    }
    
  return (
    <div>
      <Navbar></Navbar>
      <div className="p-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hola</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Confirma tu correo electronico si no lo has echo!</p>
          <a href="/#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={emailVerification}>
            Confirmar Correo
          </a>
      </div>
      </div>
  )
}

