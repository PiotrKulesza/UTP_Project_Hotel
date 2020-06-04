import React from "react";
import {Col, Container,  Navbar} from "react-bootstrap";
class Fotter extends React.Component{

    render() {
        return (
            <Navbar fixed={"bottom"} bg="dark" variant="dark">
                <Container>

                    <Col lg={12} className="text-center text-muted">
                        <div>Aplikacja stworzona przez studentów UTP</div>
                    </Col>

                </Container>

            </Navbar>
        );
    }

}

export default Fotter;

