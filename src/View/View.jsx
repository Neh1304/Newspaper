import React from 'react'
import Navbar from '../Navbar/Navbar'

const View = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <Navbar/>
      <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
                    <thead>
                      <tr>
                      <th scope="col">SL.NO</th>
                        <th scope="col">Subscriber Name</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Pincode</th>
                        <th scope="col">District</th>
                        <th scope="col">Village Office</th>
                        <th scope="col">Email id</th>
                      </tr>
                    </thead>
                    <tbody style={{backgroundColor:'black'}}>
                      <tr>
                        <th scope="row">1</th>
                        <td>John Smith</td>
                        <td>123-456-7890</td>
                        <td>ABC</td>
                        <td>ABC123</td>
                        <td>Alappuzha</td>
                        <td>AlVO</td>
                        <td>jo@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Emily Johnson</td>
                        <td>987-654-3210</td>
                        <td>BCD</td>
                        <td>BCD123</td>
                        <td>Pathanamthitta</td>
                        <td>PaVO</td>
                        <td>em@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Michael Brown</td>
                        <td>456-789-0123</td>
                        <td>CDE</td>
                        <td>CDE123</td>
                        <td>Idukki</td>
                        <td>IdVO</td>
                        <td>mi@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Sarah Lee</td>
                        <td>321-654-0987</td>
                        <td>DEF</td>
                        <td>DEF123</td>
                        <td>Kochi</td>
                        <td>KoVO</td>
                        <td>sa@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>David Nguyen</td>
                        <td>789-012-3456</td>
                        <td>EFG</td>
                        <td>EFG123</td>
                        <td>Thiruvananthapuram</td>
                        <td>ThVO</td>
                        <td>da@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>Jennifer Wu</td>
                        <td>654-321-9870</td>
                        <td>FGH</td>
                        <td>FGH123</td>
                        <td>Palakkad</td>
                        <td>PaVO</td>
                        <td>je@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>Alex Chen</td>
                        <td>012-345-6789</td>
                        <td>GHI</td>
                        <td>GHI123</td>
                        <td>Kottayam</td>
                        <td>KoVO</td>
                        <td>al@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>Lisa Kim</td>
                        <td>234-567-8901</td>
                        <td>HIJ</td>
                        <td>HIJ123</td>
                        <td>Kannur</td>
                        <td>KaVO</td>
                        <td>li@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>Alisa Kaur</td>
                        <td>234-567-8901</td>
                        <td>IJK</td>
                        <td>IJK123</td>
                        <td>Alappuzha</td>
                        <td>AlaVO</td>
                        <td>al@gmail.com</td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>Pakhi Singh</td>
                        <td>234-567-8901</td>
                        <td>JKL</td>
                        <td>JKL123</td>
                        <td>Kozhikode</td>
                        <td>KoVO</td>
                        <td>pak@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default View
