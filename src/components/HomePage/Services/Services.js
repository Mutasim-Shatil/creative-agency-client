// import React, { useState } from 'react'
import serviceCompany from '../../../data/serviceCompany'
import './Services.css'

const Services = () => {
    const company= serviceCompany
    console.log(company);
    return (
      <div className="services container">
        {company.map((company, index) => {
          return (
            <div key={index}>
              <div className="company">
                <img src={company.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    );
}

export default Services
