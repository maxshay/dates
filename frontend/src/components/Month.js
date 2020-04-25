import React, { useEffect, useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import dateFormat from 'dateformat'
import { getDatesFromMonth } from '../utils/index'


// bootstrap 
import MyCard from './MyCard'
import Spinner from 'react-bootstrap/Spinner'

const Month = ({closeModal, month}) => {
  const [loading, setLoading] = useState(true);
  // const [events, setEvents] = useState([]);
  
  const eventsMarkup = useRef([])

  useEffect(() => {
    getDatesFromMonth(month)
      .then(data => {
        eventsMarkup.current = data.map(event => {
          let parts = event.eventdate.split("-")
          let mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
          return <MyCard key={event.id} name={event.eventdatename} date={dateFormat(mydate, "mmmm dS")}></MyCard>           
        })
        setLoading(false)
      })
      .catch(err => console.log(err))

    return () => {
      if (eventsMarkup) { 
        clearInterval(eventsMarkup.current)
        eventsMarkup.current = null
      }
    }
  }, [month]);



  return (
    <div className="events-list-modal ">
      <h3 className="mb-4">{month}</h3>
      <Button className="events-list-modal__close" onClick={closeModal}><span>&#215;</span></Button>

      { loading && eventsMarkup.current ? (
        <div className="cstm-spinner">

          <Spinner animation="border" role="status" className="">
            <span className="sr-only">Loading...</span>
          </Spinner>
          </div>
        ) : (
          <div className="mx-auto small-card-container">
            {eventsMarkup.current}
          </div>
        ) 
      }

   
    </div>
  )


}

export default Month


