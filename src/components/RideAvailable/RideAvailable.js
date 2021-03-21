import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './RideAvailable.css'

const RideAvailable = (props) => {
    const { imgUrl, title } = props.ride;
    return (
        <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>Mirpur to Farmgate</ListGroup.Item>
                <ListGroup.Item action variant="info">

                    <div className="ride-list">
                        <img style={{ width: '35%' }} src={imgUrl} alt="" />
                        <p>{title}</p>
                        <p>
                            <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                            4
                        </p>
                        <p>$67</p>
                    </div>

                </ListGroup.Item>
                <ListGroup.Item action variant="info">
                    <div className="ride-list">
                        <img style={{ width: '35%' }} src={imgUrl} alt="" />
                        <p>{title}</p>
                        <p>
                            <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                            4
                        </p>
                        <p>$67</p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item action variant="info">
                    <div className="ride-list">
                        <img style={{ width: '35%' }} src={imgUrl} alt="" />
                        <p>{title}</p>
                        <p>
                            <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                            4
                        </p>
                        <p>$67</p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default RideAvailable;