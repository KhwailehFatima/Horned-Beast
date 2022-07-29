import React from "react";
import HornedBeast from "./hornedbeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBeast: this.props.data
        }
 
    }
    filterData = (e) => {
         
        this.props.filterBeastByHornNumber(e);
     }
     
    render() {
        return (

            <>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Filter Beast By Horn Number</Form.Label>
                    <Form.Select   onChange={this.filterData}>
                        <option value='' >All</option>
                        <option value='1' >One</option>
                        <option value='2' >Two</option>
                        <option value='3' >Three</option>
                        <option value='100' >WooW!</option>
                    </Form.Select>
                </Form.Group>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        this.state.dataBeast.map(animal =>
                            <Col>
                                <HornedBeast dataBeast={animal} displayModal={this.props.displayModal} />
                            </Col>
                        )
                    }
                </Row>
            </>
        )
    }
}

export default Main;
