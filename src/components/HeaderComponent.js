import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ansan Fast Food</NavbarBrand>
        </div>
      </Navbar>
      <div>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ansan Fast Food</h1>
                       <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                   </div>
               </div>
           </div>
       </div>
    </React.Fragment>
    );
  }
}

export default Header;