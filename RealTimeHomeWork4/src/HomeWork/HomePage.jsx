import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <ul>
        <li><Link to='/ProductAdd'>Add New Product</Link></li>
        <li><Link to='/ProductsList'>Products List</Link></li>

      </ul>
      <div>HomePage</div>
    </>

  )
}

export default HomePage