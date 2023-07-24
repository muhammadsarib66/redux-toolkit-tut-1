import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {counter,IncValueByFront} from '../features/showSlice'

const SubChild1 = (props) => {

const data  = useSelector((c)=> { return c.show.value})

const dispatch = useDispatch()

    console.log ('SubChild1 ' , props)
  return (
    <div>
        <h3>SubChild - {data}</h3>
        <button onClick={()=> dispatch(counter())}> Click Me</button>
        <button onClick={()=> dispatch(IncValueByFront(10))}> Add with 10 </button>
    </div>
  )
}

export default SubChild1