import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from 'react-bootstrap-icons';
import '../Styles/Button.css';

class CallToAction extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link className="btn btn-primary" to="/autos"><span>{"Ingresa a Nissan Store".toUpperCase()}</span><ArrowRight color="white" size={25} /></Link>
      </React.Fragment>
    )
  }
}

export default CallToAction;