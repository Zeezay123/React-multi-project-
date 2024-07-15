import { useState } from 'react'
import Accord from './components/Accord'
import './App.css'
import Hexcode from './hex/Hexcode'
import Rating from './rating/Rating'
import Slider from './slider/Slider'

function App({handleMultselct }) {
  



//  const itemOne = 'section 1'
//   const itemtwo = 'section 2'
//   const itemThree = 'section 3'     
      

  

  return (
    <div className='wrapper'>

     
     <Accord/>
     <Hexcode/>
     <Rating/>
     <Slider/>
    </div>
  )
}

export default App
