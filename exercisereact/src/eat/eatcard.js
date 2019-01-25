import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class EatCard extends React.Component {
    state = {  }
    render() { 
        return ( 
            
            <div class="card" style={{width: '18rem',marginRight:'20px'}}>

             <a href="#"><i class="fa fa-thumbs-up">54</i></a>
             <a href="#"><i class="fa fa-thumbs-down">0</i></a>

             


            <img src={`images/${this.props.image}`}  class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{this.props.name}</h5>
                <p class="card-text">{this.props.about}</p>
                
               
            </div>
            <a href="#"><i class="fa fa-user"></i></a>
            </div>
         );
    }
}
 
export default EatCard;



 
