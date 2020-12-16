import { useEffect, useReducer } from 'react';
import graphReducer from '../reducers/graphReducer';
import { GraphData } from '../server/graphData';

// Types
type dataManagerType = {
    isLoading?: boolean
    graphs?: Array<{}>
    err?: string | null
}

const useDataManager = (): dataManagerType => {
    const [{isLoading, graphs, err}, dispatch] = useReducer(graphReducer, {
        isLoading: true,
        graphs: [],
        err: null
    })

    useEffect(() => {
        setIsLoading(true);
        dispatchGraphData();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])    

    const setIsLoading = (flag: boolean) => {
        dispatch({
            type: 'setLoading',
            isLoading: flag
        })
    }

    const dispatchGraphData = () => dispatch({
        type: 'setGraphData',
        data: GraphData
    })

    return {isLoading, graphs, err};
}

export default useDataManager;