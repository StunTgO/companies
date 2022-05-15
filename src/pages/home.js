import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [companies, setCompaniesId] = useState([]);
  
    const companiesDetails = async (id) => {
      const res = await axios({
        method: 'get',
        url: 'http://localhost:3000/companies',
        data: id
      });
  
      setCompaniesId(res.data);
    };
  
    useEffect(() => {
      companiesDetails();
    }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Companies</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Companies</th>
                  <th>Vatin</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link to="/companies">{item.name}</Link>
                    </td>
                    <td>
                      <Link to="/number">{item.vatin}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
