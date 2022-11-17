import Image from 'next/image'
import React, { useState } from 'react'
import RougeModal from "./RougeModal"
type Props = {}

function Products({}: Props) {

  
 const [showRouge, setShowRouge] = useState(false); 



  return (
    <div id='product' className='relative flex min-h-screen overflow-hidden '>
      <div className="bg flex-col justify-center items-center">
      <div className="product_text text-center pt-8">
        <h1>Nos délicieuses confitures</h1>
        <h2>Nous travaillons avec des fruits bio, et n’hésitons pas à sublimer les fruits avec un soupçon d’épices (également) bio .
            Les fruits sont sélectionnés avec soin, Pascal se déplace sur le marché de Rungis chaque semaine et nous recherchons des producteurs locaux ou des régions avoisinantes (Normandie, Picardie, ...)
        </h2>
      </div>
      <div className="cards  ">
       <div className="cards_up flex justify-around items-center pt-8">
       <div className="card rouge relative " >
            <div className="ellipse bg-[#fe353530] rounded-full  flex items-center justify-center h-36 w-36 " onClick={() => setShowRouge(true)}  >
              <img className='flex scale-[2.5] mix-blend-multiply' src="/fruit_rouge.png" alt="pot"  />
            </div>
            <button className="product_title  w-full rounded-b-sm p-1 mt-3 ">
              <p>Fruits Rouge</p>
            </button>
            {/* <Image className='absolute scale-100 left-[-50%] top-[20%] rotate-[-25deg]' src="/cerise.png" alt="cerise"  height={100} width={100} /> */}
        </div>
        <div className="card verger relative min-w-[120px] ">
            <div className="ellipse bg-yellow-100 rounded-full flex items-center justify-center h-36 w-36  "  >
              <img className='flex scale-[2.5] mix-blend-luminosity' src="/_verger.png" alt="pot" />
            </div>
            <button className="product_title w-full rounded-b-sm p-1 mt-3  ">
              <p>Fruits du Verger</p>
            </button>
            {/* <Image className='absolute scale-125 right-[-40%] top-[30%] rotate-12' src="/pomme.png" alt="cerise"  height={100} width={100} /> */}
        </div>
        
       </div>
       <div className="cards_down flex justify-around items-center pt-20">
       <div className="card rouge relative min-w-[120px]">
            <div className="ellipse bg-orange-200 rounded-full flex items-center justify-center h-36 w-36  "  >
              <img className='flex scale-[2.5] mix-blend-luminosity' src="/_agrumes.png" alt="pot"  />
            </div>
            <button className="product_title w-full rounded-b-sm p-1 mt-3 ">
              <p>Agrumes</p>
            </button>
            {/* <Image className='absolute scale-125 left-[-40%] bottom-[10%] rotate-[-20deg]' src="/orange.png" alt="cerise"  height={100} width={100} /> */}
        </div>
        <div className="card green relative min-w-[120px] ">
            <div className="ellipse bg-[#d970ff2f] rounded-full flex items-center justify-center h-36 w-36   "  >
              <img className='flex scale-[2.5] mix-blend-luminosity' src="/_meli_melo.png" alt="pot"  />
            </div>
            <button className="product_title w-full rounded-b-sm p-1 mt-3  ">
              <p>Méli-Mélo</p>
            </button>
            {/* <Image className='absolute right-[60%] bottom-[10%] drop-shadow-md' src="/myrtille.png" alt="cerise"  height={100} width={100} />
            <Image className='absolute right-[-39%] bottom-[10%] -rotate-180 drop-shadow-md' src="/myrtille.png" alt="cerise"  height={100} width={100} /> */}
        </div>
        
       </div>
      </div>
      </div>
      {showRouge && (< RougeModal openRouge={setShowRouge}/>)}
   
    </div>
  )
}

export default Products