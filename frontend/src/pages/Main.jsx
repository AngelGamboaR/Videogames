import React from 'react'
import Navbar from '../components/Navbar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { auth } from '../firebase-config';



export default function Main() {
  const [games, setGameData] = useState([])
  const [user, setUser] = useState({})
  
  

useEffect(()=>{
  const getGames = async () => {
    const url= `https://api.rawg.io/api/games?key=39cc91002d86485594199d96f46abf51&page_size=60`
    await axios.get(url).then((response)=>setGameData(response.data.results))
  }
  getGames();
},[])

useEffect(() => {
  setUser(JSON.parse(localStorage.getItem('usuarioLogeado')))
}, [])


  return (
    <div>
      <Navbar></Navbar>
      {
        user.emailVerified ?
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {games.map((game,index)=>{
          return(
            <a href="" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={game.background_image} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h5>
                { 
                game.metacritic >80 ? <p className="mb-3 font-normal text-5xl text-white dark:text-gray-400 bg-green-500"> {game.metacritic}</p>
                : <p className="mb-3 font-normal text-5xl text-white dark:text-gray-400 bg-red-500">Rating {game.metacritic}</p> 
                }
              <p>{game.description}</p>
            </div>
        </a>
          )
        })}
      </div>
      : 
      <div className='p-10'> 
      <p className='text-center text-red-700 font-bold text-9xl'>VERIFICA TU EMAIL PARA VER ESTE CONTENIDO</p>
      </div> 
      }
    </div>
  )
}
