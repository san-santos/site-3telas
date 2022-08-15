import Footer from 'components/footer'
import Header from 'components/header'
import Main from 'components/main'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <React.StrictMode>
        <Main />
      </React.StrictMode>
      <Footer />
    </>
  )
}

export default Home
