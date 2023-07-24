import React from 'react'
import SubChild1 from './SubChild1'

const Child2 = (props) => {
    // console.log('child2 ' ,props.value)
    const { value} = props
    console.log(value , "sss")
  return (
    <div>
       <h2> Child2 = {value }</h2>
       <SubChild1 subValue = {value} />
       


    </div>
  )
}

export default Child2