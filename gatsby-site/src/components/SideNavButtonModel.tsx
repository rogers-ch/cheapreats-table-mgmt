import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import DraggableCanvas from "./DraggableCanvas";

function SideNavButtonModal() {

    //const variables for state
    const [show, setShow] = useState(false);
// show and hide for the model component
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Grabs the .txt files in data folder

    // Main model component that is returned
    return (
        <>
            <Button onClick={handleShow}>
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
                    <Modal.Title>CheaprEats Table Management System Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <DraggableCanvas />
                    <Text>
                        <H5>Future Table Management Features:</H5>
                        <ul>
                            <li className="font">Build your restaurant with tables of all shapes and sizes.</li>
                            <li className="font">Easily edit your design to match changes in your dining room.</li>
                            <li className="font">Automatically update tables with party information.</li>
                            <li className="font">Colors make it easy see which tables are occupied, vacant, and reserved.</li>
                            <li className="font">Track orders for individual tables and get up-to-date estimates for when
                                tables will become available.
                            </li>
                        </ul>
                    </Text>


                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const Text= styled.div`
  padding: 0.5rem;
`;

const H5= styled.h5`
  padding-top: 1.5rem;
  text-align: center;
`;


export default SideNavButtonModal;