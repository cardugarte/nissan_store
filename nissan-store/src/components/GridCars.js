import React from 'react';

import Card from './Card';

class GridCars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    // this.setState({loading: true, error: null})
    try {
      const response = await fetch('https://4my1q6hsyo.api.quickmocker.com/product/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer qwertyuiopasdfghjklzxcvbnm123456',
        },
      })
      const data = await response.json();
      console.log(data);
      this.setState({
        loading: false,
        data: data,
      })
    }catch (error) {
      this.setState({
        loading: false,
        error: error,
      })
    }
  }

  render() {
    if(this.state.loading) {
      return 'Loading...'
    }
    return (
      <React.Fragment>
        <Card cars={this.state.data} />
      </React.Fragment>
    )
  }
}

export default GridCars;