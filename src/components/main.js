import React from 'react';
import Card from './card'
export default class Main extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
 
}
componentDidMount(){
  this.getData();
}
 getData=()=>{
var that =this;
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();         
        })
        .then(function(myJson) {
          that.setState({response: myJson});
        });
    }
  render () {
console.log("The datais",this.state.response);
    
    return (
        <div className="container">
          <h1>Articles</h1>
          {
          this.state.response === null ?"empty" :
          this.state.response.map((p)=>(
          
      <div>
      <Card
      title={p.title}
      upvote={p.upvote}
      date={p.date}
      />
      </div>
          )
      )
    }
      
      </div>

    )
  }

}