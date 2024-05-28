// import React from 'react'

import Member from "./Member"

const ListMember = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-between pt-5 mb-4'>
          <h4>Lists Member</h4>
          <a href='/timecard' className='btn btn-dark'>Create TimeCard</a>
        </div>
        <div className='row'>
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </div>
  )
}

export default ListMember