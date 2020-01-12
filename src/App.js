import React, {Component} from 'react';
import SearchForm from './Components/SearchForm';

export default class App extends Component{

 //this is search form component
    render(){
        return(
            <div className = "App">

            <SearchForm />
            </div>
        )
    }
}