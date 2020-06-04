import React from "react";
import {Jumbotron} from "react-bootstrap";

class WelcomeAdmin extends React.Component{

    render() {
        return (

            <Jumbotron className = "bg-dark text-white">
                <h1>Witaj Adminie</h1>
                <p>
                    Możesz tutaj dodawać pokoje.
                </p>

            </Jumbotron>

        );
    }
}
export default WelcomeAdmin;