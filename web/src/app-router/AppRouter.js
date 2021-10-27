import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Cases from '../pages/Cases'
import Home from '../pages/Home'
import SingleCase from '../pages/SingleCase'
import Tasks from '../pages/Tasks'
import Calendar from '../pages/Calendar'
import Documents from '../pages/Documents'
import Invoices from '../pages/Invoices'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'


function AppRouter() {
    return (
        <div className="app-router">
            <Header /><Sidebar />
            <div className='content-container'>
                

            <Switch>
                
                <Route exact path='/' component={Home}/>
                <Route exact path='/cases' component={Cases} />
                <Route  path='/cases/:caseId' component={SingleCase} />
                <Route exact path='/calendar' component={Calendar} />
                <Route exact path='/tasks' component={Tasks} />
                <Route exact path='/documents' component={Documents} />
                <Route exact path='/invoices' component={Invoices} />
            </Switch>
            </div>
        </div>
    )
}

export default AppRouter
