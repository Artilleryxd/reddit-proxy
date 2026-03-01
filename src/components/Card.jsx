import React from 'react'

export default function Card({title, description}) {
  return (
    <div className="max-w-lg min-w-md mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h2>
        <p className='text-gray-600 mb-4'>{description}</p>
        <button className='mt-auto text-sm text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors'>Open</button>
    </div>
  )
} 