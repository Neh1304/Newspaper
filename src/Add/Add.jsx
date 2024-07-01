import React from 'react'
import Navbar from '../Navbar/Navbar'

const Add = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <Navbar/>
      <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col md-12 col lg-12 col xl-12 col xxl-12" style={{color:'white'}}>
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col md-6 col lg-6 col xl-6 col xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" />
                </div>
                <div className="col col-12 col-sm-6 col md-6 col lg-6 col xl-6 col xxl-6">
                    <label htmlFor="" className="form-label">Phone number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone number" />
                </div>
                <div className="col col-12 col-sm-12 col md-12 col lg-12 col xl-12 col xxl-12">
                    <label htmlFor="" className="form-label">Address</label>
                    <textarea name="" id="" className="form-control" placeholder="Enter the address"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col md-6 col lg-6 col xl-6 col xxl-6">
                    <label htmlFor="" className="form-label">Pincode</label>
                    <input type="text" className="form-control" placeholder="Enter the pincode" />
                </div>
                <div className="col col-12 col-sm-6 col md-6 col lg-6 col xl-6 col xxl-6">
                    <label htmlFor="" className="form-label">District</label>
                    <input type="text" className="form-control" placeholder="Enter the district" />
                </div>
                <div className="col col-12 col-sm-6 col md-6 col lg-6 col xl-6 col xxl-6">
                    <label htmlFor="" className="form-label">Village Office</label>
                    <input type="text" className="form-control" placeholder="Enter the village office"/>
                </div>
                <div className="col col-12 col-sm-6 col md-6 col lg-6 col xl-6 col xxl-6">
                    <label htmlFor="" className="form-label">Email ID</label>
                    <input type="text" className="form-control" placeholder="Enter email ID" />
                </div>
                <div className="col col-12 col-sm-12 col md-12 col lg-12 col xl-12 col xxl-12">
                    <button className="btn btn-danger">Add</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add
