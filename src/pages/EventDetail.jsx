import React from 'react'
import Events from '../common/data'
import { useParams } from 'react-router-dom'



function EventDetail() {

    const { eventId } = useParams()
    const event = Events.find((event)=>event.id === parseInt(eventId))
  return (
      <>
        <div key={event.id} className="event-card">
            <img src={event.imgPath} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Sponsored By:</strong> {event.sponsoredBy}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Guest:</strong> {event.guest}</p>
          </div>
      </>
  )
}

export default EventDetail