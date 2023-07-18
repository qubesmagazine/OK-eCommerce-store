import React from 'react'
import HeroProduct from '../components/HeroProduct'
import useFetch from '../hooks/useFetch'
import HomeCategory from '../components/HomeCategory'
import FeatureProduct from '../components/FeatureProduct'



function Home() {
const {error, loading, data} = useFetch('https://ecommtest.onrender.com/products')

  return (
    <>
      <HeroProduct error={error} data={data} loading={loading}/>
      <HomeCategory />
      <FeatureProduct error={error} data={data} loading={loading}/>
    </>
  )
}

export default Home
