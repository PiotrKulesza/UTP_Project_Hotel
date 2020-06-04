import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBarUser extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            user: ''

        }

    }

    componentDidMount(){
        if ('null' === this.state.user && typeof this.state.user === "undefined") {
            window.location = "http://localhost:3000/login"
        }
        if ('USER' !== localStorage.getItem('typeOfUser') ) {
            window.location = "http://localhost:3000/loggout"
        }

    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={"/user"} className={"navbar-brand"}>
                    Menu Głowne
                </Link>
                <Nav className="mr-auto">
                    <Link to="/user/reservation" className={"nav-link"}>Rezerwuj</Link>
                    <Link to="/user/reservationslist" className={"nav-link"}>Lista Rezerwacji</Link>
                    <Link to="/loggout" className={"nav-link"}>Wyloguj</Link>
                </Nav>

            </Navbar>
        );
    }

}

export default NavigationBarUser;