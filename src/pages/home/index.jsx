import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Главная - Age.uz</title>
        <meta name="description" content="Самый оптовый магазин компьютерных товаров и телефонов в Узбекистане" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <section>
        <div className="containerFluid">
          <h1>Главная страница!</h1>
        </div>
      </section>
    </>
  )
}

export default Home
