import React, { Component } from 'react';
import UserFormDetails from './UserFormDetails';
import UserCreditDetails from './UserCreditDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

    // Kullanıcı bilgilerini burada tutmayı tercih ettim, bu şekilde ileri-geri yapıldığında bilgiler kaybolmuyor
    state = {
        step: 1,
        firstName: '',
        firstNameError: '',
        lastName: '',
        lastNameError: '',
        idendityNumber: '',
        idendityNumberError: '',
        homeValue: '',
        homeValueError: '',
        creditValue: '',
        creditValueError: '',
        totalDue: '',
        totalDueError: ''
    }
    

    // Form kontrol fonksiyoları

    validate = () => {
    let isError = false;
    const errors = {
        firstNameError: '',
        lastNameError: '',
        idendityNumberError: '',
        homeValueError: '',
        creditValueError: '',
        totalDueError: ''
    };

    // Evin değeri, kredi değeri ve vade alanı boş olduğunda hata verme fonksiyonlarını kaldırmak zorunda kaldım.
    // Sayfaları donduruyor ve stabil çalışmıyordu. 
        if(this.state.firstName.length < 2) {
            isError = true;
            errors.firstNameError = 'Ad alanında en az 2 harf bulunmalı!';
        }
        if(this.state.firstName.length > 10) {
            isError = true;
            errors.firstNameError = 'Ad alanında en fazla 10 harf bulunmalı!';
        }
        if(!this.state.firstName) {
            isError = true;
            errors.firstNameError = 'Ad alanı boş bırakılamaz!';
        }
        if(this.state.lastName.length < 2) {
            isError = true;
            errors.lastNameError = 'Soyad alanında en az 2 harf bulunmalı!';
        }
        if(this.state.lastName.length > 10) {
            isError = true;
            errors.lastNameError = 'Soyad alanında en fazla 10 harf bulunmalı!';
        }
        if(!this.state.lastName) {
            isError = true;
            errors.lastNameError = 'Soyad alanı boş bırakılamaz!';
        }
        if(this.state.idendityNumber.length < 11) {
            isError = true;
            errors.idendityNumberError = 'Kimlik numarası 11 haneden küçük olmamalı!';
        }
        if(this.state.idendityNumber.length > 11) {
            isError = true;
            errors.idendityNumberError = 'Kimlik numarası 11 haneden büyük olmamalı!';
        }
        if(this.state.homeValue.length > 7) {
            isError = true;
            errors.homeValueError = 'Evinizin değeri en fazla 1.000.000 TL olabilir!'
        }
        if(this.state.creditValue.length > 7) {
            isError = true;
            errors.homeValueError = 'Kredi değeri en fazla 1.000.000 TL olabilir!'
        }
        if(this.state.homeValue.length < this.state.creditValue.length) {
            isError = true;
            errors.homeValueError = 'Verilecek kredi evinizin değerinden yüksek olamaz!'
        }

        
        this.setState({
            ...this.state,
            ...errors
        })
        
        return isError;
    }

    // Kullanıcının form kontrolünü yaptığımız ve bir sonraki sayfaya gitmesini sağlayan fonksiyon
    nextStep = () => {
        const { step } = this.state;
        // Formu burada kontrol ediyoruz
        const err = this.validate();
        if (!err) {
            this.setState({
        // Formda hatalı yazım olduktan sonra doğru şekilde yazılsa bile hata gitmiyordu. Bunun için step harici olan stateleri de ekledim.
                step: step + 1,
                firstNameError: '',
                lastNameError: '',
                idendityNumberError: '',
                homeValueError: '',
                creditValueError: '',
                totalDueError: ''
            });
        } 
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
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            idendityNumber: '',
            idendityNumberError: '',
            homeValue: '',
            homeValueError: '',
            creditValue: '',
            creditValueError: '',
            totalDue: '',
        })
    }

    // Kullanıcının girdiği değeri kolonlara yansıtacak fonksiyon
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }
    render() {
        const { step } = this.state;
        const { firstName, firstNameError, lastName, lastNameError, idendityNumber, idendityNumberError, homeValue, homeValueError, creditValue, creditValueError, totalDue} = this.state;
        const values = { firstName, firstNameError, lastName, lastNameError, idendityNumber, idendityNumberError, homeValue, homeValueError, creditValue, creditValueError, totalDue}
        
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
             return <Success resetStep={this.resetStep} />
                
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
