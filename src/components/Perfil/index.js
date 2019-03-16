import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import {Body,CardItem, Container,Content,Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Perfil extends Component {


    render() {

        return (
            <View style = {{flex: 1}}>
            <View style={styles.container}>
                <Image  style = {styles.avatar} source={require('./icon.jpg')} />
                <Text style={{ color: 'black',
                     fontSize: 20,
                        fontFamily: "Roboto",
            }}>Ronaldinho Gaúcho</Text>
            </View>
        <Container>
        <Content padder>
        
          <Card>
          <CardItem>
          <Text style={{ color: 'black',
                     fontSize: 15,
                        fontFamily: "Roboto",
            }}> O BRUXO </Text>
            </CardItem>
          <CardItem>
          <Text style={{ color: 'black',
                     fontSize: 15,
                        fontFamily: "Roboto",
            }}> bruxo_vempfut@gmail.com </Text>
            </CardItem>
            
            <CardItem>
              <Body>
                <Text>
                Ronaldo de Assis Moreira, mais conhecido como Ronaldinho Gaúcho ou simplesmente Ronaldinho, é um ex-futebolista brasileiro que atuava como meia. Atualmente, é embaixador do Barcelona. Uma de suas marcas registradas é o aspecto dentuço, seus dribles fantásticos e usar uma faixa na cabeça após adotar os cabelos longos.
                </Text>
              </Body>
            </CardItem>

            <Button title="Sair">
            </Button>

          </Card>
        </Content>
      </Container>  
      </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
})
