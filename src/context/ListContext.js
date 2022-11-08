import React, { useReducer } from "react";
import P from 'prop-types';

export const ListContext = React.createContext();

const initialState = [];

const reducer = (state , action ) => {
  switch(action.type){
    case 'ADD':
        
      const task = {
        id: action.payload.id,
        title: action.payload.title,
        desc: action.payload.desc,
        autor: action.payload.autor
      }

      return [...state , task]
    case 'REMOVE':
      return state.filter((tasks) => tasks.id !== action.id);
    case 'ALL':
      return [];
    default:
      return {...state}
  }
}

export const ListProvider = ({children}) => {

  const[state , dispatch] = useReducer(reducer , initialState )

  return(
    <>
    <ListContext.Provider value={{state , dispatch}}>
      {children}
    </ListContext.Provider>
    </>
  )
}

ListProvider.propTypes = {
  children: P.node.isRequired,
}