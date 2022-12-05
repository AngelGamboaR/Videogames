import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendSignInLinkToEmail  } from 'firebase/auth';
import { auth } from '../firebase-config';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config'



export default function Register() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/')
  }
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user.user.uid)
      const docuRef= doc(db, `usuarios/${user.user.uid}`)
      setDoc(docuRef,{correo:email, rol:"usuario"})
      console.log('creado en bd')
      
    }catch(error){
      toast.error(error.message)
    }
     
  }

  return (
    <div>
    <section className="h-screen">
    <div className="px-6 h-full text-gray-800">
      <div
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput"
                placeholder="Email address"
                onChange={(event) =>{
                  setEmail(event.target.value);
                }}
              />
            </div>
  
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Password"
                onChange={(event) =>{
                  setPassword(event.target.value);
                }}
              />
            </div>
  
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
              </div>
            </div>
  
            <div className="text-center lg:text-left">
              <button
                type="button"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={register}
              >
                Register
              </button>
              <button
                type="button"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={goBack}
              >
              Go Back
              </button>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}
