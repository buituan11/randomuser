import React from 'react';
import { Card, Icon } from 'antd';
import style from './UserList.css';
import { connect } from 'dva';

@connect(({ dispatch, user }) => ({ dispatch, user }))
class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    changeState = (text) => {
        this.props.dispatch({
            type: 'user/changeText',
            payload: text
        });
    }

    render() {
        let user = this.props.user.user;
        return (
            <div>
                <Card title="Random User" bordered={true} style={{ width: 500, margin: "0px auto" }}>
                    <img src={user.img}></img>
                    <p>{this.props.user.text}</p>
                    <div className={style.info}>
                        <Icon type="user" onMouseMove={() => this.changeState(user.name)} />
                        <Icon type="mail" onMouseMove={() => this.changeState(user.email)} />
                        <Icon type="phone" onMouseMove={() => this.changeState(user.phone)} />
                    </div>
                </Card>
            </div>
        );
    }
}

export default UserList;