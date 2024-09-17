import logo from './logo.svg';
import './App.css';

import Name from './Name';
import Description from './description.js';
import Price from './Price';
import Image from './Image_product.js';
import {Card, Container, Col, Row, Button} from 'react-bootstrap'
function App() {
  return (
    <>
      <Container className='Container'>
        <Row className='Row'>
          <Col className='Col' lg={4}>
            <Card className='Card'>
              <Image />
              <Card.Body className='Card-Body'>
                <Card.Title className='Card-Title'>
                  <Name />
                  <Price />
                </Card.Title>
                <Card.Text className='Card-Text'>
                  <Description />
                </Card.Text>
                <Button className='Button'>Order now</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* <Greeting fullName={fullName} /> */}
        </Row>
      </Container>
    </>
  );
}

export default App;

