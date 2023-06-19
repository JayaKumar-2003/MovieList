import { createContext,useReducer } from "react";


export const Store = createContext();


const initialState ={
    moviedetails : localStorage.getItem('moviedetails') ?
    JSON.parse(localStorage.getItem('moviedetails')) :
    null,
    filterdetails : localStorage.getItem('filterdetails') ?
    JSON.parse(localStorage.getItem('filterdetails')) :
    null,

}
function reducer (state,action) {
        switch(action.type) {
            case 'MOVIE_DETAILS':
                console.log(action.payload)
                return {...state,moviedetails:action.payload};
            case 'FILTER_DETAILS':
                return  {...state,filterdetails:action.payload};
            default:
                return state;
        }
}

export function StoreProvider(props) {
    const[state,dispatch] = useReducer(reducer,initialState);
    const value = {state,dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}