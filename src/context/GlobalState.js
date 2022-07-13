import React, { createContext, useMemo, useReducer } from "react";
import {
    initNewsState
} from "./initialState";
import {
    newsReducer
} from "./reducers";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [newsState, newsDispatch] = useReducer(newsReducer, initNewsState);
    const value = useMemo(
        () => ({
            initNewsState,
            newsReducer,
        }),
        [
            newsState
        ]
    );

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    );
};
