import React, { Component } from 'react';
import '../main/Main.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import icon from '../icons/figa.png';

export default class Main extends Component{
    state={
        openSignUpModal: false,
          password: '',
          checkPassword: '',
    } 
    onCloseModal = ()=>{
        this.setState({openModal : false})
        this.setState({openSignUpModal : false})
    }

    openSignUpModal = e => {
        e.preventDefault()
        this.setState({openSignUpModal : true})
    }

    checkPassOne = (e) => {
      this.setState({ password: e.target.value })    
  }
  
  checkPassTwo = (e) => {
    this.setState({ checkPassword: e.target.value })    
  }

    onClickRegister = () =>{
      if(this.state.password === this.state.checkPassword) {
        alert('Ваш аккаунт успешно создан')
        this.setState({openSignUpModal : false})
      }else(
        alert('Пароль или логин не совпадают')
        
      )
  }

render(){
    return(
        <div className='main_section'>
          <div className='main_section_infoplace'>
          <h1 className='info_place'>Покупайте и продавайте <br></br> криптовалюту за считанные <br></br> минуты</h1>
<h2>Инвестируйте в популярные токенизированные акции, индексы, сырьевые товары и валюты. Расширенная поддержка с подробными руководствами по инвестициям и ежедневными новостями рынка.</h2>
<button className='reg_but' onClick={this.openSignUpModal}>Начать сейчас</button>
          </div>
          <div className='img_eth'>
            <img
            className='eth' 
            src={icon}
            alt='eth'
            />
          </div>

 <Modal open={this.state.openSignUpModal} onClose={this.onCloseModal} classNames='modal'>
      <div className="modal-header">
        <h5 className="modal-title">Создание аккаунта</h5>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="col-form-label">Введите логин:</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label type='text' className="col-form-label">Введите пароль:</label>
            <input 
            type='password'
            value={this.state.pass_one} 
            onChange={this.checkPassOne}
            placeholder='Введите пароль...'
            className="form-control">
            </input>
          </div>
          <div className="mb-3">
            <label type='text' className="col-form-label">Введите пароль еще раз:</label>
            <input 
            type='password'
            value={this.state.pass_two} 
            onChange={this.checkPassTwo}
            placeholder='Введите пароль еще раз...'
            className="form-control">
            </input>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={this.onCloseModal}>Закрыть</button>
        <button type="button" className="btn btn-dark" onClick={this.onClickRegister}>Зарегистрироваться</button>
      </div>
                </Modal>   
                
        </div>
    )
}
}