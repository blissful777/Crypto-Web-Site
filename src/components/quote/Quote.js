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
      usdtName: '',
      usdtPrice: Number,
      usdtChange: Number,
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
        xrpName: json.data.coins[8].symbol,
        xrpPrice: json.data.coins[8].price,
        xrpChange: json.data.coins[8].change,
        bnbName: json.data.coins[3].symbol,
        bnbPrice: json.data.coins[3].price,
        bnbChange: json.data.coins[3].change,
        usdtName: json.data.coins[2].symbol,
        usdtPrice: json.data.coins[2].price,
        usdtChange: json.data.coins[2].change,
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

    render(){
const {btcName, btcPrice, btcChange, ethName, ethPrice, ethChange, xrpName, xrpPrice, xrpChange, bnbName, bnbPrice, bnbChange, usdtName, usdtPrice, usdtChange} = this.state;

        return(
            <div className='quote'>            
<div className='quote_block'>
<h2>{btcName}/USD</h2>
<h2 style={{color: this.state.btcChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{btcChange}&nbsp;%</h2>
<h2 >{Math.floor(btcPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(btcPrice*75)}</p>
</div>
<div className='quote_block'>
<h2>{ethName}/USD</h2>
<h2 style={{color: this.state.ethChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{ethChange}&nbsp;%</h2>
<h2>{Math.round(ethPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(ethPrice*75)}</p>
</div>
<div className='quote_block'>
<h2>{xrpName}/USD</h2>
<h2 style={{color: this.state.xrpChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{xrpChange}&nbsp;%</h2>
<h2>{Math.round(xrpPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(xrpPrice*75)}</p>
</div>
<div className='quote_block'>
<h2>{bnbName}/USD</h2>
<h2 style={{color: this.state.bnbChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{bnbChange}&nbsp;%</h2>
<h2>{Math.round(bnbPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(bnbPrice*75)}</p>
</div>
<div className='quote_block'>
<h2>{usdtName}/USD</h2>
<h2 style={{color: this.state.usdtChange > 0 ? 'rgb(0, 109, 0)' : 'rgb(170, 5, 5)' }}>{usdtChange}&nbsp;%</h2>
<h2>{Math.round(usdtPrice * 100)/100}$</h2>
<p>Цена в рублях:&nbsp;{Math.round(usdtPrice*75)}</p>
</div>
            </div>
        )
    }
}
