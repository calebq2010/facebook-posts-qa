import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './comment.css'

export const Comment = () => {
  return (
    <Container className='comment'>
      <Row>
        <Col sm={2} className='comment-section-upper'>
          <img src="caleb_quinn.png" className='profile-picture'></img>
        </Col>
        <Col sm={10}>
          <textarea className="form-control status-box text-box" placeholder="What is on your mind?"></textarea>
        </Col>
      </Row>
      <Row>
        <Col className='comment-section-lower'>section two</Col>
      </Row>
    </Container>
  )
}