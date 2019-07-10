import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { parseDate } from '../search/search_helper';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            time: "19:00:00",
            party_size: "2"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors;
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const reservation = Object.assign({}, this.state, {
            date: parseDate(this.state.date),
            restaurant_id: this.props.restaurant.id,
            user_id: this.props.userId
        })

        
        if (this.props.reservation.value === undefined) {
            return this.props.create(reservation)
        } else {
            return this.props.edit(reservation)
        }
    }

    handleDelete(reservation) {
        return this.props.cancel(reservation)
    }

    
    handleChange(pickedDate) {
        this.setState({
            date: pickedDate
        })
    }
    
    submitButton() {
        if (this.props.reservation.value === undefined) {
            return (
                <button className="resform-submit"
                    onClick={ this.handleSubmit }>Reserve Table</button>
            )
        } else {
            return (
                <button className="resform-submit"
                    onClick={ this.handleSubmit }>Edit Reservation</button>
            )
        }
    }
            
    deleteButton(reservation) {
        if (this.props.reservation.value !== undefined) {
            return (
                <button className="resform-delete"
                    type="submit">Cancel Reservation</button>
            )
        }
    }

    renderErrors() {
        return (
            <ul className='resform-error-container'>
                {this.props.errors.map((error, i) => (
                    <li className="resform-error" key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <form className="reservation-form-container">
                <h1 className="header">Make a Reservation</h1>
                { this.renderErrors() }
                <div className="resform-party-size-container">
                    <h1>Party Size</h1>
                    <div className="select-container">
                        <select className="resform-select" defaultValue={ this.state.party_size }
                            onChange={ this.update("party_size") }>
                            <option value="1">For 1</option>
                            <option value="2">For 2</option>
                            <option value="3">For 3</option>
                            <option value="4">For 4</option>
                            <option value="5">For 5</option>
                            <option value="6">For 6</option>
                            <option value="7">For 7</option>
                            <option value="8">For 8</option>
                            <option value="9">For 9</option>
                            <option value="10">For 10</option>
                            <option value="11">For 11</option>
                            <option value="12">For 12</option>
                        </select>
                    </div>
                </div>
                <div className="resform-date-time">
                    <div className="resform-date-container">
                        <h1>Date</h1>
                        <DatePicker
                            id="resform-datepicker"
                            selected={this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="resform-time-container">
                        <h1>Time</h1>
                        <div className="select-container">
                            <select className="resform-select" defaultValue={ this.state.time }
                                onChange={ this.update("time") }>
                                <option value="17:00:00">5:00 PM</option>
                                <option value="17:30:00">5:30 PM</option>
                                <option value="18:00:00">6:00 PM</option>
                                <option value="18:30:00">6:30 PM</option>
                                <option value="19:00:00">7:00 PM</option>
                                <option value="19:30:00">7:30 PM</option>
                                <option value="20:00:00">8:00 PM</option>
                                <option value="20:30:00">8:30 PM</option>
                                <option value="21:00:00">9:00 PM</option>
                                <option value="21:30:00">9:30 PM</option>
                            </select>
                        </div>
                    </div>
                </div>
                { this.submitButton() }
            </form>
        )
    }
}

export default ReservationForm;