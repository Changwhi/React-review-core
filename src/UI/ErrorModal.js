import React from "react";
import ReactDome from 'react-dom';
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.errorHandler} />
};

const ModalOverlay = props => {
    return (

            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.errorHandler}>Okay</Button>
                </footer>
            </Card>
            );
};

const ErrorModal = props => {
    return (
        <React.Fragment>
        {ReactDome.createPortal(<Backdrop errorHandler={props.errorHandler} />, document.getElementById('backdrop-root'))}
        {ReactDome.createPortal(<ModalOverlay errorHandler={props.errorHandler} title={props.title} message={props.message} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;
