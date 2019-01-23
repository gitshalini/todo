import React, { Component } from 'react';
import {Todo} from '../components/todo';
import {connect} from 'react-redux';
import { GetText, GetSuggestion } from '../actions/todoAction';


class App extends Component {
    render() {
    return (
      <div className="App">
      <Todo ChangeText={(value) => this.props.GetText(this.props.value)} value={this.props.value} EditText={(e) => this.props.GetSuggestion(e.target.value)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        Todo : state.Todo,
        value: state.Todo.suggestion
    };
    }
    
const mapDispatchToProps = (dispatch) => {
    return{
        GetText : (value) => {
        dispatch(GetText(value));
        },
        GetSuggestion : (text) => {
            console.log(text);
            dispatch(GetSuggestion(text));
            }
    };
    }
      
export default connect(mapStateToProps, mapDispatchToProps)(App);
