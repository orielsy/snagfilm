import React, {Component} from 'react';
import Axios from 'axios';

import FilmList from './components/filmlist';
import Modal from './components/modal';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
         films: null,
         isModalOpen: false,
         selectedFilm: null,
         errorMsg: 'Fectching Movie Data',        
      }      
   }
   
   componentWillMount(){
      Axios.get('http://www.snagfilms.com/apis/films.json?limit=10')
         .then((response) => {
            this.setState({
               films: response.data.films.film
            });
         })
         .catch((error) => {            
            this.setState({
               requestFailed: true,
               errorMsg: error.message
            })
         })
      ;
   }     
   render() {     
   if(this.state.films === null) return <p className="warning">{this.state.errorMsg}</p>
   return (
      <div className="App">        
        <FilmList 
          onFilmSelect={ this.toggleModal }
          films = { this.state.films } />
        <Modal          
          closeModal = { this.toggleModal }
          isModalOpen = {this.state.isModalOpen}
          film = {this.state.selectedFilm} />   
      </div>
    );
  }

  toggleModal = (selectedFilm) => {
    if(selectedFilm !== null){
      this.setState({       
        isModalOpen: !this.state.isModalOpen,
        selectedFilm: selectedFilm      
      });
    }
  }

}
export default App;