import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import List from './components/lists/list'
import AboutMe from './components/aboutme/aboutme'
import Jokes from './components/jokes/jokes'
import Footer from './components/footer/footer'

const Routes = () => (
    <div>
      <Header/>
        <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/jokes" component={Jokes} />
            <Route exact path="/aboutme" component={AboutMe} />
        </Switch>
    <Footer/>
    </div> )

export default Routes