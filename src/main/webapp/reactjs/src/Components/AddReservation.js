import React from "react";
import {Button, Card, Col, Form} from "react-bootstrap";
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faUndo} from '@fortawesome/free-solid-svg-icons'

class AddReservation extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState

        this.valueChange = this.valueChange.bind(this)
        this.submitRoom = this.submitRoom.bind(this)
        this.resetRoom = this.resetRoom.bind(this)
    }

    initialState = {
        userId
        name:'',
        pricePerNight:'',
        priceForFood:'',
        maxAmountOfBeds: '',
        type: 'SMALL_ROOM',
        description:''
    }

    submitRoom (event) {


        const params = new URLSearchParams();
        params.append('name',this.state.name);
        params.append('pricePerNight',this.state.pricePerNight);
        params.append('priceForFood',this.state.priceForFood);
        params.append('maxAmountOfBeds',this.state.maxAmountOfBeds);
        params.append('type',this.state.type);
        params.append('description',this.state.description);


        axios({
            method:'post',
            url:'http://localhost:8080/postRoom',
            data: params
        })

        event.preventDefault();
    }

    resetRoom  ()  {
        this.setState(() => this.initialState)
    }

    valueChange  (event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return(
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Dodaj pokój</Card.Header>
                <Form onReset={this.resetRoom} onSubmit={this.submitRoom} id={"registerFormId"}>
                    <Card.Body>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicRoomNumber">
                                <Form.Label>Nazwa Pokoju</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    autoComplete={"off"}
                                    name={"name"}
                                    value={this.state.name}
                                    onChange={this.valueChange}
                                    placeholder="Nazwa"
                                    className={"bg-dark text-white"}

                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicPriceForFood">
                                <Form.Label>Cena za 3 posiłki</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    step="0.01"
                                    autoComplete={"off"}
                                    name={"priceForFood"}
                                    value={this.state.priceForFood}
                                    onChange={this.valueChange}
                                    placeholder="50.00"
                                    className={"bg-dark text-white"}

                                />

                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicPricePerNight">
                                <Form.Label>Cena za noc</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    autoComplete={"off"}
                                    name={"pricePerNight"}
                                    value={this.state.pricePerNight}
                                    onChange={this.valueChange}
                                    placeholder="100.00"
                                    step="0.01"
                                    className={"bg-dark text-white"}
                                />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicMaxAmountOfBeds">
                                <Form.Label>Maksymalna liczba łóżek</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    autoComplete={"off"}
                                    name={"maxAmountOfBeds"}
                                    value={this.state.maxAmountOfBeds}
                                    onChange={this.valueChange}
                                    placeholder="4"
                                    className={"bg-dark text-white"}

                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicType">
                                <Form.Label>Typ pokoju</Form.Label>
                                <Form.Control
                                    required
                                    as={"select"}
                                    autoComplete={"off"}
                                    name={"type"}
                                    value={this.state.type}
                                    onChange={this.valueChange}
                                    className={"bg-dark text-white"}
                                >
                                    <option>SMALL_ROOM</option>
                                    <option>MEDIUM_ROOM</option>
                                    <option>BIG_ROOM</option>
                                    <option>APARTAMENT</option>
                                    <option>HOUSE</option>
                                </Form.Control>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicDescription">
                                <Form.Label>Opis pokoju</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    autoComplete={"off"}
                                    name={"description"}
                                    value={this.state.description}
                                    onChange={this.valueChange}
                                    placeholder="Opis"
                                    className={"bg-dark text-white"}

                                />

                            </Form.Group>


                        </Form.Row>

                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave}/> Dodaj
                        </Button>{' '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Resetuj
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }

}

export default AddReservation;