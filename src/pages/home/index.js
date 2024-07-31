import React from 'react'
import SideInfo from '../../components/home/SideInfo'
import MainBox from '../../components/home/MainBox'

const HomePage = () => {
  return (
    <div className='flex max-w-7xl mx-auto md:flex-row gap-10 md:gap-0 flex-col scale-[0.92]'>
      <SideInfo />
      <MainBox />
    </div>
  )
}

export default HomePage
