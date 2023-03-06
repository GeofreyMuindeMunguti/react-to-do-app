import { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';


class  App extends Component {
  state = {
   data : [
    {
      action: 'Clean up',
    },
    {
      action: 'Write some code',
    },
    {
      action: 'Sip some cofee',
    },
  ]
}

  removeAction = (index) => {
    const { data } = this.state
    
    // remove item and update state.
    this.setState({
      data: data.filter((_, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = action => {
    this.setState({data: [...this.state.data, action]});
  }

  render(){
    const { data } = this.state
  
    return (
      <div class="grid grid-cols-2 divide-x m-10">
        <Table data={data} removeAction={this.removeAction}/>
        <Form handleSubmit = {this.handleSubmit} />
      </div>
    );
    }
}

export default App;
