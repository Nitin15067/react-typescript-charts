import React, { useContext } from 'react';

// Contexts
import { GraphContext } from '../contexts/graphContext';

// Components
import Loader from './loader';
import GraphComponentWrapper from './graphComponentWrapper';

const Dashboard: React.FC = () => {
    const {isLoading} = useContext(GraphContext);

    return <>{isLoading ? <Loader />: <GraphComponentWrapper />}</>;
}

export default Dashboard;