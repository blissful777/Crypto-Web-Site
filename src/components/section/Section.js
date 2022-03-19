import React,{Component} from "react";
import '../section/Section.css';

export default class Section extends Component {
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
        usdtPrice: Number,
        shibName: '',
        shibPrice: Number,
        shibChange: Number,
        usdPrice: Number,
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
              usdPrice: json.Valute.USD.Value,
      });           
      console.log(json);  
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
      }

          getDataTable = () => {  
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
          usdPrice: json.data.coins[2].price,
          shibName: json.data.coins[14].symbol,
          shibPrice: json.data.coins[14].price,
          shibChange: json.data.coins[14].change,
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
            this.getDataTable()
            this.getUsdValue()
          }

          
    render() {
        const {btcName, btcPrice, btcChange, ethName, ethPrice, ethChange, xrpName, xrpPrice, xrpChange, bnbName, bnbPrice, bnbChange,usdPrice, shibName,shibPrice,shibChange} = this.state;
     return(
<div className="section__main">
<div className="section__article">
<h2 className="section__name">Популярные криптовалюты:</h2>
<table className="section__table">
<thead>
    <tr>
      <th>Имя</th>
      <th>Цена на данный момент</th>
      <th>Изменение за 24ч</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td title='Bitcoin' style={{color: 'grey'}}>{btcName}</td>
      <td style={{color: 'grey'}}>{Math.round(btcPrice*usdPrice)}&nbsp;руб</td>
      <td className="section__table_cryptoChange" style={{color: this.state.btcChange > 0 ? 'rgb(0, 90, 0)' : 'rgb(170, 5, 5)' }}>{btcChange}&nbsp;%</td>
    </tr>
    <tr>
      <td title='Ethereum' style={{color: 'grey'}}>{ethName}</td>
      <td style={{color: 'grey'}}>{Math.round(ethPrice*usdPrice)}&nbsp;руб</td>
      <td className="section__table_cryptoChange" style={{color: this.state.ethChange > 0 ? 'rgb(0, 90, 0)' : 'rgb(170, 5, 5)' }}>{ethChange}&nbsp;%</td>
    </tr>
    <tr>
      <td title='Ripple' style={{color: 'grey'}}>{xrpName}</td>
      <td style={{color: 'grey'}}>{Math.round(xrpPrice*usdPrice)}&nbsp;руб</td>
      <td className="section__table_cryptoChange" style={{color: this.state.xrpChange > 0 ? 'rgb(0, 90, 0)' : 'rgb(170, 5, 5)' }}>{xrpChange}&nbsp;%</td>
    </tr>
    <tr>
      <td title='Binance Coin' style={{color: 'grey'}}>{bnbName}</td>
      <td style={{color: 'grey'}}>{Math.round(bnbPrice*usdPrice)}&nbsp;руб</td>
      <td className="section__table_cryptoChange" style={{color: this.state.bnbChange > 0 ? 'rgb(0, 90, 0)' : 'rgb(170, 5, 5)' }}>{bnbChange}&nbsp;%</td>
    </tr>
    <tr>
      <td title='Shiba inu' style={{color: 'grey'}}>{shibName}</td>
      <td style={{color: 'grey'}}>{(shibPrice)}&nbsp;руб</td>
      <td className="section__table_cryptoChange" style={{color: this.state.shibChange > 0 ? 'rgb(0, 90, 0)' : 'rgb(170, 5, 5)' }}>{shibChange}&nbsp;%</td>
    </tr>
  </tbody>
</table>
</div>
</div>
    )
     }
}