import React, {createContext, useContext, useReducer} from "react";

//Preparing the data layer
export const DataLayerContext = createContext();

// Children is what is wrapped inside DataLayer in index js which is App
export const DataLayer =({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// Access to DataLayer Values using the usecontext hook
export const useDataLayerValue = () => useContext(DataLayerContext);