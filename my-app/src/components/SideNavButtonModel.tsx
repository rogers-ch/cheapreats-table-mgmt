import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import CanvasDemo from "./CanvasDemo";

function SideNavButtonModal() {

    //const variables for state
    const [show, setShow] = useState(false);
    const [dataFirst, setDataFirst] = useState('');
    // show and hide for the model component
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Grabs the .txt files in data folder

    // Main model component that is returned
    return (
        <>
            <Button className="btn-danger btn-sm border-light rounded NavBarFont buttonWidth" onClick={handleShow}>
                {/* prop for the button component. This is the button on the main page that when clicked brings up the model*/}
                View Demo
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>View Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <CanvasDemo />

                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SideNavButtonModal;