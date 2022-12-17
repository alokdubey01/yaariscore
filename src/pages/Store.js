import React from 'react'
import { Card } from '../components/Store/Card'
import { Corousel } from '../components/Store/Corousel'

export const Store = () => {
  return (
    <div className='store'>
    <div className='mt-12 z-20 relative'>
    <Corousel/>
    <div className='md:p-4 mt-12 mx-auto items-center justify-center'>
      <div className='flex flex-wrap gap-12 mt-12'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
    </div>
</div>
  )
}
