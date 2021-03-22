import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight } from 'react-bootstrap-icons';
import '../Styles/Button.css';

class CallToAction extends React.Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/autos"><span>INGRESAR A NISSAN STORE</span><ArrowRight color="white" size={25} /></Link>
      </div>
    )
  }
}

export default CallToAction;