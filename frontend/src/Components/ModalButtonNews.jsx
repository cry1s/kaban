import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

function ModalButtonNews(myNews){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button style = {{background : "dodgerblue", marginRight: "20px"}} variant = "primary" onClick = {handleShow}>
                Смотреть
            </Button>

            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header style = {{backgroundColor: "dodgerblue"}} closeButton>
                    <Modal.Title style = {{color: "white"}}>{myNews.myNews.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{myNews.myNews.content}</p>
                </Modal.Body>
                <Modal.Footer>
                    <a href = {myNews.myNews.source} style = {{textDecoration: "none", color: "dodgerblue"}}>Смотреть источник</a>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalButtonNews;