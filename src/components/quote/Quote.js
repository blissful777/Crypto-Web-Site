import React,{Component} from 'react';
import '../quote/Quote.css';

export default class Quote extends Component{
    state ={
      btcName: '',
      btcPrice: Number,
      btcChange: Number,
      ethName: '',
      ethPrice: Number,
      ethChange: Number,
      xrpName: '',
      xrpPrice: Number,
      xrpChange: Number,
      bnbName: '',
      bnbPrice: Number,
      bnbChange: Number,
      usdName: '',
      usdPrice: Number,
      usdChange: Number,
      usdPrevious: Number,
    }
    
getUsdValue = () =>{
  let currencyUrl = "https://www.cbr-xml-daily.ru/daily_json.js";
  let proxyUrl = "https://cors-anywhere.herokuapp.com/";
  fetch(`${proxyUrl}${currencyUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }          
})
.then((response) => {
  if (response.ok) {
    response.json()
.then((json) => {
this.setState({
        usdName: json.Valute.USD.CharCode,
        usdPrice: json.Valute.USD.Value,
        usdChange: json.Valute.USD.Value,
        usdPrevious: json.Valute.USD.Previous,
});           
console.log(json);  
    });
  }
})
.catch((error) => {
  alert(error);
});
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
        btcChange: json.data.coins[0].change,
        ethName: json.data.coins[1].symbol,
        ethPrice: json.data.coins[1].price,
        ethChange: json.data.coins[1].change,
        xrpName: json.data.coins[5].symbol,
        xrpPrice: json.data.coins[5].price,
        xrpChange: json.data.coins[5].change,
        bnbName: json.data.coins[3].symbol,
        bnbPrice: json.data.coins[3].price,
        bnbChange: json.data.coins[3].change,
      });
            console.log(json.data);    
            console.log(json);            
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
        }
          

        componentDidMount(){
          this.getData()
          this.getUsdValue()
        }

    render(){
const {btcName, btcPrice, btcChange, ethName, ethPrice, ethChange, xrpName, xrpPrice, xrpChange, bnbName, bnbPrice, bnbChange, usdName, usdPrice, usdChange,usdPrevious} = this.state;

        return(
            <div className='quote'>            
<div className='quote__block'>
<h2 title='Bitcoin'>{btcName}/USD</h2>
<h2 style={{color: this.state.btcChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{btcChange}&nbsp;%</h2>
<h2 >{Math.floor(btcPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(btcPrice*usdPrice)}</p>
</div>
<div className='quote__block'>
<h2 title='Ethereum'>{ethName}/USD</h2>
<h2 style={{color: this.state.ethChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{ethChange}&nbsp;%</h2>
<h2>{Math.round(ethPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(ethPrice*usdPrice)}</p>
</div>
<div className='quote__block'>
<h2 title='Ripple'>{xrpName}/USD</h2>
<h2 style={{color: this.state.xrpChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{xrpChange}&nbsp;%</h2>
<h2>{Math.round(xrpPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(xrpPrice*usdPrice)}</p>
</div>
<div className='quote__block'>
<h2 title='Binance Coin'>{bnbName}/USD</h2>
<h2 style={{color: this.state.bnbChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{bnbChange}&nbsp;%</h2>
<h2>{Math.round(bnbPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(bnbPrice*usdPrice)}</p>
</div>
<div className='quote__block'>
<h2 title='Dollar'>{usdName}</h2>
<h2 style={{color: this.state.usdChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{Math.round((usdChange - usdPrevious) / usdPrevious * 100)}&nbsp;%</h2>
<h2>{Math.round(usdPrice * 100)/100}</h2>
<p>Цена в рублях:&nbsp;{Math.round(usdPrice)}</p>
</div>
            </div>
        )
    }
}
