import React from 'react'
import Child2 from './Child2'
import { useSelector } from 'react-redux'

const Child1 = (props) => {
const data  = useSelector((c)=> { return c.show.value})

    const num = 1
  return (
    <div> <h1> Child = {data}</h1>
        <Child2 value= {num}/>
    </div>
  )
}

export default Child1