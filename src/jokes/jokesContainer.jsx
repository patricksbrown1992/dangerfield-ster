import React from 'react';
import { Link } from 'react-router-dom';


class JokesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {email: '', password: ''};
   
    }



    render(){
        
        
       
        return (
            
            <div className='outerdiv'>
                
                <h3>This is the jokes form</h3>
            </div>
          
        )
        
    }
};

export default JokesForm;