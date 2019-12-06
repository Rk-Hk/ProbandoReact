import React from 'react';
import './App.css';
import * as httpService from './utils/httpService'
import { endpoints } from './utils/constants.utils'
import HeaderComponent from './commons/components/header/header.component'

class App extends React.Component {
  state = {
    responseMessage : '',
    showAlert : false
  };

  constructor() {
    super()
  }

   fetchService = async () => {

    let body = JSON.stringify({
      "MerchantSalesID": "OP101013",
      "Amount": 20.00,
      "CurrencyCode": "PEN",
      "CountryPayment": "PER",
      "Creation": "2019-10-28 06:05:55",
      "TimeExpired": 60,
      "OkURL": "http://www.urlok.com",
      "ErrorURL": "http://www.urlerror.com",
      "Customer": {
        "FirstName": "EDDY ",
        "LastName": "YALICO",
        "Email": "eyalico@gmail.com",
        "DocNumber": "47053118",
        "DocType": "DNI",
        "CountryID": "PER"
      }
    })

    try{
      let response = await httpService.servicePost(body , endpoints.PAYMENT_ORDER ); 
      if(response.ERROR){
        this.setState({responseMessage : response.ERROR})
      }else{
        this.setState({responseMessage : JSON.stringify(response)})
      }

      console.log("ResponseService: ", response);
    }catch(err){
      console.log("ERROR2 : ", err);
      
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        
        <HeaderComponent></HeaderComponent>
        <div className='container'>
          <div className='row'>
            <div className='col-4 '>
              <div className='mt-5'>
              <button type="button" className="btn btn-dark" onClick={this.fetchService}>PAYMENT ORDER</button>
              </div>
            </div>
            <div className='col-8'>
              <div className='mt-5'>
              <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"> {this.state.responseMessage}</li>
              </ol>
            </nav>
              </div>
            
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
 