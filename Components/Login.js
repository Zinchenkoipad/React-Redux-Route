import React from 'react';

export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username: false,
      password: false
    }
    this.checkUser = this.checkUser.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  checkUsername(event){
    if(event.currentTarget.value === this.props.data.username){
      this.setState({username: true})
    }
  }
  checkPassword(event){
    if(event.currentTarget.value === this.props.data.password){
      this.setState({password: true})
    }
  } 
  checkUser(){
    var qtyty=0
    if(this.state.username && this.state.password){
      localStorage.setItem('errorLog', 0);
      this.props.login();
    }else{
      if(localStorage.getItem('errorLog')){
        localStorage.setItem('errorLog', +localStorage.getItem('errorLog') + 1);
        qtyty = localStorage.getItem('errorLog')
      }else{
        localStorage.setItem('errorLog', 1);
        qtyty = localStorage.getItem('errorLog')
      }
      alert('Имя пользователя или пароль введены не верно\nКоличество неудачных попыток составляет: '+ qtyty);

    }
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="col-lg-4 mx-auto mt-5">

        <div className="form-group">
          <label htmlFor="login">Логин</label>
          <input onChange={this.checkUsername} type="text" className="form-control" id="login" aria-describedby="inputHelp" placeholder="Введите логин" autoComplete="off"/>
          <small id="inputHelp" className="form-text text-muted">Введите логин полученный от администратора</small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input onChange={this.checkPassword} type="password" className="form-control" id="password" placeholder="Введите пароль" autoComplete="off"/>
        </div>

        <button onClick={this.checkUser} className="btn btn-primary btn-sm">Войти</button>

      </form>
    )
  }
}