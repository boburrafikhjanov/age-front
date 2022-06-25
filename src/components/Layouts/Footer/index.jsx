import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import cls from './Footer.module.scss'
import { navigation } from '../../../mockData/navigation'

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className="containerFluid">
        <div className={cls.footerGrid}>
          <div className={cls.footerGridItem}>
            <Link href="/">
              <a className={cls.footerLogo}>Age.uz</a>
            </Link>

            <div className={cls.footerMenu}>
              <ul>
                {navigation.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <a>{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={cls.footerGridItem}>
            <div className={cls.footerGridItemTitle}>Заголовок</div>
            <div className={cls.footerMenu}>
              <ul>
                {navigation.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <a>{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={cls.footerCopyright}>Все права защищены © 2022 Age.uz</div>
      </div>
    </footer>
  )
}

export default Footer
