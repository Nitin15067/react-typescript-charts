import React from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

type chartType = {
    type?: string
    title?: string
    x_axis?: Array<number>
    y_axis?: Array<number>
}

export const Chart: React.FC<chartType> = ({type, title, x_axis, y_axis}) => {
    let options = {
        chart: {
            width: 400,
            height: 350,
            type: type ? type : 'line',
            borderWidth: 3,
            borderColor: 'light',
            shadow: {
                color: 'black',
                offsetX: 1,
                offsetY: 1,
                opacity: '0.1',
                width: 4
            },
            backgroundColor: '#fff'
        },
        title: {
            text: title,
        },
        xAxis: {
            categories: x_axis
        },
        series: [{
            data: y_axis
        }],
        borderRadius: '20px'
    }

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}></HighchartsReact>
        </div>

    )
}