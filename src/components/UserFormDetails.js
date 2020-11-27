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
              <AppBar title='Konut kredisi' />
              <TextField
               hintText='Adınızı Girin'
               floatingLabelText='Ad'
               onChange={handleChange('firstName')}
               defaultValue={values.firstName}
               errorText={values.firstNameError}      
              />
              <br/>
              <TextField
               type='text'
               hintText='Soyadınızı Girin'
               floatingLabelText='Soyad'
               onChange={handleChange('lastName')}
               defaultValue={values.lastName}
               errorText={values.lastNameError}
              />
              <br/>
              <TextField
               type='number'
               hintText='T.C Kimlik Numaranızı Girin'
               floatingLabelText='T.C Kimlik No'
               onChange={handleChange('idendityNumber')}
               defaultValue={values.idendityNumber}
               errorText={values.idendityNumberError}
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
