import React, { Component } from 'react'

import APICalls from '../services/APICalls';

import img1 from '../images/pic1.jpg'
import img2 from '../images/pic2.jpg'
import img3 from '../images/pic3.jpg'
import CartDetails from './CartDetails';
import { ButtonContext } from './BasicConstant';
import BodyComponent from './BodyComponent';
class DrinkItemList extends Component {
  // we can use context now
  static contextType = ButtonContext;
  constructor(props) {
    super(props)

    this.state = {
      hideFlag: true,
      itemName: "",
      itemQuantity: "",
      items: [],
      cusID: this.props.name,
      hideThisWindow: true
    }
  }
  addToCart(e) {

    console.log(e);
    this.setState({
      hideFlag: false,
      hideThisWindow: false

    })

  }
  componentDidMount() {
    APICalls.getAllNonVegItems().then((res) => {
      this.setState({ items: res.data });
    });
  }
  render() {
    const { username, chanegUserName } = this.context
    return (
      <div className=' text-center'>
       



        {this.state.hideThisWindow ?
          <> <br></br><h1 className='text-white'>COLD DRINKS</h1><br></br><br></br>
            <div className="container-fluid p-0 m-0 
            align-items-center 
            justify-content-center d-flex"
              style={{ "minHeight": "100vh" }}>


              <div className="row w-100 p-0 w-0">
                <br></br><br></br>

                <div className="col-lg-4 mb-2">
                  <div className="card mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img1}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Sprite
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>

                      <button value={1} className="btn btn-success" onClick={() => this.addToCart(1)}>Add to Cart</button>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-2">
                  <div className="card mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img1}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Thums Up
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(2)}>Add to Cart</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-2">
                  <div className="card mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img1}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Pepsi
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(3)}>Add to Cart</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-2">
                  <div className="card mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img1}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        7 Up
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(4)}>Add to Cart</button>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img2}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Maaza
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>

                      <button className="btn btn-success" onClick={() => this.addToCart(5)}>Add to Cart</button>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img3}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Lemon Water
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(6)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img3}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Ice Tea
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(7)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img3}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Cold Coffee
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(8)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-2">
                  <div className="card  mx-auto" style={{ "width": "18rem" }}>
                    <img className="card-img-top" src={img3}
                      alt="Card image cap" />

                    <div className="card-body">
                      <h5 className="card-title">
                        Chocolate shake
                      </h5>
                      <p className="card-text">
                        Rs. 200/-
                      </p>


                      <button className="btn btn-success" onClick={() => this.addToCart(9)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div></div> </> : <BodyComponent />}

        <br></br>

      </div>




    )
  }
}
export default DrinkItemList