import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class UserFormDetails extends Component {
// Bu method, props olarak alınan nextStep fonksiyonunu kullanmamızı sağlayacak.
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    }
    render() {
// Aynı şekilde values değişkenlerimizi props olarak tanımlayıp burada kullanabiliyoruz.
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
             <React.Fragment>
              <AppBar title='Hesapkurdu | Konut kredisi' />
              <TextField
               required
               hintText='Lütfen Adınızı Girin'
               floatingLabelText='Ad'
               onChange={handleChange('firstName')}
               defaultValue={values.firstName}
              />
              <br/>
              <TextField
               hintText='Lütfen Soyadınızı Girin'
               floatingLabelText='Soyad'
               onChange={handleChange('lastName')}
               defaultValue={values.lastName}
              />
              <br/>
              <TextField
               type='number'
               hintText='Lütfen T.C Kimlik Numaranızı Girin'
               floatingLabelText='T.C Kimlik No'
               onChange={handleChange('idendityNumber')}
               defaultValue={values.idendityNumber}
              />
              <br/>
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

export default UserFormDetails
