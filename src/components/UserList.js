import React from 'react';
import { Card, Icon } from 'antd';
import style from './UserList.css';
class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.props.user.name,
        }
    }
    changeState = (text) =>{
        this.setState({text});
    }
    render(){
        return(
            <div>
                <Card title="Random User" bordered={true} style={{ width: 500, margin: "0px auto" }}>
                    <img src={this.props.user.img}></img>
                    <p>{ this.state.text }</p>
                    <div className={style.info}>
                        <Icon type="user" onMouseMove={()=>this.changeState(this.props.user.name)}/>
                        <Icon type="mail" onMouseMove={()=>this.changeState(this.props.user.email)}/>
                        <Icon type="phone" onMouseMove={()=>this.changeState(this.props.user.phone)}/>
                    </div>
                </Card>
            </div>
        );
    }
}

export default UserList;