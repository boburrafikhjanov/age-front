import React, { useState } from 'react'
import Head from 'next/head'

import ConfigCards from '../../components/ConfigCards'

const Configurator = () => {
  const [configId, setConfigId] = useState(1)

  return (
    <>
      <Head>
        <title>Конфигуратор системного блок - Age.uz</title>
        <meta name="description" content="Самый оптовый магазин компьютерных товаров и телефонов в Узбекистане" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <section>
        <div className="containerFluid">
          <ConfigCards />
        </div>
      </section>
    </>
  )
}

export default Configurator
