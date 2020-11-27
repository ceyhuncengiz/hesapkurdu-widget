import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Select, MenuItem, FormControl} from '@material-ui/core'



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
               floatingLabelText='Evinizin Değeri(TL)'
               onChange={handleChange('homeValue')}
               defaultValue={values.homeValue}
               errorText={values.homeValueError}
              />
              <br/>
              <TextField
               type='number'
               hintText='İstediğiniz Kredi Tutarını Girin'
               floatingLabelText='Kredi Tutarı(TL)'
               onChange={handleChange('creditValue')}
               defaultValue={values.creditValue}
               errorText={values.creditValueError}
              />
              <br/>
              <br/>
            <FormControl
                floatingLabelText='Vade'
                style={{ width: 256}}
            >
              <Select 
               hintText='İstediğiniz Vade Aralığını Seçin'
               floatingLabelText='Vade'
               onChange={handleChange('totalDue')}
               defaultValue={values.totalDue}
               displayEmpty
              >
              <MenuItem value="" disabled>Vade Seçin</MenuItem>
              <MenuItem value="12">12 Ay</MenuItem>
              <MenuItem value="18">18 Ay</MenuItem>
              <MenuItem value="24">24 Ay</MenuItem>
              <MenuItem value="36">36 Ay</MenuItem>
              <MenuItem value="48">48 Ay</MenuItem>
              <MenuItem value="72">72 Ay</MenuItem>
              <MenuItem value="90">90 Ay</MenuItem>
              <MenuItem value="108">108 Ay</MenuItem>
              <MenuItem value="120">120 Ay</MenuItem>
              </Select>
            </FormControl>
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
