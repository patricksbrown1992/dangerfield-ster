import React from 'react';
import Card from './jokesCard';


class JokesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {email: '', password: ''};
   
    }



    render(){
        
        
       
        return (
            
            <div className='outerdiv'>
                
                <h3>This is the jokes form</h3>
                <Card /> 
                <Card /> 

            </div>
          
        )
        
    }
};

export default JokesForm;