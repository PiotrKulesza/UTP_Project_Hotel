import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBarAdmin extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            user: ''

        }

    }

    componentDidMount(){
        if ('null' == this.state.user && typeof this.state.user == "undefined") {
            window.location = "http://localhost:3000/login"
        }
        if ('ADMIN' !== localStorage.getItem('typeOfUser') ) {
            window.location = "http://localhost:3000/user"
        }

    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={"/admin"} className={"navbar-brand"}>
                    Menu główne
                </Link>
                <Nav className="mr-auto">
                    <Link to="/admin/addroom" className={"nav-link"}>Dodaj pokój</Link>
                    <Link to="/admin/listrooms" className={"nav-link"}>Lista pokojów</Link>
                    <Link to="/loggout" className={"nav-link"}>Wyloguj</Link>
                </Nav>

            </Navbar>
        );
    }

}

export default NavigationBarAdmin;