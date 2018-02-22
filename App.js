import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      paras:4,
      html:true,
      text:''
    }
  }
  componentWillMount(){
    this.getText();

    }
    getText(){
      axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
      .then((response) => {
        this.setState({text: response.data.text}, function(){
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
 showHtml(x){
this.setState({html:x},this.getText)
 }
 changeParas(number){
  this.setState({paras: number}, this.getText);
}
  
  render() {
    return (
      <div className="App container">
      <h1>ReactJs Sample Generator</h1>
      <hr/>
<form className="forum-inline">
<div className="forum-group">
<label>Paragraph:</label>
<Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
<label>Include HTML:</label>
<Select value={this.state.html} onChange={this.showHtml.bind(this)}/>
</div>
</form>



       <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
