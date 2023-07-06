import React from 'react'
import Link from './link'

const Linklist = (props) => {
    console.log(props)
  return (
    <ul>
        {
      props.product.map((item) => {
        return (
         <Link item={item}/>
        )
      })
        }
    </ul>
  )
}

export default Linklist
