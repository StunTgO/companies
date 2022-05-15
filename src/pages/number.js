import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Number() {
    const [companies, setCompaniesId] = useState([]);
    const [numbers, setNumbersId] = useState([]);
  
    const companiesDetails = async () => {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:3000/companies',
      });
  
      setCompaniesId(res.data);
    };
  
    const numbersDetails = async () => {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:3000/phone_numbers',
      });
  
      setNumbersId(res.data);
    };
  
    useEffect(() => {
      companiesDetails();
      numbersDetails();
    }, []);
  
    return (
      <>
        <div className="container">
          <div className="row flex-column">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {numbers.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <label>{item.id}</label>
                      </td>
                      <td>
                        <label>{item.type}</label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col d-flex justify-content-end">
              <Link to="/" type="button" className="btn btn-primary">
                Back
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default Number