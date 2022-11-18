import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-center mx-auto min-w-full z-20 pr-2 pl-2  bg-gradient-from:rgba(251, 193, 0, 0) to:rgba(251, 193, 0, 0.66/0)'>       
            <p className='text-white text-lg pl-5'>Les confitures de Pascal</p>
            {/* <div className='flex items-center content-center '>
                <a className='pr-5 pt-0 text-white text-sm sm:text-xl '>Nos Valeurs</a>
                <a className='pr-5 pt-0 text-white text-sm sm:text-xl'>Les confitures</a>
                <a className='pr-0  text-white text-sm sm:text-xl'>Nous Trouvez</a>
            </div> */}
    </header>
  )
}

export default Header