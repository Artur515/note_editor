import React from 'react';
import {Link} from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';
import {Container} from "react-bootstrap";
import style from './style.module.css'


const Greeting = () => {
    return (
        <Container className='position-absolute d-flex justify-content-center top-50 '>
            <Link className={style.link} to='/note'>
                <TypeWriterEffect
                    startDelay={1000}
                    cursorColor="black"
                    multiText={[
                        'Hey there,',
                        'This is little Note Editor ',
                        'Go'
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={50}
                />
            </Link>
        </Container>
    );
};

export default Greeting;