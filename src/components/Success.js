import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


export class Success extends Component {
// Kullanıcının yeni kredi talebinde bulunması için en başa dönmesini sağlayan fonksiyon
    reset = e => {
        e.preventDefault();
        this.props.resetStep();
        }
        
    render() {
        return (
            <MuiThemeProvider>
             <React.Fragment>
              <AppBar title='Tebrikler!' />
              <h1>Talebiniz alınmıştır.</h1>
              <p>Başvurunuz onaylandığında sizinle iletişime geçeceğiz.</p>
              <br/>
              <RaisedButton 
               label='Yeni Kredi Talebi'
               primary={true}
               style={styles.button}
               onClick={this.reset}
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


export default Success;
