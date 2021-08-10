import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './comment.css'

export const Comment = () => {
  return (
    <Container className='comment'>
      <Row className='comment-section-upper'>
        <Col sm={1}>
          <img alt='' src="caleb_quinn.png" className='profile-picture'></img>
        </Col>
        <Col sm={10}>
          <textarea className="form-control status-box text-box" placeholder="What is on your mind?"></textarea>
        </Col>
      </Row>
      <Row className='comment-section-lower justify-content-right'>
        <Col>
          <Button variant="primary" disabled>Post It</Button>{' '}
        </Col>
      </Row>
    </Container>
  )
}