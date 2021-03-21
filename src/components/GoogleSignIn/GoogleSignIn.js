import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@material-ui/core';

const GoogleSignIn = (props) => {
    return (
        <Button className="btn" onClick={props.googleSignIn} variant="contained">
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign In
        </Button>
    );
};

export default GoogleSignIn;