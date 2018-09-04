import React, {Component} from 'react';
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Cost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const options = {
            theme: "light2",
            title: {
                text: "Cost and Earning"
            },
            subtitles: [
                {
                    text: "Cost and Earning in 2018 (figures in Crores)"
                }
            ],
            axisY: {
                includeZero: false,
                prefix: "₹"
            },
            toolTip: {
                shared: true
            },
            data: [
                {
                    type: "area",
                    name: "Earning",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "₹#,##0.##",
                    dataPoints: [
                        {
                            x: new Date("2018- 01- 01"),
                            y: 84
                        }, {
                            x: new Date("2018- 02- 01"),
                            y: 82
                        }, {
                            x: new Date("2018- 03- 01"),
                            y: 81
                        }, {
                            x: new Date("2018- 04- 01"),
                            y: 83
                        }, {
                            x: new Date("2018- 05- 01"),
                            y: 83
                        }, {
                            x: new Date("2018- 06- 01"),
                            y: 84
                        }, {
                            x: new Date("2018- 07- 01"),
                            y: 84
                        }, {
                            x: new Date("2018- 08- 01"),
                            y: 82
                        }, {
                            x: new Date("2018- 09- 01"),
                            y: 87
                        }, {
                            x: new Date("2018- 10- 01"),
                            y: 86
                        }, {
                            x: new Date("2018- 11- 01"),
                            y: 87
                        }, {
                            x: new Date("2018- 12- 01"),
                            y: 86
                        }
                    ]
                }, {
                    type: "area",
                    name: "Cost",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "₹#,##0.##",
                    dataPoints: [
                        {
                            x: new Date("2018- 01- 01"),
                            y: 67
                        }, {
                            x: new Date("2018- 02- 01"),
                            y: 66
                        }, {
                            x: new Date("2018- 03- 01"),
                            y: 64
                        }, {
                            x: new Date("2018- 04- 01"),
                            y: 64
                        }, {
                            x: new Date("2018- 05- 01"),
                            y: 64
                        }, {
                            x: new Date("2018- 06- 01"),
                            y: 64
                        }, {
                            x: new Date("2018- 07- 01"),
                            y: 64
                        }, {
                            x: new Date("2018- 08- 01"),
                            y: 63
                        }, {
                            x: new Date("2018- 09- 01"),
                            y: 65
                        }, {
                            x: new Date("2018- 10- 01"),
                            y: 64
                        }, {
                            x: new Date("2018- 11- 01"),
                            y: 64
                        }, {
                            x: new Date("2018- 12- 01"),
                            y: 63
                        }
                    ]
                }
            ]
        }
        return (
            <div><CanvasJSChart options={options} onRef={ref => this.chart = ref}/></div>
        )
    }
}
export default Cost;
