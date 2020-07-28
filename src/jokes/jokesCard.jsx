import React from 'react';



class JokesCard extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {email: '', password: ''};
   
    }



    render(){
        
        
       
        return (
            
            <div className='joke-card'>
                
                <h3>This is the joke</h3>
            </div>
          
        )
        
    }
};

export default JokesCard;