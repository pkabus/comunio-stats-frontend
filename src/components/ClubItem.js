import React, { Component } from 'react'
import axios from 'axios'
import { properties } from '../properties.js'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

class ClubItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            playerSnapshots: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        const { clubId } = this.props.match.params
        const { host, port } = properties

        axios.get(`http://${host}:${port}/clubs?id=${clubId}`)
            .then(response => {
                this.setState({
                    name: response.data.name
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg: error.message
                })
            })

        axios.get(`http://${host}:${port}/players/snapshots?clubId=${clubId}&mostRecentOnly=true&size=50`)
            .then(response => {
                this.setState({
                    playerSnapshots: response.data._embedded.player_snapshot_dto_list
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg: error.message
                })
            })
    }

    render() {
        // const { name } = this.props.location.state
        const { name, playerSnapshots } = this.state
        return (
            <div>
                <h1>{name}</h1>
                <ListGroup varian="flush">
                    {
                        playerSnapshots.length ?
                            playerSnapshots.map(snapshot =>
                                <ListGroup.Item key={snapshot.player.id}>
                                    <Link to={`/players/${snapshot.player.id}`}>{snapshot.player.name}</Link>
                                </ListGroup.Item>)
                            : null
                    }
                </ListGroup>
            </div>
        )
    }
}

export default ClubItem
