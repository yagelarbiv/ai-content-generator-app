import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=' p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex gap-2 item-center border rounded-md max-w-lg bg-white'>
        <Search />
        <input type='text' placeholder='Search...' 
        className='outline-none'
        />
      </div>
      <div>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white  px-2'>🔥Join MemberShip just for $9.99/Mounth</h2>
      </div>
    </div>
  )
}

export default Header
