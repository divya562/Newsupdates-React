import React from 'react'
import loading from './loading.gif.gif'

const Spinner =()=> {

    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" style={{height:"40px" , width:"40px"}}/>
      </div>
    )
  }

export default Spinner