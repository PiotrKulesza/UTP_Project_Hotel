import React from "react";
import {Button, Card, Col, Form, Nav, Table} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faUndo} from "@fortawesome/free-solid-svg-icons";
import RoomsTable from "./RoomsTable";

class Reservations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms:[],
            maxPricePerNight:'',
            maxPriceForFood:'',
            maxAmountOfBeds: '',
            type: 'SMALL_ROOM'
        };

        this.valueChange = this.valueChange.bind(this)
        this.submitSearch = this.submitSearch.bind(this)
    }

    submitSearch (event) {


        const params = new URLSearchParams();
        params.append('maxPricePerNight',this.state.maxPricePerNight+'');
        params.append('maxPriceForFood',this.state.maxPriceForFood+'');
        params.append('maxAmountOfBeds',this.state.maxAmountOfBeds+'');
        params.append('type',this.state.type+'');



        axios({
            method:'get',
            url:'http://localhost:8080/getSearchRooms',
            data: params
        }).then(response => response.data)
            .then((data) =>{
                this.setState({rooms: data});
            });

        this.forceUpdate();

        event.preventDefault();
    }

    valueChange  (event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    componentDidMount() {
        axios.get("http://localhost:8080/getRoom")
            .then(response => response.data)
            .then((data) =>{
                this.setState({rooms: data});
            });
    }

    render() {
        return(
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>
                    Rezerwój



                </Card.Header>
                <Card.Body>
                    <Form  onSubmit={this.submitSearch} id={"searchFormId"}>
                        <Form.Row>
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
                            <Form.Group as={Col} controlId="formBasicPriceForFood">
                                <Form.Label>Cena za 3 posiłki</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    autoComplete={"off"}
                                    name={"priceForFood"}
                                    value={this.state.priceForFood}
                                    onChange={this.valueChange}
                                    placeholder="50.00"
                                    className={"bg-dark text-white"}

                                />

                            </Form.Group>
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
                                <div >
                                    <Button size="sm" variant="success" type="submit" style={{"textAlign":"center"}}>
                                    Szukaj
                                    </Button>{" "}

                                </div>



                        </Form.Row>
                    </Form>
                    <Table border hover striped variant={"dark"}>
                    <thead>
                    <th>Rezerwuj</th>
                    <th>Nazwa</th>
                    <th>Cena za noc</th>
                    <th>Cena za 3 posiłki</th>
                    <th>Łóżka</th>
                    <th>Typ</th>
                    <th>Opis</th>
                    </thead>
                    <tbody>
                    {this.state.rooms.length === 0 ?
                        <tr align={"center"}>
                            <td colSpan={"7"}> Nie dodano jeszcze pokoii.</td>
                        </tr> :
                        this.state.rooms.map((room) => (
                            <tr key={room.roomId}>
                                <td><Nav className="mr-auto"><Link to={"/user/reserve/"+room.roomId} className={"nav-link"}>Rezerwuj</Link></Nav></td>
                                <td>{room.name}</td>
                                <td>{room.pricePerNight}</td>
                                <td>{room.priceForFood}</td>
                                <td>{room.maxAmountOfBeds}</td>
                                <td>{room.type}</td>
                                <td>{room.description}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>

            </Card.Body>
            </Card>
        );
    }

}

export default Reservations;