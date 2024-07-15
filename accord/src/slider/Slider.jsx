import React from 'react'
import { FetchData } from '../../../FetchData'
import { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Slider = () => {

    // const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImage, setCurrentImage] = useState(0)
    const [images, setImages] = useState([])


    const url = 'https://picsum.photos/v2/list?page=1&limit=10';


    useEffect(() => {



        FetchData(url).then(data => {
            // setImageData(data);
            setImages(data.map(data => (data.download_url)))
            setLoading(false)


        }).catch(error => {
            console.error('failed to fetch data:', error);
            setLoading(false)
        })
    }, [url])

    const RightArrowClick = () => {
        setCurrentImage(prev => (prev + 1) % images.length)
        console.log(images[currentImage])




    }

    const leftArrowClick = () => {
        { setCurrentImage(prev => (prev - 1 + images.length) % images.length) }
        console.log(images[currentImage])

    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='slider'>
            <div className='arrows'>
                <div onClick={leftArrowClick} className='left-arrow'><FaArrowLeft size={20} /> </div>
                <div onClick={RightArrowClick} className='right-arrow'> <FaArrowRight size={20} />   </div>
            </div>


            {/* {imageData.map((pic,index)=>(
        <div  key={pic.id}  className='slide-child'>
            {loading ? 'loading...' : <img src={pic.download_url} alt="" width={300} height={200}/>} </div>
      ))} */}

            <div> <img src={images[currentImage]} width={500} height={300} style={{borderRadius:'16px'}} />  </div>
            <span className='slide-circles'>
                {images && images.length ?
                    images.map((_, index) => (
                        <button key={index} className={`circles ${index === currentImage ?  'active-circle' : 'inactive-circle'}`}> </button>
                    )) : null} </span>

        </div>
    )
}

export default Slider