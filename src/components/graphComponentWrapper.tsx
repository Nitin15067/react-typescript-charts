import React, { useContext } from 'react';

// Context 
import { GraphContext } from '../contexts/graphContext';

// Components
import Graph from './graph';

const GraphComponentWrapper: React.FC = () => {
    const {graphs} = useContext(GraphContext);

    return (
        <div className="d-flex" style={{flexWrap: 'wrap', justifyContent: 'space-around', background: 'ghostwhite'}}>
            {graphs?.map((graph, idx) => <Graph key={idx} graph={graph} />)}
        </div>
    );
}

export default GraphComponentWrapper;