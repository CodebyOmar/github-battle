var React = require('react')
    ,Link = require('react-router-dom').Link;

class Home extends React.Component
{
  render () {
    return(
      <div className='home-container'>
        <h1> Battle you friends for fun.... </h1> 
        <Link className='button' to='/battle'>
          <button> Battle </button>
        </Link>
      </div>
    )
  }
}

module.exports = Home;