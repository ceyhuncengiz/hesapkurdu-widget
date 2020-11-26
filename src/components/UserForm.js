import React, { Component } from 'react';
import UserFormDetails from './UserFormDetails';
import UserCreditDetails from './UserCreditDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    // Kullanıcı bilgilerini burada tutmayı tercih ettim, bu şekilde ileri-geri yaptığında bilgiler kaybolmuyor
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        idendityNumber: '',
        homeValue: '',
        creditValue: '',
        totalDue: ''
    }

    // Kullanıcının bir sonraki sayfaya gitmesini sağlayan fonksiyon
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    // Kullanıcının bir önceki sayfaya gitmesini sağlayan fonksiyon
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Kullanıcının yeni kredi talebinde bulunması için en başa dönmesini sağlayan fonksiyon
    resetStep = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            idendityNumber: '',
            homeValue: '',
            creditValue: '',
            totalDue: ''
        })
    }

    // Kullanıcının girdiği değeri kolonlara yansıtacak fonksiyon
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }
    render() {
        const { step } = this.state;
        const { firstName, lastName, idendityNumber, homeValue, creditValue, totalDue} = this.state;
        const values = { firstName, lastName, idendityNumber, homeValue, creditValue, totalDue}
        
        switch(step) {
    // Kullanıcının Ad, Soyad, TC Numarası girdiği bölüm
            case 1: 
             return (
                 <UserFormDetails 
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                 />
             )
    // Kullanıcının Evin değerini, İstediği Krediyi ve Vadesini seçtiği bölüm
            case 2:
             return (
                <UserCreditDetails 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                )
    // Kullanıcının girdiği bilgileri kontrol edebileceği bölüm
            case 3: 
            return (
                <Confirm 
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    values={values}
                />
                )
    // Kullanıcının kredi onayını verip, geri bildirim aldığı bölüm
            case 4:
             return <Success 
                      resetStep={this.resetStep}
                    />
        
          default: 
            return (
                <UserFormDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
        )
        }
    }
}

export default UserForm
