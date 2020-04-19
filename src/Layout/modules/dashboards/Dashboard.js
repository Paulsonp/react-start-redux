import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "react-apexcharts";

import * as actions from "actions";

class Dashboard extends Component {
  componentDidMount() {
    const data = this.props.fetchDailyResult();
    console.log("mango", data);
  }

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" width="500" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToPros(state) {
  return { dailyresult: state.dailyresult };
}
export default connect(
  mapStateToPros,
  actions
)(Dashboard);
