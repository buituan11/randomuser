import React from 'react';
import { connect } from 'dva';
import UserList from '../components/UserList';
import { Button } from 'antd';
import {style} from './user.css';

@connect(({ dispatch, user }) => ({ dispatch,  user }))
class User extends React.Component {
  getNew = () => {
    this.props.dispatch({
      type: `user/get`,
    });
  }
  render() {
    return (
      <div>
        <UserList user={this.props.user} />
        <Button type="primary" onClick={() => this.getNew()}>New User</Button>
      </div>
    );
  }

}
export default User;
