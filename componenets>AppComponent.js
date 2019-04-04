
import React from  'react';
import UserListComponent from '../containers/UserListComponent';
import UserDetail from '../containers/UserDetail';

const AppComponent =()=>{
    return(
     <div>
        <h1>React-redux-final POC</h1>
        <hr></hr>
        <h2>User List</h2>
        <UserListComponent/>
        <UserDetail/>
        <hr></hr>
     
    </div>
    );
}

export default AppComponent;

