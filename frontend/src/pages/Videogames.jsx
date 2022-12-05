import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { doc, setDoc, collection, getDocs  } from 'firebase/firestore'
import { db } from '../firebase-config'


export default function Videogames() {

const [nombre, setNombre] = useState('')
const [descripcion , setDescripcion ] = useState('')
const [link , setLink ] = useState('')
const [puntuacion , setPuntuacion ] = useState('')
const [documento , setDocumento ] = useState([])
const videogameRef = collection(db, "videojuegos");

const getGames = async () => {
    const querySnapshot = await getDocs(collection(db, "videojuegos"));
    let document = [];
    querySnapshot.forEach((doc) => {
      document.push({...doc.data() ,id: doc.id});
    });
    setDocumento(document)
    }

    useEffect(() => {
        getGames()
      }, [])
      console.log(documento);

const registerGame = async () => {
    try {
     setDoc(doc(videogameRef),{
        Descripcion:descripcion,Link:link, Puntuacion:puntuacion, Nombre:nombre
     })
      console.log('Juego creado en bd')
    }catch(error){
      console.error(error)
    }
}

  return (
    <div>
    <Navbar></Navbar>
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form>
    <div className="gap-4 items-center">
      <div className="form-group mb-6">
        <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="Nombre de Videojuego"
          onChange={(event) =>{
            setNombre(event.target.value);
          }}
          />
      </div>
      <div className="form-group mb-6">
        <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Descripcion"
          onChange={(event) =>{
            setDescripcion(event.target.value);
          }}
          />
      </div>
    </div>
    <div className="form-group mb-6">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="link imagen"
        onChange={(event) =>{
            setLink(event.target.value);
          }}
        />
    </div>
    <div className="form-group mb-6">
      <input type="number" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
        placeholder="Puntuacion Metacritic"
        onChange={(event) =>{
            setPuntuacion(event.target.value);
          }}
        />
    </div>
    <button type="button" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
     "
      onClick={registerGame}
      >Agregar</button>
  </form>
</div>
{documento.map((juego,index)=>{
          return(
            <a href="" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={juego.Link} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{juego.nombre}</h5>
                { 
                juego.Puntuacion >80 ? <p className="mb-3 font-normal text-5xl text-white dark:text-gray-400 bg-green-500"> {juego.Puntuacion}</p>
                : <p className="mb-3 font-normal text-5xl text-white dark:text-gray-400 bg-red-500">Rating {juego.Puntuacion}</p> 
                }
              <p>{juego.Descripcion}</p>
            </div>
        </a>
          )
        })}
    </div>
  )
        }

