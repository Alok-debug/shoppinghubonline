import React, { createContext, useContext, useReducer } from "react";

//Prepares the DataLayer
export const StateContext = createContext();

//Wrap our App and will provide the data to every component inside our app.js
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//pulls information from data layer
export const useStateValue = () => useContext(StateContext);