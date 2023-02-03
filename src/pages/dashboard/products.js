import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../slices/productSlice';
import './products.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "idle",
      products: []
    };
  }

  componentDidMount() {
    // debugger;
    window.scrollTo(0, 0);
    this.getAllProducts();
  }

  getAllProducts() {
    this.props.dispatch(fetchProducts()).then(() => {
      // debugger;
      // console.log(this.props.profile);
      this.setState({
        products: this.props.products
      })
    });
  }

  render() {
    return (
      <div className="center">
        <div className="productsWrapper">
          {this.state.products ? this.state.products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              {/* <button onClick={() => handleAdd(product)} className="btn">
                Add to cart
              </button> */}
            </div>
          )): <p>No products!!!</p>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // debugger;
  return {
    products: state.product.data,
    status: state.product.status
  };
}

export default connect(mapStateToProps)(Products);