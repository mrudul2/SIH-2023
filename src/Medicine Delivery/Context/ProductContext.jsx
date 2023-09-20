import { type } from '@testing-library/user-event/dist/type';
import React, { createContext, useReducer } from 'react'

const initState = "";

const reducerFun = (state, action) => {
    switch (action.type) {
        case "PERSONAL_CARE":
            return 'toothbrush';

        case "FITNESS_CARE":
            return 'forMen';

        case "HOME_CARE":
            return "disposalBag";

        case "HEALTH_CARE":
            return "health-care";

        case "ELDERLY_CARE":
            return "massageOil";

        case "STOMACH_CARE":
            return "acidity";

        case "BABY_CARE":
            return "babyHealthcare";

        case "HEALTH_CONDITION":
            return "covidKits";

        default: return state;
    }
}

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [state, dispatchFun] = useReducer(reducerFun, initState);

    return (
        <div>
            <ProductContext.Provider value={{ state, dispatchFun }}>
                {children}
            </ProductContext.Provider>
        </div>
    )
}
