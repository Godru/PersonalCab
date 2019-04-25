import React,{Component} from 'react';
import './App.css';
import Registration from './Components/Registration.js'
import Cab from './Components/Cab.js'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            regShow: 'none',
            enterShow: 'flex',
            cabShow: 'none',
        };
        this.regEnter = this.regEnter.bind(this);
        this.regExit = this.regExit.bind(this);
        this.cabEnter = this.cabEnter.bind(this);
    }
    regEnter(){
        this.setState({
            regShow: 'flex',
            enterShow: 'none'
        })
    }
    regExit(exit){
        this.setState({
            regShow: exit,
            enterShow: 'flex'
        })
    }
    cabEnter(){
        this.setState({
            cabShow: 'flex',
            enterShow: 'none'
        })
    }

    render() {
        return (
            <div className="App">
                <h1 className="title">
                    Cоленые озера
                </h1>
                <div style ={{display: this.state.enterShow}} className="login__block">
                    <div className="login__block">
                        <p className="login__text">
                            Логин
                        </p>
                        <input className="login__input"/>
                    </div>
                    <div className="login__block">
                        <p className="login__text">
                            Пароль
                        </p>
                        <input type="password" className="login__input"/>
                    </div>
                    <div className="login__confirm">
                        <button onClick={this.cabEnter} className="login__button">Войти</button>
                        <button onClick={this.regEnter} className="login__button">Регистрация</button>
                    </div>
                </div>
                <Registration exit ={this.regExit} regShow = {this.state.regShow}/>
                <Cab cabShow = {this.state.cabShow}/>
            </div>
        );
    }
}

export default App;
