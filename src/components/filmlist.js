import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Film from '../components/film';

class FilmList extends Component {
   constructor(props){
      super(props);
      this.state = {}
   }
   render(){
      const films = this.props.films.map((film) => {
         return (
            <Film
               onFilmSelect = { this.props.onFilmSelect }
               key= { film.id }
               title= { film.title }
               img= { film.images.image[0].src }
               tags= { film.tags }
               duration= { film.durationMinutes }
               iframe= { film.renditions != undefined ? film.renditions.rendition[0].url : null }                     
            />
         );
      });           
      return (
         <ul className="filmList">{ films }</ul>
      );
   }
}
FilmList.propTypes = {
   onFilmSelect: PropTypes.func,
   films: PropTypes.array 
}
export default FilmList;