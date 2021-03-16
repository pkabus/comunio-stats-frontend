import React, { Component } from 'react'
import axios from 'axios'
import { properties } from '../properties.js'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import moment from 'moment'

class PlayerItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerName: '',
            snapshots: []
        }
    }

    numberFormatter(number) {
        return "€" + new Intl.NumberFormat('de').format(number)
    }


    componentDidMount() {
        const { host, port } = properties
        const { playerId } = this.props.match.params
        axios.get(`http://${host}:${port}/players?id=${playerId}`)
            .then(response => {
                this.setState({
                    playerName: response.data.name
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg: error.message
                })
            })

        const start = moment().subtract(28, "days").format("YYYY-MM-DD")
        const end = moment().format("YYYY-MM-DD")
        axios.get(`http://${host}:${port}/players/snapshots?playerId=${playerId}&start=${start}&end=${end}&size=30`)
            .then(response => {
                this.setState({
                    snapshots: response.data._embedded.player_snapshot_dto_list
                        .map(entry => ({
                            date: moment({
                                year: entry.created[0], month: entry.created[1] - 1, day: entry.created[2]
                            }).format('DD.MM.YYYY'),
                            points: entry.points_during_current_season,
                            market_value: entry.market_value
                        }))
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg: error.message
                })
            })
    }



    render() {
        const { playerName, snapshots } = this.state


        return (
            <div>
                <h1>{playerName}</h1>
                <ResponsiveContainer width="90%" height={400}>
                    <LineChart
                        width={500}
                        height={300}
                        data={snapshots}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 50,
                            bottom: 5,
                        }}

                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis tickFormatter={this.numberFormatter} />
                        <Tooltip formatter={this.numberFormatter} />
                        <Legend />
                        <Line type="monotone" dataKey="market_value" name="Market Value" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="90%" height={400}>
                    <LineChart
                        width={500}
                        height={300}
                        data={snapshots}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 50,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="points" name="Points" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div >
        )
    }
}

export default PlayerItem
