import React, { useState, useEffect } from 'react'
import Img from 'react-bootstrap/Image'
import Placeholder from './Placeholder'


const ImgWithPlaceholder = ({src, value}) => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setLoaded(true)
    }, 3000)
   
  }, [])


  return (
    <>
      {!loaded ? (
        <Placeholder classname='placeholder-svg' />
      ) : null}


      <Img fluid
        src={src}
        value={value}
        style={!loaded ? { width: 0, height: 0} : {}}
      />


      
    </>
  )}

export default ImgWithPlaceholder