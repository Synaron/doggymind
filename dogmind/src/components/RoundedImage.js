import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function RoundedImage({img}) {
  return (
    <Container>
      <Row>
        <Col >
          <Image src={img} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default RoundedImage;