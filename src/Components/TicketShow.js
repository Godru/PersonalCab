import React, { Component } from 'react';
import '../App.css';

class TicketShow extends Component{
    constructor(props){
        super(props);
        this.state = {
            tickets: []
        };
        this.ticketsMake = this.ticketsMake.bind(this);
    };
    ticketsMake(){
        let tickets =[];
        tickets.push(<tr>
            <th className="ticket-table__row">Будни</th>
            <th className="ticket-table__row">на 5 поездок</th>
            <th className="ticket-table__row">1</th>
            <th className="ticket-table__row">100</th>
        </tr>);
        tickets.push(<tr>
            <th className="ticket-table__row">Выходные</th>
            <th className="ticket-table__row">на 10 поездок</th>
            <th className="ticket-table__row">2</th>
            <th className="ticket-table__row">400</th>
        </tr>);
        return tickets;
    }

    render() {
        const Tickets = this.ticketsMake();
        return (
                <table className="ticket-table-show">
                    <thead>
                        <tr>
                            <th className="ticket-table__row table-header">День недели</th>
                            <th className="ticket-table__row table-header">Тариф</th>
                            <th className="ticket-table__row table-header">Количество</th>
                            <th className="ticket-table__row table-header">Цена</th>
                        </tr>
                        {Tickets}
                    </thead>
                </table>
        );
    }
}

export default TicketShow;