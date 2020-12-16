import React from 'react';
import useDataManager from './useDataManager';

interface ContextInterface {
    graphs?: Array<{}>;
    isLoading?: boolean;
    err?: null | string;
};

export const GraphContext = React.createContext({} as ContextInterface);

export const GraphProvider: React.FC = ({children}) => {

    const {
        graphs,
        isLoading,
        err
    } = useDataManager();

    const provider = {
        graphs,
        isLoading,
        err
    }

    return (
        <GraphContext.Provider value={provider}>
            {children}
        </GraphContext.Provider>
    );
}