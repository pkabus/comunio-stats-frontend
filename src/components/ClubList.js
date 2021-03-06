import React, { Component } from 'react'
import axios from 'axios'
import { backend_properties } from '../backend_properties.js'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

class ClubList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clubs: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        const { backend_host, backend_port } = backend_properties
        axios.get(`http://${backend_host}:${backend_port}/clubs/all?size=18`)
            .then(response => {
                this.setState({
                    clubs: response.data._embedded.club_dto_list
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg: error.message
                })
            })
    }


    render() {
        const { clubs, errorMsg } = this.state
        if (errorMsg) {
            console.error(errorMsg)
        }
        return (
            <div>
                <h1>Bundesliga Clubs</h1>
                <ListGroup variant="flush">
                    {
                        clubs.length ?
                            clubs.map(club =>
                                <ListGroup.Item key={club.id}>
                                    <Link to={{
                                        pathname: `/clubs/${club.id}`,
                                    }}>{club.name}</Link>
                                </ListGroup.Item>)
                            : null
                    }
                </ListGroup>
            </div>
        )
    }
}

export default ClubList

