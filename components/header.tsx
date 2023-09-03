import React from 'react'
import { Menu , Dumbbell } from 'lucide-react';

export default function Header() {
  return (
    <div className=''>
        <div className='flex justify-between p-5'>
        <div >
        <Dumbbell color="red" size={48} />
        </div>
        <div>
        <Menu color="red" size={48} />
        </div> 
    </div>
    </div>
  )
}
