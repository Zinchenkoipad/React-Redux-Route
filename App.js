import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut, LogIn } from './actions/LogAction';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Users from './Components/Users';
import Login from './Components/Login';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <nav className='d-flex justify-content-between'>
            <div className='d-flex'>
              <Link className='p-2' to='/'>На лавную</Link>
              <Link className='p-2' to='/users'>Новости</Link>
              <Link className='p-2' to='/profile'>Профиль</Link>
            </div>
            <div className='p-2'>
              <button className='btn btn-primary btn-sm' onClick={this.props.logOut}>Выйти</button>
            </div>
          </nav>

          <Route path='/' exact component={ Home } />
          <Route path='/users' component={ Users } />
          <Route path='/profile' render={ () => this.props.user.status?<Profile /> : <Login login={this.props.logIn} data={this.props.user} /> } />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user,
  page: store.page
})

const mapDispatchToProps = dispatch => ({
  logOut: user => dispatch(LogOut()),
  logIn: user => dispatch(LogIn())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);