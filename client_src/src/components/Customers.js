import React, { Component } from 'react';
import axios from 'axios';
import CustomerItem from './CustomerItem';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }
    componentWillMount() {
        this.getCustomers();
    }

    getCustomers() {
        axios.get('http://localhost:3000/api/customers')
        .then ( response => {
            this.setState({customers: response.data}, () => 
            {
             //   console.log(this.state)
            })
        })
        .catch( err => console.log(err));
    }
    render () {
        const customerItems = this.state.customers.map((customer, i) => {
            return (
                <CustomerItem  key = {customer.id}  item = {customer} />
            )
        })
        return (
            <div>
                <h1>Customers </h1>
                <ul className= "collection">{customerItems}</ul>
                </div>
        )
    }
    
}

export default Customers;