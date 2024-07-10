// import { useState } from 'react'
// import Accord from './components/Accord'
// import './App.css'

// function App() {
//   const[isClcked, setIsClicked] = useState(false)
//   const[oneisOpen, setOneIsOpen] = useState(false)
//   const[twoisOpen, settwoIsOpen] = useState(false)
//   const[threeisOpen, setthreeIsOpen] = useState(false)
  



//   const handleone =(isClcked)=> {   
//     if(isClcked){
//       setOneIsOpen(!oneisOpen)
//       settwoIsOpen(twoisOpen)
//       setthreeIsOpen(threeisOpen)
//     }
//    else{
//     setOneIsOpen(!oneisOpen)
//     settwoIsOpen(false)
//     setthreeIsOpen(false)
//    }
//   }

//   const handletwo=(isClcked)=> {
        
//     if(isClcked){
//       setOneIsOpen(oneisOpen)
//       settwoIsOpen(!twoisOpen)
//       setthreeIsOpen(threeisOpen)
//     }
//    else{
//     setOneIsOpen(false)
//     settwoIsOpen(!twoisOpen)
//     setthreeIsOpen(false)
//    }
//   }
  
//   const handlethree =(isClcked)=> {
        
//     if(isClcked){
//       setOneIsOpen(oneisOpen)
//       settwoIsOpen(twoisOpen)
//       setthreeIsOpen(!threeisOpen)
//     }
//    else{
//     setOneIsOpen(false)
//     settwoIsOpen(false)
//     setthreeIsOpen(!threeisOpen)
//    }
//   }




//   const biggerFsih =()=>{
//   setIsClicked(!isClcked)
//   }

    




// //  const itemOne = 'section 1'
// //   const itemtwo = 'section 2'
// //   const itemThree = 'section 3'     
      

  

//   return (
//     <div>

//       <div className='wahala' onClick={biggerFsih}>  multi selection</div>

//          <div className="accord-div"  >
//             <div className="accord"  onClick={() => handleone(isClcked)}  > <div>section 1</div> <div className="add">{oneisOpen ? '-': '+'}</div></div>
//            {oneisOpen && (<div className="accord-txt" > loijvkdsnvdjvb dnvdbvdkvbdjvbdjvbdvbdkvndjkvjhchcuscoansbchxcijc
//                 ikvdvhduivdzvhdusvdbvduhiuvbdsjkbdsjbnds</div>)}
//             </div>


//             <div className="accord-div"  >
//             <div className="accord"  onClick={() => handletwo(isClcked)}  > <div>section 1</div> <div className="add">{twoisOpen ? '-': '+'}</div></div>
//            {twoisOpen && (<div className="accord-txt" > loijvkdsnvdjvb dnvdbvdkvbdjvbdjvbdvbdkvndjkvjhchcuscoansbchxcijc
//                 ikvdvhduivdzvhdusvdbvduhiuvbdsjkbdsjbnds</div>)}
//             </div>

//             <div className="accord-div"  >
//             <div className="accord"  onClick={ () => handlethree(isClcked)}  > <div>section 1</div> <div className="add">{threeisOpen ? '-': '+'}</div></div>
//            {threeisOpen && (<div className="accord-txt" > loijvkdsnvdjvb dnvdbvdkvbdjvbdjvbdvbdkvndjkvjhchcuscoansbchxcijc
//                 ikvdvhduivdzvhdusvdbvduhiuvbdsjkbdsjbnds</div>)}
//             </div>
//     </div>
//   )
// }

// export default App
