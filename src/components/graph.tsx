import React from 'react';

// Charts
import { Chart } from './highcharts/chart';

type graphType = {
    graph: {
        type?: string
        title?: string
        x_axis?: Array<number>
        y_axis?: Array<number>
    }
}

const Graph: React.FC<graphType> = ({graph}) => {
    return (
        <div className="p-3">
            <Chart type={graph.type} title={graph.title} x_axis={graph.x_axis} y_axis={graph.y_axis} />
        </div>
    );
}

export default Graph;