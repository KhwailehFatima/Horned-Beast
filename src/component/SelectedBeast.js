import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal  size="md" show={this.props.show} onHide={this.props.handleClose}>
                   
                    <Modal.Header   closeButton>
                        <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img   width="400" src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title}/>

                   <p>{this.props.selectedBeast.description}</p> 
                    <p> Made with Love ❤️   </p>
                     </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default SelectedBeast;
// alt={this.props.selectedBeast.name}