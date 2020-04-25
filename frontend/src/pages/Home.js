// react
import React from 'react'
import { Link } from 'react-router-dom'

// bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Mynavbar from '../layout/Navbar'

// images
import eventSvg from '../imgs/events.svg'

const Home = () => {

  return ( 
    <div className="page">
    <Mynavbar />
    <Container 
      fluid
      className="homepage pb-5"
    >
      <Row className="h-100 justify-content-md-center">
        <Col md={{ span: 5, offset: 0 }} className="d-flex align-items-center">
          <div className="w-100 p-2 homepage__header-wrapper">
            <h2 className="homepage__header">Dates Source</h2>
            <p className="">Your #1 source for uncommon and unknown events and holidays.
            Here you can find fun, special, and weird events or holidays you might have not known existed.</p>
            <Link className="homepage__cstmlink" variant="primary" to="/info" ><Button className="homepage__cstmbtn mt-4" variant="primary">Let's Go!</Button></Link>
          </div>
        </Col>
        <Col md="5" className="d-flex align-items-center p-3">
          <div 
            className="w-100 cal-svg p-3"
          >
            <Image className="homepage__img" src={eventSvg} />
          </div>

        </Col>
      </Row>
    </Container>      
    </div>



  )
}

export default Home