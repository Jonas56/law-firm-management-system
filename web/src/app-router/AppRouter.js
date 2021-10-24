import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Cases from '../pages/Cases'
import Home from '../pages/Home'
import SingleCase from '../pages/SingleCase'

function AppRouter() {
    return (
        <div>
            {/* Header and Sidebar */}
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/cases' component={Cases} />
                <Route  path='/cases/:caseId' component={SingleCase} />
            </Switch>
        </div>
    )
}

export default AppRouter
