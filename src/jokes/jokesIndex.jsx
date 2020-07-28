import React from 'react';
import Card from './jokesCard';
import $, { get } from 'jquery';


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
        this.getJokes = this.getJokes.bind(this);
        this.receiveJokes = this.receiveJokes.bind(this);
    };

    receiveJokes(jokes){
        let arr = []
        jokes.forEach(joke => {
            arr.push({setup: joke.setup, punchline: joke.punchline, frown: false, smile: false})
        })
        let all_jokes = this.state.jokes.concat(arr)
        this.setState({jokes: all_jokes})
    }

    
    getJokes(){
     
        
            return $.ajax({
                
                url: 'https://official-joke-api.appspot.com/jokes/programming/ten'
            })
        
    }
    
    componentDidMount(){

        
        this.getJokes().then(jokes => (this.receiveJokes(jokes)))
        
    
 
    }
    

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