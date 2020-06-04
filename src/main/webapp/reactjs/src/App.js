import React from 'react';
import {Button, Col, Container, Jumbotron, Row} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';

import NavigationBar from "./Components/NavigationBar";
import Welcome from "./Components/Welcome.js";
import Fotter from "./Components/Fotter.js";
import Login from "./Components/Login";
import Register from "./Components/Register";
import LoggedTest from "./Components/LoggedTest";
import NavigationBarUser from "./Components/NavigationBarUser";
import Loggout from "./Components/Loggout";
import NavigationBarAdmin from "./Components/NavigationBarAdmin";
import WelcomeAdmin from "./Components/WelcomeAdmin";
import AddRoom from "./Components/AddRoom";
import ListRooms from "./Components/ListRooms";
import WelcomeUser from "./Components/WelcomeUser";
import Reservations from "./Components/Reservations";

function App() {

    const marginTop = {
        marginTop : "20px"
    }

  return (
      <Router>
          <Route path={"/"} exact component={NavigationBar}/>
          <Route path={"/login"} exact component={NavigationBar}/>
          <Route path={"/register"} exact component={NavigationBar}/>
          <Route path={"/user"} exact component={NavigationBarUser}/>
          <Route path={"/user/reservation"} exact component={NavigationBarUser}/>
          <Route path={"/admin"} exact component={NavigationBarAdmin}/>
          <Route path={"/admin/addroom"} exact component={NavigationBarAdmin}/>
          <Route path={"/admin/listrooms"} exact component={NavigationBarAdmin}/>
        <Container>

            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route path={"/"} exact component={Welcome}/>
                        <Route path={"/login"} exact component={Login}/>
                        <Route path={"/register"} exact component={Register}/>
                        <Route path={"/test"} exact component={LoggedTest}/>
                        <Route path={"/loggout"} exact component={Loggout}/>
                        <Route path={"/admin"} exact component={WelcomeAdmin}/>
                        <Route path={"/user"} exact component={WelcomeUser}/>
                        <Route path={"/admin/addroom"} exact component={AddRoom}/>
                        <Route path={"/admin/listrooms"} exact component={ListRooms}/>
                        <Route path={"/user/reservation"} exact component={Reservations}/>
                    </Switch>



                </Col>
            </Row>
        </Container>
          <Fotter/>
      </Router>
  );
}

export default App;
