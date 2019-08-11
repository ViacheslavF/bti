import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import './npmpackage.scss';
import { area } from 'npm-helloworld-vfl';

class Npmpackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: 0
    }
  }

  openFirstFrontend() {
    console.log(area(2));
    this.setState({area: area(2)})
  }

  render() {
    return (
      <div className="d-flex">
        <MDBBtn color="primary" onClick={this.openFirstFrontend.bind(this)}>Count area</MDBBtn>
        <div>
          Area is {this.state.area ? this.state.area : ''}
        </div>
      </div>
    );
  }
}

export default Npmpackage;
