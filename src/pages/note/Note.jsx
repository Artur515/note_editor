import React from 'react';
import {Card, Container} from "react-bootstrap";
import LeftSide from "../../components/leftSideNote/LeftSide";
import RightSide from "../../components/rightSideNote/RightSide";
import style from './style.module.css'

const Note = () => {
    return (
        <Container>
            <Card className="text-center mt-4">
                <Card.Header>Note Editor</Card.Header>
                <Card.Body className={style.container} style={{padding: 0}}>
                    <LeftSide/>
                    <RightSide/>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Note;