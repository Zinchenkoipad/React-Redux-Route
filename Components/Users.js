import React from 'react';

class Users extends React.Component{
  constructor(){
    super()
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    var users=[];
    for(var i=1;i<10;i++){
      users.push(
        <img key={'women'+i} className='m-1 rounded' src={'https://randomuser.me/api/portraits/women/'+i+'.jpg'} alt={i} />
      );
      users.push(
        <img key={'man'+i} className='m-1 rounded' src={'https://randomuser.me/api/portraits/men/'+i+'.jpg'} alt={i} />
      )
    }
    this.setState({users:users})
  }

  render(){
    return(
      <div>
        <h2>Users</h2>
        <div className='d-flex flex-wrap justify-content-center'>
          {this.state.users}
        </div>
      </div>
    )
  }
}

export default Users;