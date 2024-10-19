'use client'
import { useState } from 'react'

function Counter ({ max = Infinity, min = 0, onSubmit, icon, children, initialCount }) {
  const [count, setCount] = useState(initialCount || 0)

  function handleIncrease () {
    if (count + 1 <= max) {
      setCount(parseInt(count, 10) + 1)
    }
  }
  function handleDecrease () {
    if (count - 1 >= min) {
      setCount(parseInt(count, 10) - 1)
    }
  }
  function handleChange (e) {
    // setCount(e.target.value)
    const countValue = parseInt(e.target.value, 10)
    console.log(typeof (countValue))
    // countValue = !isNaN(e.target.value) ? parseInt(e.target.value) : 0
    if (countValue >= min && countValue <= max) {
      setCount(countValue)
    } else if (isNaN(countValue)) {
      setCount(0)
    }
  }
  function handleOnClick () {
    onSubmit(count)
    setCount(0)
  }
  return (
    <div className='flex flex-row gap-3'>
        <div className='w-40 flex flex-row justify-between pl-2 items-center rounded-xl shadow-lg bg-secondary text-white'>
            <input className='w-full h-6 text-center border-none bg-transparent focus-within:outline-none focus-within:bg-slate-600 rounded-xl' name='counter' value={count} onChange={handleChange}/>
            <div className='flex h-full flex-col w-16 ml-3 rounded-xl'>
                <button className='hover:bg-slate-400 rounded-se-xl transition-all' onClick={handleIncrease}>+</button>
                <button className='hover:bg-slate-400 rounded-ee-xl transition-all' onClick={handleDecrease}>-</button>
            </div>
        </div>
        <div onClick={handleOnClick} className='font-medium transition-all cursor-pointer hover:bg-primary hover:text-white rounded-xl flex justify-center items-center p-2'>
        {icon || <p>!</p>}
        </div>
        {children}
    </div>

  )
}

export default Counter
