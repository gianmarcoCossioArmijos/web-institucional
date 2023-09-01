import React from 'react'

const BaseLayout = (props) => {
  return (
    <div className='layout-base'>

        <div className='children-layout-base'>
            
            {props.children}

        </div>

    </div>
  )
}

export default BaseLayout