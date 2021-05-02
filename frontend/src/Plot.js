import React, { useEffect, useState, Component }  from 'react'
import { Bar, Line } from 'react-chartjs-2'


class Plot extends Component {
	constructor(props) {
		super(props);
		this.state = {
			plotData: props.plotData
		}
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: false
	}

	render() {
	return (<div className = "chart">
			<Line
				data={this.state.plotData}
				options={{
					interaction: {
						intersect: false,
					},
					scales: {
						y: {
							min: 0
						}
					},
				}}


			/>

		</div>)
	}
}

export default Plot
