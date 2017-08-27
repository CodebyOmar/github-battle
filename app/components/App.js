var React        = require('react')
    ,Popular     = require('./Popular')
    ,ReactRouter = require('react-router-dom')
    ,Router      = ReactRouter.BrowserRouter
    ,Route       = ReactRouter.Route
    ,Nav         = require('./Nav')
    ,Home        = require('./Home')
    ,Battle      = require('./Battle');

class App extends React.Component
{
    render()
    {
        return(
            <Router>
              <div className='container'>
                <Nav />
                <Route exact path='/' component={ Home }/>
                <Route path='/battle' component={ Battle } />
                <Route path='/popular' component={ Popular } />
              </div>
            </Router>
        )
    }
}    

module.exports = App;