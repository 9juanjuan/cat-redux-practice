import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore,
        combineReducers } from 'redux' 
import { bigIntLiteral } from '@babel/types';



const NAP = 'nap';
const EAT = 'eat';
const PLAY = 'play';
const NAME = 'Milla'
const ACTIVITY = 'drool'

const initialState = {
    action: NAP,
    name: NAME,
    activity: ACTIVITY
};

console.log(initialState);



/// ACTIONS + ACTION CREATORS

const ACTION_NAP = NAP;
const ACTION_EAT = EAT;
const ACTION_PLAY = PLAY; 
const ACTION_SET_NAME = NAME;
const ACTION_SET_ACTIVITY = ACTIVITY;

export function setNap () {
    return {
        type: ACTION_NAP
    };
}

export function setEat () {
    return {
        type: ACTION_EAT
    };
}

export function setPlay () {
    return {
        type: ACTION_PLAY
    };
}

export function setName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name,
        }
    }
}

export function setActivity(activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            activity,
        }
    }
}

window.nap = setNap;
window.eat = setEat;
window.play = setPlay; 
window.setName = setName;
window.setActivity= setActivity;

///// Reducer

export function cat (state=initialState.action, action={type: ''}) {
    // console.log(`cat is doing this: ${action.state}`)
    switch (action.type) {
        case ACTION_NAP:
            return NAP;
        break;
        case ACTION_EAT:
            return EAT;
        break;
        case ACTION_PLAY:
            return PLAY;
        break;
        default:
         return state;
        break;
    }
}

export function name (state=initialState.name, action={type: ''}) {
    console.log(`cat was named : ${state}`)
    switch (action.type) {
        case ACTION_SET_NAME:
        console.log(`cat is NOW named : ${action.payload.name}`)

            return action.payload.name
        break;
        default: 
            return state;
        break;
    }
}
export function activity (state=initialState.activity, action={type: ''}) {
    console.log(`cat was doing this : ${state}`)
    switch (action.type) {
        case ACTION_SET_ACTIVITY:
        console.log(`cat is NOW doing this : ${action.payload.activity}`)
            return action.payload.activity
        break;
        default: 
            return state;
        break;
    }
}

export const Megastore = combineReducers({
    action: cat,
    name: name,
    activity: activity
})

export const store = createStore(Megastore)

window.store = store; 




ReactDOM.render(
     <App />
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
