import React from 'react';

import { ArrowRight } from 'react-bootstrap-icons';
import '../Styles/Button.css';

class CallToAction extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary"><span>INGRESAR A NISSAN STORE</span><ArrowRight color="white" size={25} /></button>
      </div>
    )
  }
}

export default CallToAction;