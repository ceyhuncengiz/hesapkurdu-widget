import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';



export class Confirm extends Component {
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
// Aynı şekilde values state değişkenlerimizi props olarak tanımlayıp burada kullanabiliyoruz.
        const {values: {firstName, lastName, idendityNumber, homeValue, creditValue, totalDue}} = this.props
        return (
            <MuiThemeProvider>
             <React.Fragment>
              <AppBar title='Bilgilerinizi Onaylayın' />
               <List>
                <ListItem
                 primaryText='Ad'
                 secondaryText={ firstName }
                />
                <ListItem
                 primaryText='Soyad'
                 secondaryText={ lastName }
                />
                <ListItem
                 primaryText='T.C Kimlik No'
                 secondaryText={ idendityNumber }
                />
                <ListItem
                 primaryText='Evinizin Değeri'
                 secondaryText={ homeValue }
                />
                <ListItem
                 primaryText='Kredi Tutarı'
                 secondaryText={ creditValue }
                />
                <ListItem
                 primaryText='Vade'
                 secondaryText={ totalDue }
                />
               </List>
              <br/>
              <RaisedButton 
               label='Geri'
               primary={false}
               style={styles.button}
               onClick={this.back}
              /> 
              <RaisedButton 
               label='Onayla'
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

export default Confirm;
