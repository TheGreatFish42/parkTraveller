import React, {useState} from 'react'
import Data from './Data'

const CardContext = React.createContext();

function CardContextProvider(props){
    const [stateParks, setStateParks] = useState(Data);

    const changeState = (state) => {
        setStateParks(state);
    }

    return(
        <CardContext.Provider value={{
            stateParks: stateParks, 
            changeState: changeState
        }}>
           {props.children}
        </CardContext.Provider>
    )
}

export {CardContext, CardContextProvider}