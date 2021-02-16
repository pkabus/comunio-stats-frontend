import React, { Component } from 'react'
import axios from 'axios'
import ClubItem from './ClubItem'

export class ClubList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clubs: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/clubs/all")
            .then(response => {
                this.setState({
                    clubs: response.data
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
                {
                    clubs.length ?
                    clubs.map(club => <ClubItem key={club.id} name={club.name} />) :
                        null
                }
                
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default ClubList

