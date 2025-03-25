import React from 'react'
import Events from '../common/data'
import { Link, useSearchParams } from 'react-router-dom'


function EventsList() {

    const [searchParam, setSearchParam] = useSearchParams()
    console.log(searchParam.get('category'))

    const category = searchParam.get('category') || 'all'

    const filteredEvents = Events.filter((event)=> category === "all" || event.category === category)
    console.log(filteredEvents);
    

  return (
      <>
          <div className="fliter-btn">
              <button onClick={()=>setSearchParam({category:'all'})}>All</button>
              <button onClick={()=>setSearchParam({category:'tech'})}>Tech</button>
              <button onClick={()=>setSearchParam({category:'sports'})}>Sports</button>
              <button onClick={()=>setSearchParam({category:'music'})}>Music</button>
          </div>

          { filteredEvents.length >0 ?
              filteredEvents.map((event) => (
                  <Link key={event.id} to={`/events/${event.id}`}>
                      <img src={event.imgPath} alt="event-pic" width='500' />
                      <h2>Title:{ event.title }</h2>
                  </Link>
              ))
              : <h2>No Events Found</h2>
              
          }

        </>
    )
  
}

export default EventsList