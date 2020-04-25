import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ReactLoading from 'react-loading'

// pages
import Home from './pages/Home'
import Info from './pages/Info'
import Example from './pages/Example'


import './css/App.scss'

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    
  }, [])


  return (
    loading ? <div id="loader"><ReactLoading type={'bars'} color={'black'} height={100} width={100} /></div> :
    (
      <div className="App">
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route path="/info" component={Info}/>
                <Route path="/example" component={Example}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    )
  )
}

export default App;
