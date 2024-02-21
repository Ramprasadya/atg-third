import React from 'react'
import svg from "./assets/svg with paths.svg"
const Home = () => {
  return (
    <>
        <div className="container">
            <div className='flex ' >
              <div className='left w-1/2 bg-blue-600 min-h-100vh ' >
                 
                 <div className='text-white relative' >
                    <p>Developing ERP solution for</p>
                    <h2>Text Headline</h2>
                     <p>in furniture industry</p>
                <div className='svg absolute ' >
                 <img src={svg} alt="svg" />
                 </div>
                 </div>
              </div>
              <div className='right w-1/2 ' >
              </div>
            </div>
        </div>
    </>
  )
}

export default Home