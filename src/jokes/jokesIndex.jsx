import React from 'react';
import Card from './jokesCard';


class JokesForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            jokes: [
                    {
                    setup: 'My wife and I were happy for twenty years.',
                    punchline: 'Then we met.',
                    smile: false,
                    frown: false
                    },
                    {
                    setup: 'I asked my old man if I could go ice-skating on the lake.',
                    punchline: 'He told me, “Wait til it gets warmer.”',
                    smile: false,
                    frown: false

                    },
                    {
                    setup: 'I could tell that my parents hated me.',
                    punchline: 'My bath toys were a toaster and a radio.',
                    smile: false,
                    frown: false
                    }

                ]
            }
    };
   
    



    render(){
        
        let jokes = this.state.jokes.map(joke => (
            <Card setup={joke.setup} punchline={joke.punchline} smile={joke.smile} frown={joke.frown}/>
        )) ;

       
        return (
            
            <div className='joke-index'>
                
                <h3>This is the jokes form</h3>
                {jokes}

            </div>
          
        )
        
    }
};

export default JokesForm;