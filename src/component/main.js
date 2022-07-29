import React from "react";
import HornedBeast from "./hornedbeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
     
    render() {
        return (
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    this.props.dataBeast.map(animal =>
                        <Col>
                            <HornedBeast dataBeast={animal} displayModal={this.props.displayModal} />
                        </Col>
                    )
                }
            </Row>
        )
    }
}

export default Main;
