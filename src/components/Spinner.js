import React, { Component } from 'react'
import loading from './loading.gif.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{height:"40px" , width:"40px"}}/>
      </div>
    )
  }
}

export default Spinner