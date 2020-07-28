import React from 'react';
import smilePhoto from '../smile.png';
import frownPhoto from '../frown.png';



class JokesCard extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {setup: '', punchline: '', smile: false, frown: false};
        this.changeSmile = this.changeSmile.bind(this);
        this.changeFrown = this.changeFrown.bind(this);
   
    }

    componentDidMount(){
        this.setState({setup: this.props.setup, punchline: this.props.punchline, smile: this.props.smile, frown: this.props.frown})
    }

    changeSmile(){
        if(this.state.frown){
            if(this.state.smile){
                this.setState({smile: false, frown: false})
            } else {
                this.setState({smile: true, frown: false})
            }
        } else {
            this.setState({smile: !this.state.smile})
        }
        
    }

    changeFrown(){

        if(this.state.smile){
            if(this.state.frown){
                this.setState({smile: false, frown: false})
            } else {
                this.setState({smile: false, frown: true})
            }
        } else {
            this.setState({frown: !this.state.frown})
        }
    }

    render(){

        let smile;
        let frown
        if(this.state.smile){
            smile = 'smile'
        } else {
            smile = ''
        }
        if(this.state.frown){
            frown = 'frown'
        } else {
            frown = ''
        }

       
        return (
            
            <div className='joke-card'>
                <div className = 'setup'>
                    {this.props.setup}
                </div>
                <div className = 'punch-line'>
                    {this.props.punchline}
                </div>

                <div className = 'like-buttons'>
                    <img onClick={this.changeSmile} className = {smile} src={smilePhoto} alt="like button as a smiley"/>
                  
                    <img onClick={this.changeFrown} className = {frown} src={frownPhoto} alt="dislike button as a frown"/>
                </div>
                
            </div>
          
        )
        
    }
};

export default JokesCard;