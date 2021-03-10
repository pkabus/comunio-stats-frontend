import React, { Component } from 'react'
import { properties } from '../properties.js';
import axios from 'axios'

class ClubDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }

    componentDidMount() {
        const { name } = this.props
        const { host, port } = properties
        axios.get(`http://${host}:${port}/players/snapshots?clubName=${name}`)
            .then(response => {
                this.setState({
                    players: response.data
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg: error.message
                })
            })
    }

    render() {
        const { name } = this.props
        return (
            <div>
                <h1>{name}</h1>
                {
                    players.map(playerSnapshot => (
                        <div key={playerSnapshot.player.id}>
                            <h3>{playerSnapshot.player.name}</h3>
                            <p>Position: {playerSnapshot.position}</p>
                            <p>Age: {playerSnapshot.age}</p>
                            <p>Market Value: {playerSnapshot.marketValue}</p>
                            <p>Points during current season: {playerSnapshot.pointsDuringCurrentSeason}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ClubDetails
