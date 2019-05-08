import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore,
        combineReducers } from 'redux' 
import { bigIntLiteral } from '@babel/types';
import initialAnimals from './base'



// const NAME = 'Milla';
// const ACTIVITY = 'drool';

const initialState = {
    ...initialAnimals
};

console.log(initialState);



/// ACTIONS + ACTION CREATORS

const ACTION_SET_NAME = 'name';
const ACTION_SET_ACTIVITY = 'activity';
const ACTION_ADD_CAT = 'add';

export function setName(id, name) {
    return {
        type: ACTION_SET_NAME,
        payload: {
            id,
            name,
        }
    }
}

export function setActivity(id, activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            id,
            activity,
        }
    }
}
export function addCat(name, activity) {
    return {
        type: ACTION_ADD_CAT,
        payload: {
            name,
            activity
        }
    }
}


window.setName = setName;
window.setActivity= setActivity;
window.addCat= addCat;

///// Reducer

export function cat (state=initialState.cats, action={type: ''}) {
    // console.log(`cat is doing this: ${action.state}`)
    console.log(state)
    switch (action.type) {
        case ACTION_SET_NAME:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    name:action.payload.name
                }
            }
        break;
        case ACTION_SET_ACTIVITY:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    activity:action.payload.activity
                }
            }
        break;
        case ACTION_ADD_CAT:
            const randomId = Math.floor(Math.random()*Math.floor(1000));
            return {
                ...state,
                [randomId]: {
                    ...state[randomId],
                    name: action.payload.name,
                    activity: action.payload.activity
                }
            }
        default:
         return state;
        break;
    }
}


export const store = createStore(cat)

window.store = store; 




ReactDOM.render(
     <App />
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
