// import React, { useState } from 'react'
import serviceCompany from '../../../data/serviceCompany'
import Service from '../../../data/services'
import './Services.css'

const Services = () => {
    const company= serviceCompany
    console.log(company);
    const service = Service
    return (
      <div className="container">
        <div className="service">
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
        <div className="bottom-side">
          <h4 className="services__title">
            Provide awesome <span>services</span>
          </h4>
          <div className="services">
            {service.map((service,index) => {
              return (
                <div key={index} className="services__details">
                  <img src={service.img} alt="" />
                  <h6>{service.title}</h6>
                  <p>{service.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Services
