import React from 'react'

const Spinner = () => {
  return (
   

    <div class="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
    <div class="spinner-border text-primary" role="status" style={{width: '6rem', height: '6rem'}}>
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  )
}

export default Spinner