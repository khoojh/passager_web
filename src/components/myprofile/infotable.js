import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from "./myprofile.css";
// import * as actions from "../../redux/passages/action.js";
import { FaUserEdit } from 'react-icons/fa';

class InfoTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editUsername: false,
            editUsernameValue: "Walkin Dude"
        };
        this.usernameRef = React.createRef();
        this.handleKeyPress_username = this.handleKeyPress_username.bind(this);
    }

    handleClickEdit_username() {
        this.setState({ editUsername: true }, ()=>{
            this.usernameRef.current.focus();
        });
    }

    handleChangeEdit_username(e) {
        this.setState({ editUsernameValue: e.target.value })
    }

    handleKeyPress_username(e) {
        if (e.key == 'Enter') {
            console.log("EDITED!");
            this.setState({ editUsername: false });
            //Insert code to edit
        }
    }

    renderInfoInput_username(value) {
        return this.state.editUsername ? (
            <div>
                <input
                    ref={this.usernameRef}
                    className={style.infoTableInput}
                    value={this.state.editUsernameValue}
                    onBlur={(e)=>{this.setState({ editUsername: false }); /*insert code to edit*/}}
                    onChange={(e)=>{this.handleChangeEdit_username(e)}}
                    onKeyPress={this.handleKeyPress_username}></input>
            </div>
        ) : (<div>{value}</div>);
    }

    render() {
        return (
            <table className={"table " + style.info_table}>
                <tbody>
                    <tr>
                        <td className={style.col1}>Username</td>
                        <td className={style.col2}>{this.renderInfoInput_username("Walkin Dude")}</td>
                        <td className={style.col3}><div className={style.user_edit} onClick={()=>{this.handleClickEdit_username()}}><FaUserEdit/></div></td>
                    </tr>
                    <tr>
                        <td className={style.col1}>First Name</td>
                        <td className={style.col2}>Randall</td>
                        <td className={style.col3}><div className={style.user_edit}><FaUserEdit/></div></td>
                    </tr>
                    <tr>
                        <td className={style.col1}>Last Name</td>
                        <td className={style.col2}>Flagg</td>
                        <td className={style.col3}><div className={style.user_edit}><FaUserEdit/></div></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default InfoTable;
