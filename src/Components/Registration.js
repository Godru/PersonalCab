import React, { Component } from 'react';
import '../App.css';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            regShow: 'none',
            login: '',
            pass: '',
            confirmPass: '',
            name: '',
            surname:'',
            patronymic: '',
            date: '',
            maleGender: true,
            phone: '',
            email: '',
            passErr: 'none'
        };
        this.regExit = this.regExit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.regConfirm = this.regConfirm.bind(this);
    };
    componentWillReceiveProps(nextProps){
        this.setState({regShow: nextProps.regShow})
    }
    regExit(){
        this.props.exit('none');
        this.setState({
            passErr: 'none'
        })
    }
    regConfirm(){
        if(this.state.pass !== this.state.confirmPass){
            this.setState({
                passErr: 'block'
            })
        }else{
            this.props.exit('none');
        }
    }
    inputChange(e,key){
        switch(key) {
            case 'login': {
                this.setState({
                    email: e.target.value,
                });
                break;
            }
            case 'pass': {
                this.setState({
                    pass: e.target.value,
                    passErr: 'none'
                });
                break;
            }
            case 'confirmPass': {
                this.setState({
                    confirmPass: e.target.value,
                    passErr: 'none'
                });
                break;
            }
            case 'surname': {
                this.setState({
                    surname: e.target.value,
                });
                break;
            }
            case 'name': {
                this.setState({
                    name: e.target.value,
                });
                break;
            }
            case 'patronymic': {
                this.setState({
                    patronymic: e.target.value,
                });
                break;
            }
            case 'email': {
                this.setState({
                    email: e.target.value,
                });
                break;
            }
            case 'date': {
                this.setState({
                    email: e.target.value,
                });
                break;
            }
            case 'genderMale': {
                this.setState({
                    maleGender: true,
                });
                break;
            }
            case 'genderFemale': {
                this.setState({
                    maleGender: false,
                });
                break;
            }
            default:{
                break;
            }
        }
    }
    render() {
        return (
            <div style ={{display: this.state.regShow}} className="login__block">
                <div className="login__block">
                    <p className="login__text">
                        Логин
                    </p>
                    <input onChange={(e) => this.inputChange(e,'login')} className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Пароль
                    </p>
                    <input type="password" onChange={(e) => this.inputChange(e,'pass')} className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Подтвердите пароль
                    </p>
                    <input type="password" onChange={(e) => this.inputChange(e,'confirmPass')} className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Фамилия
                    </p>
                    <input onChange={(e) => this.inputChange(e,'surname')} className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Имя
                    </p>
                    <input onChange={(e) => this.inputChange(e,'name')} className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Отчество
                    </p>
                    <input onChange={(e) => this.inputChange(e,'patronymic')}  className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Дата рождения
                    </p>
                    <input onChange={(e) => this.inputChange(e,'date')} type= 'date' className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Пол
                    </p>
                    <div className="gender__block">
                        <div>
                            <p className="login__text">Мужской</p>
                            <input onChange={(e) => this.inputChange(e,'genderMale')} checked={this.state.maleGender} type='radio'/>
                        </div>
                        <div>
                            <p className="login__text">Женский</p>
                            <input onChange={(e) => this.inputChange(e,'genderFemale')} checked={!this.state.maleGender} type='radio'/>
                        </div>
                    </div>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        Телефон
                    </p>
                    <input onChange={(e) => this.inputChange(e,'phone')} type= 'tel' className="login__input"/>
                </div>
                <div className="login__block">
                    <p className="login__text">
                        e-mail
                    </p>
                    <input onChange={(e) => this.inputChange(e,'email')} type= 'email' className="login__input"/>
                </div>
                <div className="login__confirm">
                    <button onClick={this.regConfirm} className="login__button">Сохранить</button>
                    <button onClick={this.regExit} className="login__button">Отмена</button>
                </div>
                <div style={{display: this.state.passErr}} className="pass-err">Пароли не совпадают</div>
            </div>
        );
    }
}

export default Registration;