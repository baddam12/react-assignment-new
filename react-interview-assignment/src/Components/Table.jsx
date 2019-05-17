import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Table extends Component {
  static prototypes = {
    api: PropTypes.string
  };
  state = {
    tableItems: []
  };
  componentDidMount() {
    axios.get(this.props.api)
      .then(response => response.data)
      .then(data => {
      this.setState({
        tableItems : data
      });
    }).catch(error => {
      console.error(error);
    });
  }
  render() {
    return (
      <Fragment>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.tableItems.map((user, key) => {
              return (
                <tr key={ `table-${key}-${Math.random()}` }>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.company.name}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </Fragment>
    )
  }
}