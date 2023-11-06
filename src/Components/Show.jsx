import React from 'react'
import InsideCard from './InsideCard'

const Show = ({ display, handleChange }) => {
    let price = 0
    
    const total_price = display.map((item) => {
        return price += item.price  * item.amount
    })
    const actual_tot_price = total_price.pop()
    const discount = actual_tot_price * 10 /100
    const actual_tot_discount = actual_tot_price -  discount
    const delivery = Math.floor(Math.random() * 100)
    const actuall_total_price = actual_tot_discount + delivery
    
    return (
        <>
            {
                display.length > 0 ?
                    <section className='mt-10 flex justify-evenly flex-wrap items-start'>
                        <div>
                            <p className='text-2xl mb-0'>CARD</p>
                            {
                                display.map((item, index) => (
                                    <InsideCard item={item} key={index} handleChange={handleChange} />
                                ))
                            }
                        </div>
                        <div className='min-h-[20rem] border-2 mb-10 rounded-xl mt-20 p-10 min-w-[20rem]'>
                            <p className='text-2xl mb-2'>ORDER SUMMARY</p>
                            <hr />
                            <div className='mt-4 font-light text-lg leading-8 '>
                                <p>Price({display.length} items):  ${actual_tot_price}</p>
                                <p>Discount(10%):  ${Math.round(actual_tot_discount)}</p>
                                <p>Delivery Charges:  ${delivery === 0 ? 'Free' : delivery }</p>
                            </div>
                            <hr />
                            <p className='font-bold capitalize mt-3'>Total Amount: ${Math.round(actuall_total_price)}</p>
                            <button className='text-center mt-4
                            py-1
                            w-full bg-blue-400 
                            rounded text-white'>Place a Order</button>
                        </div>
                    </section>
                    :
                    <h2 className='text-3xl text-center uppercase mt-60' >There is no Item in the card</h2>
            }
        </>
    )
}

export default Show