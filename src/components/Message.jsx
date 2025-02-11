import React from 'react'
import {picture} from '../assets'
import {sun} from '../assets'
import {lives} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: sun, title: 'My sun, Bina', description: "Aku selalu mengatakan fakta ketika aku bilang kalau kamu membuat hari-hariku lebih baik dan berharga, aku lebih bersyukur dengan kehidupan karena ada kamu. Kamu bahkan menyinari hariku lebih dari matahari dan bulan."},   
    { Image: lives, title: 'I will be your side in every life', description: "Katanya kucing itu punya 9 nyawa kan? Kalau kita kucing, semua nyawaku akan aku gunakan untuk mencintai kamu. HAHA, artinya bukan sebagai kucing aja sih. Tapi aku terlahir sebagai apapun juga, aku akan selalu mencintai kamu."},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Messages for My Wifey
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

export default Message