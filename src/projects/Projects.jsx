import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img src="/tripmine.png" style={{ height: "14rem" }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    //  <Card style={{ width: "20rem" }}>
    //     <Card.Img src="/tripmine.png" style={{ height: "14rem" }} />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //     </Card.Body>

    //     <Card.Body>
    //       <Card.Link href="#">Card Link</Card.Link>
    //       <Card.Link href="#">Another Link</Card.Link>
    //     </Card.Body>
    //   </Card>
  );
}

export default Projects;
