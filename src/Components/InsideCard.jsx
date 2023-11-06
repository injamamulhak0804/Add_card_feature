import React from 'react'

const InsideCard = ({ item, handleChange }) => {
    const { title, img, author, amount, price } = item
    return (
        <>
            <div className='container mt-20 mb-20 mx-auto'>
                <div className='flex max-sm:flex-col max-sm:items-center max-sm:max-w-sm mt-10 max-w-xl gap-4 border-2 p-10 rounded-xl'>
                    <img src={img} width={150} className='max-sm:mb-6' />
                    <div className='flex flex-col'>
                        <p className='font-bold '>{title}</p>
                        <p className='font-bold '>{author}</p>
                        <div className='flex mt-3 gap-3 max-sm:mt-5 items-center'>
                            <button className='px-3 py-1 bg-blue-500 text-white rounded' onClick={() => handleChange('add', item)}>+</button>
                            <p>{amount}</p>
                            <button className='px-3 py-1 bg-blue-500 text-white rounded' onClick={() => handleChange('sub', item)}>-</button>
                        </div>
                        <p className='mt-4 font-thin text-slate-500 '>Price: $({price} x {amount})</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InsideCard