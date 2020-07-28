import React from 'react';
import smile from '../smile.png';
import frown from '../frown.png';



class JokesCard extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {setup: 'My wife and I were happy for twenty years.', punchline: 'Then we met.'};
   
    }



    render(){
        
        
       
        return (
            
            <div className='joke-card'>
                <div className = 'setup'>
                    {this.state.setup}
                </div>
                <div className = 'punch-line'>
                    {this.state.punchline}
                </div>

                <div className = 'like-buttons'>
                    <img className = 'smile' src={smile} alt="like button as a smiley"/>
                    <img className = 'frown' src={frown} alt="dislike button as a frown"/>
                </div>
                
            </div>
          
        )
        
    }
};

export default JokesCard;