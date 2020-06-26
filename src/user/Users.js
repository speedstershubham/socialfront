import React, { Component } from 'react'
import{list} from './apiUser';
import{Link} from 'react-router-dom';
import DefaultProfile from'../images/avatar.png'

 class Users extends Component {
     constructor() {
         super(); 
         this.state = {
              users:[]
         };
     }
     
componentDidMount() {
    list().then(data => {
        if(data.error){ 
            console.log(data.error);
        }else{
            this.setState({users:data});
        }
    });
}

renderUsers = users  => (
    <div className="row">
{users.map((user,i) => (
    <div className="card col-md-4"  key={i}>
  <img style={{height:"200px",width:"200px"}} className="img-thumbnail" src={`https://mern-insta-acc.herokuapp.com/user/photo/${user._id}`}
  onError={i =>(i.target.src = `${DefaultProfile}`)}
  alt={user.name} />
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">{user.email}</p>
     <Link 
     to={`/user/${user._id}`}
     className="btn btn-raised  btn-primary btn-sm">
        View Profile
    </Link>
  </div> 
</div>
))}
    
   </div>
)
    render() {
        const {users } = this.state;
        return (
            <div>
               <h2 className="mt-5 mb-5">Users</h2>
   
   {this.renderUsers(users)}
            </div>
        )
    }
}

export default Users