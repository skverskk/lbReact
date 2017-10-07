import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddCustomer extends Component {
    addCustomer(newCustomer) {
        axios.request( {
            method:'post',
            url: 'http://localhost:3000/api/customers',
            data:newCustomer
        }).then (response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));

    }

    onSubmit(e) {
        const newCustomer = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        this.addCustomer(newCustomer);
      //  console.log(this.refs.name.value);
       e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to='/'>Back</Link>
                <h1>Add Customer</h1>

                <form onSubmit={this.onSubmit.bind(this)}>
                    {/* Name Input */}
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                     {/* City Input */}
                     <div className="input-field">
                        <input type="text" name="city" ref="city" />
                        <label htmlFor="name">City</label>
                    </div>
                     {/* Address Input */}
                     <div className="input-field">
                        <input type="text" name="address" ref="address" />
                        <label htmlFor="name">Address</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />

                </form>

            </div>
        )
    }

}

export default AddCustomer;