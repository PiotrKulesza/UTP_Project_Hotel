import React from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import axios from "axios";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            name: '',
            surname: '',
            telephone:'',
            address:''
        }

        this.valueChange = this.valueChange.bind(this)
        this.submitRegister = this.submitRegister.bind(this)
    }

    submitRegister(event){


        const params = new URLSearchParams();
        params.append('email',this.state.email);
        params.append('password',this.state.password);
        params.append('name',this.state.name);
        params.append('surname',this.state.surname);
        params.append('telephone',this.state.telephone);
        params.append('address',this.state.address);


        axios({
            method:'post',
            url:'http://localhost:8080/postUser',
            data: params
        })
        window.location = "http://localhost:3000/"
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
                <Card.Header>Zarejestruj się</Card.Header>
                <Form onSubmit={this.submitRegister} id={"registerFormId"}>
                    <Card.Body>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicEmail">
                                    <Form.Label>Adres Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        name={"email"}
                                        value={this.state.email}
                                        onChange={this.valueChange}
                                        placeholder="name@example.com"
                                        className={"bg-dark text-white"}

                                    />

                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicPassword">
                                    <Form.Label>Hasło</Form.Label>
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

                            </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicName">
                                <Form.Label>Imię</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name={"name"}
                                    value={this.state.name}
                                    onChange={this.valueChange}
                                    placeholder="Jan"
                                    className={"bg-dark text-white"}

                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicSurname">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name={"surname"}
                                    value={this.state.surname}
                                    onChange={this.valueChange}
                                    placeholder="Kowalski"
                                    className={"bg-dark text-white"}
                                />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicTelephone">
                                <Form.Label>Numer Telefonu</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name={"telephone"}
                                    value={this.state.telephone}
                                    onChange={this.valueChange}
                                    placeholder="123456789"
                                    className={"bg-dark text-white"}

                                />

                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicAddress">
                                <Form.Label>Adres zamieszkania</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name={"address"}
                                    value={this.state.address}
                                    onChange={this.valueChange}
                                    placeholder="Adres"
                                    className={"bg-dark text-white"}
                                />
                            </Form.Group>

                        </Form.Row>

                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            Rejestruj
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }

}

export default Register;