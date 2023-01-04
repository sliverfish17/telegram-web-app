import React from 'react'
import { Button } from '../Button/Button';

const telegram = window.Telegram.WebApp;

export const Header = () => {

const onClose = () => telegram.close();

  return (
    <header className='header'>
        <Button onClick={onClose}>Close</Button>
        <span className='username'>
            {telegram.initDataUnsafe?.user?.username}
        </span>
    </header>
  )
}
