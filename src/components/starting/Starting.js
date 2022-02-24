import React, { Component } from 'react'
import '../starting/Starting.css';
import profil from '../icons/profil.png';
import verification from '../icons/verification.png';
import cash from '../icons/cash.png';
import trade from '../icons/trade.png';

export default class Starting extends Component {
  render() {
    return (
      <div className='starting'>

          <h3 className='starting__text'>Легко начать</h3>

          <div className='starting__block'>
              
           <div className='starting__block_easy'>
            <div className='starting__block_icon'>
            <img 
                className='icon_photo'
                src={profil}
                alt='profil'
                />
            </div>
            <p className='starting__block_text'>Создайте аккаунт</p>
           </div>

           <div className='starting__block_easy'>
            <div className='starting__block_icon'>
            <img 
                className='icon_photo'
                src={verification}
                alt='verification'
                />
            </div>
            <p className='starting__block_text'>Пройдите верификацию</p>
          </div>

          <div className='starting__block_easy'>
            <div className='starting__block_icon'>
            <img 
                className='icon_photo'
                src={cash}
                alt='cash'
                />
            </div>
            <p className='starting__block_text'>Пополните баланс</p>
          </div>

          <div className='starting__block_easy'>
            <div className='starting__block_icon'>
            <img 
                className='icon_photo'
                src={trade}
                alt='trade'
                />
            </div>
            <p className='starting__block_text'>Начните инвестировать</p>
          </div>

          </div>
          
      </div>
    )
  }
}
