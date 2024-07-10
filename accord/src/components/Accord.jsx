import React from 'react'
import { useState } from 'react'
import data from './data'

const Accord = () => {

const [isSelected, setisSelected] = useState(false)
const [isClicked, setIsClicked] = useState(false)
const [multiSelect, setMultiselect] = useState([])

const handleClick =(selct)=>{
  
     setisSelected(isSelected === selct ? false : selct )
  

 
    }
   

const mutiselectionHandle =(selct)=>{
let cpyMultiple = [...multiSelect]
const findIndexofCurrentID = cpyMultiple.indexOf(selct)

if(findIndexofCurrentID === -1) cpyMultiple.push(selct)
else cpyMultiple.splice(findIndexofCurrentID, 1)


setMultiselect(cpyMultiple)
}

 const handleMultselct =()=>{
  setIsClicked(!isClicked)
 }
  return (
    
        <div  >
           <div className='wahala' onClick={handleMultselct} >  multi selection</div>
            {data.map(accds => (
              <div key={accds.id} className='accord-div' >
                <div className='accord' onClick = 
                {
                  isClicked ?
                  ()=>mutiselectionHandle(accds.id)
                   :
                   () => handleClick(accds.id)} >
                    
                    
                     {accds.question} <div className='add'>
                  {isSelected ? '-': '+'}</div></div>
               
               {
               isSelected === accds.id || multiSelect.indexOf(accds.id) !== -1 ? <div className='accord-txt'>  {accds.answer} </div> : null 
               }
              </div>
            ))}
            
           
   </div>
  )
}

export default Accord
