import React from 'react'
import { useState, useEffect } from 'react'





const Hexcode = () => {

const [typeofcolor, setTypeofColor] = useState('hex')
const [color, setColor] = useState('#000000')
// const [color, setRgbColor] = useState('#000000')

 
const getRand = (lenght)=>{
  
       let  rand = Math.floor(Math.random() * lenght);
    

   return rand
}

useEffect(()=> {
    if(typeofcolor === 'rgb') createRBGColor ();
    else createHexColor ()
},[typeofcolor])

function createHexColor (){
    let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexCOr ='#' 

    for(let i =0; i< 6; i++){
        hexCOr += hex[getRand(hex.length)]
    }

    setColor(hexCOr)
}

function createRBGColor (){
  let r = getRand(256)
  let b = getRand(256)
  let g = getRand(256)

 let rgbcode;
 rgbcode = `rgb(${r},${g},${b})`

  setColor(rgbcode)
  console.log(rgbcode)
}


const selectHexTypeof =()=> {

    setTypeofColor('hex')

}

const selectRbgTypeof =()=> {

    setTypeofColor('rgb')

}


  return (
    <div className='coloDiv'  style={{ backgroundColor: color}}>
        <div>
    

        <button onClick={selectHexTypeof}>
         Hex color </button>

        <button onClick={selectRbgTypeof} >
       RGB color </button>

             <button onClick={typeofcolor === 'hex' ? createHexColor: createRBGColor} >
            generate random color </button></div>


            <div> 
                Current color:{typeofcolor === 'hex' ? `Hex: ${color}`: `${color}`}
            </div>

    </div>
  )
}

export default Hexcode