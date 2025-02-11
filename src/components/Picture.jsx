import React from 'react'
import { picture } from '../assets'
import { kencan1 } from '../assets'
import { kencan2 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: kencan1, title: 'November 25, 2024', description: "Kencan pertama kita, sebenarnya apa yang aku rasakan saat itu sebagian besarnya sudah kamu ketahui, senang dan gugup adalah yang paling menguasai. Wifey, I always love and cherish the moments."},   
    { Image: kencan2, title: 'Januari 26, 2024', description: "Kencan kedua kita, aku senang banget di sini karena ini mengobati rasa kangenku yang bertambah terus. Terima kasih karena mau menuntun aku dan maaf merepotkan, tapi kamu kocak, kok pakai outfit itu sih. Mau pingsan."},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture