import React from 'react'

export default function Alert(props) {
  
  return (
      <div style={{height:'100px'}}>
    {props && <div className={`alert alert-${props.type} alert-dismissible fade show text-center`} role="alert">
    {props.msg}
    </div>}
      </div>
  )
}
