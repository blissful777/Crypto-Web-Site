import React, { Component } from 'react';
import '../nav/Nav.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Logo from '../icons/CRYPTON.png';

export default class Nav extends Component {
    state={
        openModal : false,
        openSignUpModal: false,
        password: '',
        checkPassword: '',
    }

    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
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


    render() {
        
        return (
            <div className='main_nav'>
              <img className='logo' src={Logo} alt={Logo}></img>
                <div className='info'>
                <ul>
                    <li><a href='/'>Главная страница</a></li>
                    <li><a href='https://quote.rbc.ru/?utm_source=topline' target='_blank' rel="noreferrer">Новости</a></li>
                    <li><a href='/pay'>Купить криптовалюту</a></li>
                    <li><a href='/trade'>Торговля</a></li>
                    <li><a href='/earn'>Обучение</a></li>
                    <li><a href='/help'>Служба поддержки</a></li>
                    <li><a href='/nft'>NFT</a></li>
                </ul>  
                </div>
                <div className='sign_up'>
                <ul>
                <li><a href='sign_in' onClick={this.onClickButton}>Войти</a></li>
                <li><a href='sign_up' className='sign' onClick={this.openSignUpModal}>Регистрация</a></li>
                </ul>

                <Modal open={this.state.openModal} onClose={this.onCloseModal} classNames='modal'>
      <div className="modal-header">
        <h5 className="modal-title">Вход в аккаунт</h5>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label className="col-form-label">Введите логин:</label>
            <input type="text" className="form-control"></input>
          </div>
          <div class="mb-3">
            <label type='text' className="col-form-label">Введите пароль:</label>
            <input type="password" className="form-control"></input>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={this.onCloseModal}>Закрыть</button>
        <button type="button" className="btn btn-dark" onClick={this.onCloseModal}>Войти</button>
      </div>
                </Modal>   
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
            value={this.state.password} 
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
            
                </div>
                     
        )
    }
}


