import React from 'react'
import { Link } from "react-router-dom"
import Markdown from 'markdown-to-jsx'



function Banner({post}) {
    console.log(post);
    
  return (
    <div className='w-full mb-10'>
        <div className="relative w-full h-[500px] 2xl:h-[600px] flex px-0 lg:px-20">
            <Link to = {`/${post?.slug}/${post?._id}`} className='w-full'>
                <img src={post?.img} alt="Banner Image" 
                className='w-full md:w-3/4 h-64 md:h-[420px] 2xl:h-[520px] rounded'
                />

            </Link>
        </div>

    </div>
  )
}

export default Banner