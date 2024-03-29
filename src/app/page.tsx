import React from 'react'
export default function Home() {
return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-4'>
        <h1 className='text-purple-300'>Api For Penseum</h1>
  <div className='text-2xl font-bold bg-slate-400 p-6'>
   <h2 className='text-green-200'>Chat Bot Api</h2>
   <span className='flex'>
    <div>POST : </div>
    https://penseum.vercel.app/api/chatbot
    </span>
  </div>
  <div className='text-2xl font-bold bg-slate-400 p-6'>
   <h2 className='text-green-200'>Generate Quiz</h2>
   <span className='flex'>
    <div>POST : </div>
    https://penseum.vercel.app/api/quiz-generater
    </span>
  </div>
   </div>
  )
}
