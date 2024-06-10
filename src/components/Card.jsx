

import React from 'react'

export default function Card() {
  return (
    <div className='flex m-2 w-[31%] items-center justify-center border-solid border-neutral-400 h-[250px] shadow-[0_35px_60px_-15px_rgba(0,1,1,0.3)]'>
        
        <div >
            <img className='rounded m-3 h-[200px] w-[90%] items-center' src='https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        </div>

        <div className='m-5'>
            <h1>Loram</h1>
            <h4>Lorem ipsum dolor sit</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

    </div>
  )
}
