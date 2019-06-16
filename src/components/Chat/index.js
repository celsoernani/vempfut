 
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   StatusBar  
 } from 'react-native';
 import {Header,Left,Right} from 'native-base';
 import Voice from 'react-native-voice';
 import { GiftedChat,Send } from 'react-native-gifted-chat'
 import Icon from 'react-native-vector-icons/FontAwesome'

 

export default class Chat extends Component {
 
   constructor(props) {
   
     super(props)
     this.state = {messages: [], textoStatus: '' ,texto:''}
   
     Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
     Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
     Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
     navigationHome = this.navigationHome.bind(this)
     navigationPerfil = this.navigationPerfil.bind(this)
     navigationSearch = this.navigationSearch.bind(this)
     navigationFriend = this.navigationFriend.bind(this)
     
   }
 
   
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Procura um jogo ai vai ! (Prototipo do app Vem p Fut)',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://pbs.twimg.com/media/Dn83uJYWsAA5S0u.jpg',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
    onSpeechResultsHandler(result){
         this.setState({
             ...this.state,
             texto:result.value[0]
         });
         console.log(this.state.texto)

         switch (this.state.texto) {
          case 'evento':
            console.log('evento')
            this.navigationHome()
            break;
          case 'Oi':
            console.log("Oi")
            break;
          case 'perfil':
              this.navigationPerfil()
              break;
          case 'jogo':
            console.log('Tela de procura jogos');
            this.navigationSearch()
            break;
          case 'amigos':
            console.log('tela amigo');
            this.navigationFriend()
            break;  
          }
    }    
   
   onSpeechStartHandler(){
     this.setState({
         ...this.state,
         textoStatus:'iniciou'
     });    
   }    
   
   onSpeechEndHandler(){
     this.setState({
         ...this.state,
         textoStatus:'parou'
     });    

   }
     
   onStartButtonPress(e){
     Voice.start('pt-BR');
   }  
  navigationHome(){
    this.props.navigation.navigate("Home");
  }  
  navigationPerfil(){
    this.props.navigation.navigate("Perfil");
  }  
  navigationSearch(){
    this.props.navigation.navigate("Search");
  }  
    navigationFriend(){
    this.props.navigation.navigate("Events");
  }  

   onStopButtonPress(e){
     Voice.stop();
   }    
 
   render() {
     return (
    <View style={styles.container}>
      <View style = {{flexDirection: 'row'}}>
         <TouchableHighlight
          style={styles.button}
          onPress={this.onStartButtonPress}
        >
            <Icon name= 'microphone' size= {50} style = {{margin: 20}}/>  
         </TouchableHighlight>
          <TouchableHighlight
          style={styles.button}
          onPress={this.onStopButtonPress}
        >
             <Icon name= 'square' size= {50} style = {{margin: 20}} />  
         </TouchableHighlight>
         </View>
         <Text style = {styles.title}>
          Status {this.state.textoStatus}
         </Text>
         <Text>
           {this.state.texto == "Oi" ? "Oi, como vai você ? Estou aqui para lhe ajudar." : this.state.texto }
         </Text>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   title: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    color: 'rgba(0, 0, 0, 0.55)',
    fontSize: 18,
    textAlign: 'left',
    opacity:0.70
},
 });
 