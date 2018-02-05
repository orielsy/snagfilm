import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {   
   constructor(props) {
      super(props);
      this.state = {};
   }
   
   render() {
      if (this.props.isModalOpen === false) return null

      return (
         <div className="modal">
            <div className="modalInner">
               <div className="video" dangerouslySetInnerHTML={{ __html: this.props.film }}></div>
               <button onClick={()=> this.props.closeModal(null) }><span>X</span></button>
            </div>
         </div>
      );
   }
}

Modal.propTypes = {
   film: PropTypes.string,
   isModalOpen: PropTypes.bool,
   closeModal: PropTypes.func 
}

export default Modal;