import React from "react";
import {Button, Form, Card, Col} from "react-bootstrap";
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            user:{}
        }

        this.valueChange = this.valueChange.bind(this)
        this.submitLogin = this.submitLogin.bind(this)
    }

    submitLogin(event){

        axios.get("http://localhost:8080/getUserByEmailAndPass", {
            params:{
                email: this.state.email,
                password: this.state.password
            }
        } ).then(response => response.data)
            .then((data)=>{
                this.setState({user:data});

            });
        if ('null' !== this.state.user.userId && typeof this.state.user.userId !== "undefined") {
            localStorage.setItem('loggedUser', this.state.user.userId);
            this.state.user.roles.map((role) => (

                    localStorage.setItem('typeOfUser', role.roleName)


                )
            )
            window.location = "http://localhost:3000/test";
        }
        event.preventDefault();
    }

    valueChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return(
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Zaloguj się</Card.Header>
                <Form onSubmit={this.submitLogin} id={"loginFormId"}>
                    <Card.Body>

                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name={"email"}
                                value={this.state.email}
                                onChange={this.valueChange}
                                placeholder="name@example.com"
                                className={"bg-dark text-white"}

                            />
                            <Form.Text className="text-muted" id = {"emailTextError"}>
                                <p>Test</p>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group  controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name={"password"}
                                value={this.state.password}
                                onChange={this.valueChange}
                                placeholder="Password"
                                className={"bg-dark text-white"}
                            />
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            Zaloguj
                        </Button>
                </Card.Footer>
            </Form>
            </Card>

        );
    }

}

export default Login;