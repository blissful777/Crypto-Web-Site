import React, { Component } from 'react';
import '../pay/Pay.css'
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

export default class Pay extends Component {
  state ={
    btcName: '',
    btcPrice: Number,
    ethName: '',
    ethPrice: Number,
    xrpName: '',
    xrpPrice: Number,
    bnbName: '',
    bnbPrice: Number,
    usdtName: '',
    usdtPrice: Number,
    quantity: '',
    finalCurrency: '',
  }

  checkQuantity = (e) => {
    this.setState({ quantity: e.target.value })  
    console.log(this.state.quantity) 
}

getSum = () => {
  this.setState({finalCurrency : this.state.quantity * Math.floor(this.state.btcPrice * 100)/100})
  
}

     getData = () => {  
          let baseUrl = "https://api.coinranking.com/v2/coins";
          let proxyUrl = "https://cors-anywhere.herokuapp.com/";
          let apiKey = "coinrankinge3e565e0c1e5564d60f21d41a755edfb18060009055b6eb8";
          fetch(`${proxyUrl}${baseUrl}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'X-My-Custom-Header': `${apiKey}`,
                'Access-Control-Allow-Origin': "*"
              }          
  })
  .then((response) => {
      if (response.ok) {
        response.json()
  .then((json) => {
    this.setState({
      btcName: json.data.coins[0].symbol,
      btcPrice: json.data.coins[0].price,
      ethName: json.data.coins[1].symbol,
      ethPrice: json.data.coins[1].price,
      xrpName: json.data.coins[8].symbol,
      xrpPrice: json.data.coins[8].price,
      bnbName: json.data.coins[3].symbol,
      bnbPrice: json.data.coins[3].price,
      usdtPrice: json.data.coins[2].price,
    });
          console.log(json.data);               
        });
      }
    })
    .catch((error) => {
      alert(error);
    });
      }
        
      componentDidMount(){
        this.getData()
      }

  render() {
    const {btcName, btcPrice, ethName, ethPrice, xrpName, xrpPrice, bnbName, bnbPrice, usdtPrice} = this.state;
    return (
      <div>
      <Nav />
      <div className='pay'>
<div className="pay-header">
        <h5 className="pay-header-title">1. Выберите валюту</h5>
      </div>
      <div className="pay-body">
        <form>
          <div className="pay-body-current">
            <label className="">Валюта ввода*</label>
            <div className='pay-body-crypto'>
            <select className='pay-list'>
             <option >{btcName}</option>
             <option >{ethName}</option> 
             <option >{xrpName}</option>
             <option >{bnbName}</option>
            </select>
            <input 
            type='number' 
            className="pay-price"
            placeholder={Math.floor(btcPrice * 100)/100}>
            </input>
            </div>
            <p className='pay-info'>*стоимоть рассчитывается в долларах</p>
          </div>
          <div className="pay-body-current">
            <label className="">Количество</label>
            <input 
            type='number'
            value={this.state.quantity} 
            onChange={this.checkQuantity}
            className="pay-stack">
            </input>
          </div>
          <div className="pay-body-current">
            <label className="">Итого к оплате</label>
            <input 
            type="number" 
            className="pay-end"
            value={this.state.finalCurrency}
            ></input>
            <button type='button' onClick={this.getSum} className='pay-sum'>Рассчитать стоимость</button>
          </div>
          <div class="pay-body-current">
            <label type='text' className="">Способ оплаты</label>
            <button className='pay-button' disabled="disabled">Рекомендуемые</button>
          </div>
          <div className='pay-body-info'>
<input type='checkbox' className='pay-checkbox-one'></input>
<p>Банковские карты (Visa/MasterCard)
  <br/>
  <span className='pay-com'>Комиссия 1.6%</span>
</p>

<input type='checkbox' className='pay-checkbox-two'></input>
<p>Apple Pay</p>
          </div>
        </form>
        <div className="pay-footer">
        <button type="button" className="btn-footer">Ввод криптовалюты</button>
      </div>
      </div>
      </div>
      <Footer />
      </div>
    )
  }
}
