import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-700 flex items-center px-12 gap-5'>

            <div className='cardcontainer h-[50vh] w-1/2 '>
                <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-3 py-1 border-2 border-[#CDEA68] left-10 bottom-10 rounded-full text-[#CDEA68]'>&copy;2019-2022</button>
                </div>
            </div>

            <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-3 py-1 border-2 left-10 bottom-10 rounded-full text-[#FFF]'>RATING 5.0 ON CLUTCH</button>
                </div>
                
                <div className='card relative rounded-xl w-1/2 h-full flex items-center justify-center bg-[#212121]'>
                    <img className='w-32 scale-75' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-3 py-1 border-2 left-10 bottom-10 rounded-full text-[#FFF]'>BUSINESS BOOTCAMP ALUMINI</button>
                </div>
            </div>

        </div>
    )
}


export default Cards
