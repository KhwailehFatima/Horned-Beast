import React from 'react';
import Card from 'react-bootstrap/Card'
 
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beast: this.props.dataBeast,
            clickCounter: 0
        }
    }
    handleCount = () => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
         this.props.displayModal(this.props.dataBeast,this.clickCounter);

    }
    render() {
        return (
            <>
            <div key={this.state.beast._id}>
                <Card  >
                <Card.Img  varient="top" src={this.state.beast.image_url} onClick={this.props.handleShow} onClick={this.handleCount}  />
                    <Card.Body>
                        <Card.Title>{this.state.beast.title}</Card.Title>
                        <Card.Text>
                            {this.state.beast.description} ❤️{this.state.clickCounter} 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
            </>

        )
    }
}

export default HornedBeast;