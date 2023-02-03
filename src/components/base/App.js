import React from 'react'
import { connect } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Products from '../../pages/dashboard/products';

class App extends React.PureComponent {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(App);