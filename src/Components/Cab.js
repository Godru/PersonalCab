import React, { Component } from 'react';
import '../App.css';
import TicketBuy from './TicketBuy.js'
import TicketShow from './TicketShow.js'

class Cab extends Component{
    constructor(props){
        super(props);
        this.state = {
            cabShow: 'none',
            userName: 'Иван',
            ticketsShow: 'none',
            ticketsBuy: 'block'
        };
        this.openMyTickets = this.openMyTickets.bind(this);
        this.closeMyTickets = this.closeMyTickets.bind(this);
    };
    componentWillReceiveProps(nextProps){
        this.setState({cabShow: nextProps.cabShow})
    }
    openMyTickets(){
        this.setState({
            ticketsShow: 'block',
            ticketsBuy: 'none'
        })
    }
    closeMyTickets(){
        this.setState({
            ticketsShow: 'none',
            ticketsBuy: 'block'
        })
    }
    render() {
        return (
            <div style ={{display: this.state.cabShow}} className="login__block">
                <h1 className="Cab__title">Здравствуйте {this.state.userName}</h1>
                <div style={{display: this.state.ticketsBuy}}>
                    <button onClick={this.openMyTickets} className="login__button">Мои билеты</button>
                    <TicketBuy/>
                </div>
                <div style={{display: this.state.ticketsShow}}>
                    <button onClick={this.closeMyTickets} className="login__button">Назад</button>
                    <TicketShow/>
                </div>
            </div>
        );
    }
}

export default Cab;