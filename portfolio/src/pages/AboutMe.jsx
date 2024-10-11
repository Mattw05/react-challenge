import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
function AboutMe() {
  return (
    <Container>
      <Row>
        <Col>
        <Image src="/assets/images/placeholder.jpg" thumbnail />
        </Col>
        <Col><p>
            My name is Matthew Weigandt.  I am married and a father of three.  I enjoy golfing and
            watching my kids sporting events.  I also enjoy hunting and fishing when I have the time.
            I have a strong foundation in the manufacturing industry.  I am committed to continuous
            learning and growth, and I am excited to share my journey with you.
            </p></Col>
      </Row>
    </Container>
  );
}

export default AboutMe;