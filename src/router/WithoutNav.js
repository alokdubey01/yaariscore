import React from 'react'
import { Outlet } from 'react-router-dom'

export default function WithoutNav() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
