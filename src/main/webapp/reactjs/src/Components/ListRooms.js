import React from "react";
import {Button, Card,  Table} from "react-bootstrap";
import axios from "axios";

class ListRooms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms:[]
        };


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
                <Card.Header>Lista Pokoi</Card.Header>
                <Card.Body>
                    <Table border hover striped variant={"dark"}>
                        <thead>
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
                                <td colSpan={"6"}> Nie dodano jeszcze pokoii.</td>
                            </tr> :
                            this.state.rooms.map((room) => (
                                <tr key={room.roomId}>
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

export default ListRooms;