import React from 'react'

const Card = ({ item, handleClick }) => {
    const { img, title, author, price } = item;
    return (
        <>
            <div className='h-[24rem] gap-y-1 rounded-md pb-10 pt-5
            border-2 flex flex-col justify-center items-start w-[20rem]
             p-10 overflow-hidden'>
                <img src={img} width={150} height={150} className='object-cover mx-auto mb-3' alt="" />
                <p className='font-thin'>{title}</p>
                <p className=' '>{author.length >= 20 ? `${author.slice(0, 18)}......${'more'}` : author}</p>
                <p>${price}</p>
                <button type='button' onClick={() => handleClick(item)} className='px-6 text-white bg-red-500 py-1 rounded '>Add To Card</button>
            </div>
        </>
    )
}

export default Card