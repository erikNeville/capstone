import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import JobDetails from './components/jobs/JobDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Contacts from './components/dashboard/Contacts'
import CreateJob from './components/jobs/CreateJob'
import Concrete from './components/forms/Concrete'
import Epoxy from './components/forms/Epoxy'
import Resteel from './components/forms/Resteel'
import Grout from './components/forms/Grout'
import Construction from './components/forms/Construction'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/job/:id' component={JobDetails} />
            <Route path='/concrete' component={Concrete} />
            <Route path='/grout' component={Grout} />
            <Route path='/epoxy' component={Epoxy} />
            <Route path='/resteel' component={Resteel} />
            <Route path='/const' component={Construction} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/contact' component={Contacts} />
            <Route path='/create' component={CreateJob} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
