import React from 'react'
import { Cart, FlexContents, Footer, Hero, Navbar, Sales, Storeies } from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js'

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
     <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContents endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes}/>
        <FlexContents endpoint={sneaker}/>
        <Storeies story={story}/>
      </main> 
      {/* <Footer footerAPI={footerAPI}/> */}
    </>
  )
}

export default App
