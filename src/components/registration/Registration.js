import React, { Component } from 'react';
import '../registration/Registration.css'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

export default class Registration extends Component {
    state={
        openSignUpModal : true,
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

    onClickRegister = () =>{
      this.setState({openModal : false})
      this.setState({openSignUpModal : false})
      alert('Ваш аккаунт успешно создан')
  }
  render() {
    return (
      <div>
          <Nav />
          <Modal onClose={this.onCloseModal} classNames='modal'>
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
            <input type="password" className="form-control"></input>
          </div>
          <div className="mb-3">
            <label type='text' className="col-form-label">Введите пароль еще раз:</label>
            <input type="password" className="form-control"></input>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={this.onCloseModal}>Закрыть</button>
        <button type="button" className="btn btn-dark" onClick={this.onClickRegister}>Зарегистрироваться</button>
      </div>
                </Modal>   
                <Footer />
                </div>
    )
  }
}
