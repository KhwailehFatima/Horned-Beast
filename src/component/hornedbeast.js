import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0
        }
    }
    handleCount = () => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }
    render() {
        return (
            <>
            <div key={this.props._id}>
                <Card  >
                <Card.Img  varient="top" src={this.props.image_url} onClick={this.handleCount}  />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description} ❤️{this.state.clickCounter} 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
            </>

        )
    }
}

export default HornedBeast;