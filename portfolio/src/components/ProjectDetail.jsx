import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "react-bootstrap/FigureImage";

function ProjectDetail(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item><h3>Title: {props.project.title}</h3></ListGroup.Item>
        <ListGroup.Item>
            <Image src={props.project.screenshot} className="img-fluid"/>
        </ListGroup.Item>
        <ListGroup.Item><p>{props.project.description}</p></ListGroup.Item>
        <ListGroup.Item><a href={props.project.github} target="_blank" rel="noopener noreferrer">Github</a></ListGroup.Item>
        <ListGroup.Item><a href={props.project.live} target="_blank" rel="noopener noreferrer">Live</a></ListGroup.Item>

      </ListGroup>
    </Card>
  );
}

export default ProjectDetail;