import React from 'react'
import './Moviecard.css'
import Rating from'./Rating.js'
const Moviecard = (props) => {
    const {movie = {}} = props
    const {
        id= '',
        name= 'xxx',
        image= 'http://kino.mediadem.nazwa.pl/media/cinema_poster/default-movie.png',
        description= 'xxx',
        rate='xxx',
        alt= 'xxx',
    } = movie
   
        return (
          <div>
          <div  className="grid-item" >
             <div id={id}>
             <img src={image} alt={alt} />
            <div>{name} </div>
            <div>{description} </div>
            <div className="ratingdiv"> <Rating count={rate} /></div></div>
               </div>   
        </div>);
     
    }

export default Moviecard
