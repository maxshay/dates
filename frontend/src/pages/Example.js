import React, { useEffect, useState }from 'react'

import Container from 'react-bootstrap/Container'
import Mynavbar from '../layout/Navbar'
import MyCard from '../components/MyCard'



const Example = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    
  }, [])

  return (
    <div className="page">
      <Mynavbar />
      <Container className="mt-7">
        { loading ? <div>Loading</div> : (
          <MyCard />
        )}
  
      
      </Container>
    </div>
  )
}

export default Example