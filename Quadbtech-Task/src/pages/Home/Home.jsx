import React from 'react'
import Cards from '../ShowList/Cards'

const Home = () => {
  return (
    <div className="xl:px-24 py-24">
        <div className='text-center'><h1 className='pt-24 text-7xl font-bold'>Best Movies, </h1>
        <h1 className='pb-24 text-7xl font-bold'>that everyone likes.</h1>
       </div>
        
      <Cards/>
    </div>
  )
}

export default Home
