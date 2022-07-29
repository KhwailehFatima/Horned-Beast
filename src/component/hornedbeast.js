import React from 'react';

class HornedBeast extends React.Component {
   
    render() {
        return (
            <>
                <h2> {this.props.title}</h2>
                <p> {this.props.description} </p>
                <img src={this.props.image_url}></img>
            </>

        )
    }
}

export default HornedBeast;