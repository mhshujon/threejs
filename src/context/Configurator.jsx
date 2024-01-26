import {createContext, useContext, useState} from "react";

const ConfiguratorContext = createContext();

const ConfiguratorProvider = ({children}) => {
    const [tableWidth, setTableWidth] = useState(100); // Default width, you can set your initial value
    const [legs, setLegs] = useState(0); // Default legs layout, you can set your initial value
    const [legsColor, setLegsColor] = useState("#777777"); // Default legs color, you can set your initial value

    const contextValues = {
        tableWidth,
        setTableWidth,
        legs,
        setLegs,
        legsColor,
        setLegsColor,
    };

    return (
        <ConfiguratorContext.Provider value={contextValues}>
            {children}
        </ConfiguratorContext.Provider>
    )
}

export default ConfiguratorProvider;

export const useConfigurator = () => {
    return useContext(ConfiguratorContext);
}