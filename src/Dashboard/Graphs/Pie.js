import React, {Component} from 'react';
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Pie extends Component {
    render() {
        const options3 = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Types of Doctors"
            },
            data: [
                {
                    type: "pie",
                    startAngle: 75,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [
                        {
                            y: 18,
                            label: "ENT"
                        }, {
                            y: 49,
                            label: "Orthopedic"
                        }, {
                            y: 9,
                            label: "Cardiologists"
                        }, {
                            y: 5,
                            label: "Dermatologists"
                        }, {
                            y: 19,
                            label: "Endocrinologists"
                        }
                    ]
                }
            ]
        }
        return (

            <div><CanvasJSChart options={options3} onRef={ref => this.chart = ref}/> </div>

        )
    }

}
export default Pie;