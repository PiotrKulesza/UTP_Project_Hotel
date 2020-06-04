import React from "react";

class LoggedTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            user: ''

        }

    }

    componentDidMount(){
        this.state.user = localStorage.getItem('loggedUser')
        if ('null' === this.state.user && typeof this.state.user === "undefined") {
            window.location = "http://localhost:3000/login"
        }
        if ('ADMIN' === localStorage.getItem('typeOfUser') ) {
            window.location = "http://localhost:3000/admin"
        }
        if ('USER' === localStorage.getItem('typeOfUser') ) {
            window.location = "http://localhost:3000/user"
        }
    }

    render() {
        return(
            <div className={"text-white"}>
            </div>
        );
    }

}

export default LoggedTest;