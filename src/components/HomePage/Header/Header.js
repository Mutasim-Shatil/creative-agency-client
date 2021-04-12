import React from 'react'
import './Header.css'
import headerImg from '../../../images/logos/Frame.png'

const Header = () => {
    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="header__left col-md-4 col-sm-12">
              <h1>
                Let's Grow Your
                <br />
                Brand To The
                <br />
                Next Level
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus voluptas cum 
              </p>
            </div>
            <div className="header__right col-md-8 col-sm-12">
              <img src={headerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header
