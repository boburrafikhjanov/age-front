import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { navigation } from '../../../mockData/navigation'

import cls from './Header.module.scss'

const Header = () => {
  const router = useRouter()

  return (
    <header className={cls.header}>
      <div className="containerFluid">
        <nav className={cls.headerNav}>
          <Link href="/">
            <a className={cls.headerLogo}>Age.uz</a>
          </Link>
          <ul className={cls.headerMenu}>
            {navigation.map((item) => (
              <li key={item.id}>
                <Link href={item.route}>
                  <a className={router.pathname === `${item.route}` ? `${cls.activeLink}` : ''}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
