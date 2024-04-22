import { getGenreNames, startLinkImag } from '@/contextAPI/getOptions'
import Image from 'next/image'
import React from 'react'
import { FiPlayCircle } from "react-icons/fi";


function MovieCard({ movie, key }) {

  const typeMovie = getGenreNames(movie)

  return (
    <div className='pt-1 ' key={key} >
      <div className="MovieCard bg-white   	" >
        <div className="group transition-all relative">
          <Image className='w-[100%] h-[100%]  hover:cursor-pointer' width={100} height={100} priority src={movie.poster_path ? startLinkImag + movie.poster_path : startLinkImag + movie.profile_path} alt={movie.name || movie.title} />
          <div className="layerCard flex items-center duration-700 justify-center overflow-hidden absolute bg-[rgba(0,0,0,0.47)] transition-all top-[100%] group-hover:top-0 bottom-0 right-0 left-0">
            <FiPlayCircle  className='text-[3rem]'/>
          </div>
        </div>
        <div className="titleMovie py-1 text-stone-950 font-[700] flex itmes-center justify-between gap-2">
          <h3 className='truncate'>{movie.title || movie.name}</h3>
          <div className="rate pb-1 text-primary">
            {movie.vote_average ? <span className=' text-[.8rem] text-center text-primary border-primary border '>{(movie.vote_average / 2).toFixed(1)}</span>
              : ''}
          </div>
        </div>
        <div className="typeMovie flex gap-1">
          {typeMovie.map((type) => <h3 className='text-primary border-primary text-[.7rem] border-b-[.03rem] '>{type}</h3>)}
        </div>

      </div>

    </div>
  )
}

export default MovieCard
