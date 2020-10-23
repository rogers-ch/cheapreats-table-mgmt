import React,{useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function ButtonModal(props) {
    const [show, setShow] = useState(false);
    const [dataFirst, setDataFirst] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch('./data/'+props.text)
            .then(response => response.text())
            .then(text => {
                setDataFirst(text);
            });
    }, []);
    return (
        <>

            <Button variant="btn btn-danger btn-lg border-light rounded" onClick={handleShow}>
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
                            {dataFirst}
                        </div>
                        <div>
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