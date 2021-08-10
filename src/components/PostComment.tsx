import { Container, Row, Col, Button } from 'react-bootstrap';
import './PostComment.css'

export const PostComment = () => {
  return (
    <Container data-testid='post-comment-main' className='comment'>
      <Row className='comment-section-upper'>
        <Col sm={1}>
          <img data-testid='profile-picture' alt='' src="caleb_quinn.png" className='profile-picture'></img>
        </Col>
        <Col sm={10}>
          <textarea className="form-control status-box text-box" placeholder="What is on your mind?"></textarea>
        </Col>
      </Row>
      <Row className='comment-section-lower justify-content-right'>
        <Col>
          <Button data-testid='post-it-btn' variant="primary" disabled>Post It</Button>{' '}
        </Col>
      </Row>
    </Container>
  )
}