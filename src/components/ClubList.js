import React, { Component } from 'react'
import axios from 'axios'
import { properties } from '../properties.js'
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
        const { host, port } = properties
        axios.get(`http://${host}:${port}/clubs/all?size=18`)
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

