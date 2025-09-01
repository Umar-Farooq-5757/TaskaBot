import React, { useEffect, useState } from 'react'
import { dummyPublishedImages } from '../assets/assets'


const Community = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setImages(dummyPublishedImages)
    setLoading(false)
  },[])
  return (
    <div className='overflow-auto w-full'>
      <h1 className='font-bold text-2xl my-5 ml-6'>Published Images</h1>
      <div className='px-6 py-2 flex flex-wrap gap-8'>
        {
        images.map((image,index)=>{
          return (<a className='relative overflow-hidden cursor-pointer  group' key={index}>
            <img className='rounded-md size-52' src={image.imageUrl} alt="" />
            <p className='absolute -bottom-5 transition-all group-hover:-bottom-0 right-0 text-sm text-white bg-gray-700 px-2 rounded-sm'>Created by {image.userName}</p>
          </a>)
        })
      }
      </div>
    </div>
  )
}

export default Community
