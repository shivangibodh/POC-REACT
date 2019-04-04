import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import SelectUser from '../actions';

class UserListComponent extends React.Component{

    createUserList(){
        console.log("----Hello from create userlist---");
        return this.props.users.map(
        
            (user)=>
        {
            return <li key={user.id}  onClick={()=>{this.props.SelectUser(user) }}>{user.name}</li>
        }
        )
    }
    render(){
        return(
            <div>
                <ul>
                    {this.createUserList()}
                    
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return{
        users:state.users
    }
}

function matchDispatchToProps(dispatch){

    return bindActionCreators({SelectUser:SelectUser},dispatch)
    
    
}
export default connect(mapStateToProps,matchDispatchToProps)(UserListComponent);
