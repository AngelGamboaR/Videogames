import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React,{ useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

export default function Login() {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [user, setUser] = useState({});

   
  const logIntoAcc = async () =>{
      const user = await signInWithEmailAndPassword(auth,email,password)
      navigate('/Main')
      console.log(user)
  }
  
  return (
    <section className="h-screen">
    <div className="px-6 h-full text-gray-800">
      <div
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div
          className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
        >
          <img
            src="https://makdigitaldesign.com/wp-content/uploads/2020/06/1_IQWxI9C_X2bMR_h_Y0NYkw.jpeg"
            className="w-full"
          />
        </div>
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
              <a href="#!" className="text-gray-800">Forgot password?</a>
            </div>
  
            <div className="text-center l g:text-left">
              <button
                type="button"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={logIntoAcc}
              >
                Login
              </button>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">

                <Link to="register">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Register
                    </button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
