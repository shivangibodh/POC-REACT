import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component{

    render(){
        if(!this.props.user){
            return <h2>Select User....</h2>
        }

        return(
            <div>
                <p>id:{this.props.user.id}</p>
                <p>Name:{this.props.user.name}</p>
                <p>Email:{this.props.user.email}</p>
                <p>Contact:{this.props.user.contact}</p>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.activeUser
    }
}

export default connect(mapStateToProps) (UserDetail);



