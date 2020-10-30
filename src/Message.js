import './App.css';
import React , {useState} from 'react';
import App from './App';


function Message (props){

    return (
        <div>
            <h2>Let's start Counting : {props.counter}</h2>
    <h2>You Counted Upto {props.lastcounted} Last Time </h2>
        </div>
        

    );
}

export default Message;