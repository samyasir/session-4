import './App.css';
import React , {useState} from 'react';
import App from './App';


function Message (props){

    return (
        <h2>Let's start Counting : {props.counter}</h2>

    );
}

export default Message;