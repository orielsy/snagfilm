import React from 'react';
import PropTypes from 'prop-types';

const Film = ({onFilmSelect, title, img, tags, duration, iframe}) => {      
   return(
      <li onClick={()=> onFilmSelect(iframe)}>
         <div className="media">
            <img src={ img } />
            <div className="hoverInfo">
               <img src='build/play.png'/>
               <p className="mins">{ duration }MINS</p>
               <p className="tags">Tags: { tags || 'none'}</p>
            </div>
         </div>
         <h3>{ title }</h3>            
      </li>
   );   
}

Film.propTypes = {
   onFilmSelect: PropTypes.func,
   title: PropTypes.string,
   img: PropTypes.string,
   duration: PropTypes.number,
   tags: PropTypes.string,
   iframe: PropTypes.string
}

export default Film;