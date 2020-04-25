import React from 'react'


const MyCard = ({name, date}) => {
  return (
    <div className="small-card">
      <div className="small-card__body">
        <p>{date}</p>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default MyCard