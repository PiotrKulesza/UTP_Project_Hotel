import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class Loggout extends React.Component{

    componentDidMount(){
        localStorage.clear();
            window.location = "http://localhost:3000/login"


    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">


            </Navbar>
        );
    }

}

export default Loggout;