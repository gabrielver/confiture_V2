import Image from 'next/image'
import React from 'react'

type Props = {}

function Products({}: Props) {
  return (
    <div id='product' className='relative flex min-h-screen '>
      <div className="bg flex-col justify-center items-center">
      <div className="product_text text-center">
        <h1>Nos délicieuses confitures</h1>
        <h2>Nous travaillons avec des fruits bio, et n’hésitons pas à sublimer les fruits avec un soupçon d’épices bio sélectionnées et commercialisées par un grand nom de la gastronomie française.
            Les fruits sont sélectionnés avec soin, Pascal se déplace sur le marché de Rungis chaque semaine et nous recherchons des producteurs locaux ou des régions avoisinantes (Normandie, Picardie, ...)
        </h2>
      </div>
      <div className="cards flex flex-col justify-center pl-4 pr-4 ">
        <div className="card rouge relative  ">
            <div className="ellipse bg-red-500 w-1/3 flex items-center justify-center overflow-hidden"  >
              <Image className='flex scale-50 w' src="/cerise.png" alt="pot" height={100} width={100} />
            </div>
            <button className="product_title bg-white rounded-md p-1 absolute bottom-2 ">
              <p>Fruits Rouge</p>
            </button>
        </div>
        <Image className='absolute left-9 bottom-96' src="/cerise.png" alt="cerise"  height={100} width={100} />
        <div className="card green relative flex justify-end">
            <div className="ellipse bg-green-500 w-1/3  flex items-center justify-center overflow-hidden"  >
              <Image className='flex scale-50 w' src="/cerise.png" alt="pot" height={100} width={100} />
            </div>
            <button className="product_title bg-white rounded-md p-1 absolute bottom-2 ">
              <p>Fruits Rouge</p>
            </button>
        </div>
        <Image className='absolute right-9 bottom-60' src="/cerise.png" alt="cerise"  height={100} width={100} />
        <div className="card yellow relative ">
            <div className="ellipse bg-yellow-500 w-full  flex items-center justify-center overflow-hidden"  >
              <Image className='flex scale-50 w' src="/cerise.png" alt="pot" height={100} width={100} />
            </div>
            <button className="product_title bg-white rounded-md p-1 absolute bottom-2 ">
              <p>Fruits Rouge</p>
            </button>
        </div>
        <Image className='absolute left-9 bottom-24' src="/cerise.png" alt="cerise"  height={100} width={100} />
        <div className="card blue relative ">
            <div className="ellipse bg-blue-500 w-full  flex items-center justify-center overflow-hidden"  >
              <Image className='flex scale-50 w' src="/cerise.png" alt="pot" height={100} width={100} />
            </div>
            <button className="product_title bg-white rounded-md p-1 absolute bottom-2 ">
              <p>Fruits Rouge</p>
            </button>
        </div>
        <Image className='absolute right-9 bottom-0' src="/cerise.png" alt="cerise"  height={100} width={100} />
      </div>
      </div>
   
    </div>
  )
}

export default Products