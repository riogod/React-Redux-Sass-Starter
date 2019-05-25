import React, { Component } from "react";
import Header from "./containers/Header";
import { Switch, Route } from "react-router-dom";
import ModSettings from "./containers/Settings";
import ModStatistic from "./containers/Statistic";
import Catalog from "./containers/Catalog";

class App extends Component {
  render() {



    return (
      <div className="container">

        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Catalog}/>
            <Route path='/catalog/:number' component={Catalog}/>
            <Route path='/statistic'><ModStatistic/></Route>
            <Route path='/settings'><ModSettings/></Route>
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;
