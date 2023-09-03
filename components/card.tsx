import React, { useState } from 'react'
import { Apple,Dumbbell, Pill, CalendarClock } from 'lucide-react';

interface CardProps {
    Icono:string
}

const renderIcono = (Icono: String ) => {
    switch(Icono){
        case 'Apple':
            return  <Apple color="red" size={120}/>;
        case 'Dumbbell':
            return  <Dumbbell color="red" size={120}/>;
        case 'Pill':
            return  <Pill color="red" size={120}/>;
        case 'CalendarClock':
            return  <CalendarClock color="red" size={120}/>;

        default:
            return null;
    }
};

export default function Card({Icono}:CardProps) {
  return (
    <div>
        <div className='bg-white h-60 w-60 rounded-3xl flex justify-center place-items-center'>
            {renderIcono(Icono)}
        </div>
    </div>
  )
}
