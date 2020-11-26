import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class UserCreditDetails extends Component {
// Bu methodlar, props olarak alınan nextStep ve prevStep fonksiyonunu kullanmamızı sağlayacak.
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }
    render() {
// Aynı şekilde values değişkenlerimizi props olarak tanımlayıp burada kullanabiliyoruz.
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
             <React.Fragment>
              <AppBar title='Kredi Bilgileriniz' />
              <TextField
               type='number'
               hintText='Evinizin Değerini TL Olarak Girin'
               floatingLabelText='Evinizin Değeri'
               onChange={handleChange('homeValue')}
               defaultValue={values.homeValue}
              />
              <br/>
              <TextField
               type='number'
               hintText='İstediğiniz Kredi Tutarını Girin'
               floatingLabelText='Kredi Tutarı'
               onChange={handleChange('creditValue')}
               defaultValue={values.creditValue}
              />
              <br/>
              <TextField
               hintText='İstediğiniz Vade Aralığını Seçin'
               floatingLabelText='Vade'
               onChange={handleChange('totalDue')}
               defaultValue={values.totalDue}
              />
              <br/>
              <RaisedButton 
               label='Geri'
               primary={false}
               style={styles.button}
               onClick={this.back}
              /> 
              <RaisedButton 
               label='Devam'
               primary={true}
               style={styles.button}
               onClick={this.continue}
              />            
             </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


// Buttonun tarzı burada düzenlenebilir
const styles = {
    button: {
        margin: 15
    }
}

export default UserCreditDetails;
