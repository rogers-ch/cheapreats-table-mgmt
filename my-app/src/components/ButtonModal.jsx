import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function ButtonModal(props) {

    //const variables for state
    const [show, setShow] = useState(false);
    const [dataFirst, setDataFirst] = useState('');
    // show and hide for the model component
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Grabs the .txt files in data folder
    useEffect(() => {
        fetch('./data/'+props.text)
            .then(response => response.text())
            .then(text => {
                setDataFirst(text);
            });
    }, []);
    // Main model component that is returned
    return (
        <>
            <Button variant="btn btn-danger btn-lg border-light rounded" onClick={handleShow}>
                {/* prop for the button component. This is the button on the main page that when clicked brings up the model*/}
                {props.userType}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.userType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            {/*This prop is the data from the .txt file*/}
                            {dataFirst}
                        </div>
                        <div>
                            {/*Image prop*/}
                            <img src={props.image} alt="image of table design" ></img>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ButtonModal;