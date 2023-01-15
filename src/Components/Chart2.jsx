import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, {Component} from 'react'
import Chart from 'react-apexcharts'

class Chart2 extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: 'apexchart-example'
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          }]
        }
      }
      render() {
        return (
            <div className="barChar">
                <h1>Car Statistics</h1>
                <Chart options={this.state.options} series={this.state.series} type="area" width={500} height={320} />
            </div>
        )
      }
}

export default Chart2