import React from "react";
import {Jumbotron} from "react-bootstrap";

class WelcomeUser extends React.Component{

    render() {
        return (

            <Jumbotron className = "bg-dark text-white">
                <h1>Witaj Użytkowniku</h1>
                <p>
                    Możesz tutaj zarezerwować pokój.
                </p>

            </Jumbotron>

        );
    }
}
export default WelcomeUser;