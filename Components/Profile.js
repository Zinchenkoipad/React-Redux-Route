import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

class Profile extends React.Component{
  constructor(){
    super();
    this.state = {
      gender: '',
      name: '',
      address: '',
      mail: '',
      age: '',
      phone: '',
      cell: '',
      picture: '',
      nationality: '',
      loading: true,
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(data => {
        var profile = data.results[0];
        this.setState({
          gender: profile.gender,
          name: profile.name.title +' '+ profile.name.first +' '+ profile.name.last,
          address: profile.location.state +', '+ profile.location.city +', '+ profile.location.street,
          mail: profile.email,
          age: profile.dob.age,
          cell: profile.cell,
          picture: profile.picture.large,
          nationality: profile.nat,
          loading: false
        })
      });
  }

  render(){
    const { picture, name, address, gender, nationality, age, cell, mail, loading } = this.state;
    return(
        <div className="container">
          {loading?
            <div className='container d-flex content-justify-center mt-100'>
              <div className='mx-auto'>
                <BarLoader
                  sizeUnit={"px"}
                  size={100}
                  color={'#123abc'}
                  loading={loading}
                />
              </div>
            </div>
          :
            <div className="card mx-auto" style={{width: '14rem'}}>
              <img src={picture} className="card-img-top" alt="profile" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><b>адрес: </b>{address}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>пол: </b>{gender}</li>
                <li className="list-group-item"><b>национальность: </b>{nationality}</li>
                <li className="list-group-item"><b>возраст: </b>{age} лет</li>
              </ul>
              <div className="card-body">
                <a href={'tel:' + cell} className="card-link">Позвонить</a>
                <a href={'mailto:' + mail} className="card-link">Написать</a>
              </div>
            </div>
          }
        </div>
    )
  }
}


export default Profile;