import React from 'react'

export default function page() {
  return (
    <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
            <p className='text-xs'>300+ Stays for 5 number of guests</p>

            <h1 className='text-3xl front-semibold mt-2 mb-6'>Stays in Mars</h1>

            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                <p className='button'>Cancellation Flexibility</p>
                <p className='button'>Type of place</p>
                <p className='button'>Price</p>
                <p className='button'>Rooms and Beds</p>
                <p className='button'>Filter</p>
            </div>
        </section>
    </main>
  )
}