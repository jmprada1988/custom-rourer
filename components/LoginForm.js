import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'
import { Text } from 'react-native';
class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: null
     }
     componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyB_gLREWrnLksB2krpiN2Y63BeIyxkbV2o",
            authDomain: "fireauth-1f365.firebaseapp.com",
            databaseURL: "https://fireauth-1f365.firebaseio.com",
            projectId: "fireauth-1f365",
            storageBucket: "fireauth-1f365.appspot.com",
            messagingSenderId: "1028996654745",
            appId: "1:1028996654745:web:e895340d878ce0e3"
          });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    loggedIn: true
                })
            }else{
                this.setState({
                    loggedIn: false
                })
            }
        });
    }
     onButtonPress(){
         const { email, password } = this.state
         this.setState({
            error: '',
            loading: true
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginOk.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginOk.bind(this))
            .catch(this.onLoginFail.bind(this))
        })
     }
    onLoginOk(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail(){
        this.setState({
            error: 'Authentication failed...',
            loading: false
        })
    }


    renderButton(){
        if(this.state.loading){
            return <Spinner size="large"/>
        }
        return (
            <Button
            onPress={this.onButtonPress.bind(this)}
            >Login</Button>
        )
    }
    render() { 
        return ( 
            <Card>
                <CardSection>
                    <Input
                    secureTextEntry={false}
                    placeholder="your_email@mail.com"
                    label="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}/>
                </CardSection>
                <CardSection>
                    <Input
                    secureTextEntry
                    placeholder="yourPas$$23"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}/>
                </CardSection>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
         );
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LoginForm;