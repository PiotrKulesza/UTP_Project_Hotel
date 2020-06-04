import React from "react";
import {Nav, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class RoomsTable extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            rooms:props.rooms
        }
    }




    render() {
        return (
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

        );
    }
}

export default RoomsTable