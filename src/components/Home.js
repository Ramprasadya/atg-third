import React, { memo } from 'react'
// import svg from "./assets/svg with paths.svg"
const Home = ({adjective , getAdjective}) => {
  console.log("Home page ")
  return (
    <>
        <div>
         <h1>{adjective}</h1>
          <div>
             <button onClick={()=>{getAdjective()}} > {getAdjective()} </button>
          </div>
        </div>
    </>
  )
}

export default memo(Home) 