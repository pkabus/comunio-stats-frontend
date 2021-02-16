import React, { Component } from 'react'

class ClubItem extends Component {

    navigateToClub = name => {
        // how to unmount this and go to new component?
    }

    render() {
        const { name } = this.props
        return (
            <div><p onClick={this.navigateToClub}>{name}</p></div>
        )
    }
}

export default ClubItem
