// import { createStore } from 'redux'

// const NAP = 'nap';
// const EAT = 'eat';
// const PLAY = 'play';

// const initialState = {
//     action: NAP
// };

// console.log(initialState);



// /// ACTIONS + ACTION CREATORS

// const ACTION_NAP = NAP;
// const ACTION_EAT = EAT;
// const ACTION_PLAY = PLAY; 

// export function setNap () {
//     return {
//         type: ACTION_NAP
//     };
// }

// export function setEat () {
//     return {
//         type: ACTION_EAT
//     };
// }

// export function setPlay () {
//     return {
//         type: ACTION_PLAY
//     };
// }

// window.nap = setNap;
// window.eat = setEat;
// window.play = setPlay; 

// ///// Reducer

// export function oakley (state=initialState.action, action={type: ''}) {
//     console.log(`oakley is doing this: ${action.type}`)
//     switch (action.type) {
//         case ACTION_NAP:
//             return NAP;
//         break;
//         case ACTION_EAT:
//             return EAT;
//         break;
//         case ACTION_PLAY:
//             return PLAY;
//         break;
//     }
// }

// export const store = createStore(oakley)

// window.store = store; 