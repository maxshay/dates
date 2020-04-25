import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// components
import Month from '../components/Month'


// imgs
import ImgWithPlaceholder from '../components/ImgWithPlaceholder'
import one from '../imgs/1.png'
import two from '../imgs/2.png'
import three from '../imgs/3.png'
import four from '../imgs/4.png'
import five from '../imgs/5.png'
import six from '../imgs/6.png'
import seven from '../imgs/7.png'
import eight from '../imgs/8.png'
import nine from '../imgs/9.png'
import ten from '../imgs/10.png'
import eleven from '../imgs/11.png'
import twelve from '../imgs/12.png'

import Mynavbar from '../layout/Navbar'

const Home = () => {

  const [name, setName] = useState('')
  const [open, setOpen] = useState(false)


  const myfuncdothis = (e) => {
    e.preventDefault()
    const month = e.currentTarget.getAttribute('value')
    setName(month)
    setOpen(true)
  }

  const myclosefunc = () => {
    setOpen(false)
  }


  return (
    <div className="page">

      <div className={'infopage text-center ' + (open ? 'overlay-dark' : '')}>
        
      <Mynavbar />
      <div className={'w-100 h-100 overflow-auto '}>
        <Container 
          fluid
          className="infopage__list mt-1 mt-sm-7"
        >
          {/* ROW #1 */}
          <Row className="infopage__list__row">
            <Col sm={12} md={6} xl={3}>
              <div
                value="january"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={one} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <div value="february"
                  onClick={e => myfuncdothis(e)}
                  className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={two} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
            <div value="march"
                  onClick={e => myfuncdothis(e)}
                  className="infopage__list-img p-3"
                >
                  <ImgWithPlaceholder src={three} />
                </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
            <div value="april"
                  onClick={e => myfuncdothis(e)}
                  className="infopage__list-img p-3"
                >
                  <ImgWithPlaceholder src={four} />
                </div>
            </Col>
          </Row>

          {/* ROW #2 */}
          <Row className="infopage__list__row">
            <Col sm={12} md={6} xl={3}>
              <div value="may"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={five} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <div value="june"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={six} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <div value="july"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={seven} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <div value="august"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={eight} />
              </div>
            </Col>
          </Row>

          {/* ROW #3 */}
          <Row className="infopage__list__row">
            <Col sm={12} md={6} xl={3}>
              <div value="september"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={nine} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <div value="october"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={ten} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <div value="november"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={eleven} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={3}>
              <div value="december"
                onClick={e => myfuncdothis(e)}
                className="infopage__list-img p-3"
              >
                <ImgWithPlaceholder src={twelve} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
      { open &&
        <Month
            closeModal={myclosefunc}
            month={name}
          />
      }
  
    </div>
  )
}

export default Home

