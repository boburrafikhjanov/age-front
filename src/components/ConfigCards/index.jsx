import React from 'react'

import cls from './ConfigCards.module.scss'

const configs = ['Офисный ноутбук', 'Игровой ноутбук', 'Офисный компьютер', 'Игровой компьютер']

const ConfigCards = () => {
  return (
    <div className={cls.configCards}>
      <div className={cls.card}>
        <div className={cls.cardImg}></div>
        <div className={cls.cardTitle}></div>
      </div>
    </div>
  )
}

export default ConfigCards
