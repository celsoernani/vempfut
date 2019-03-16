import React, { Component } from 'react';
import { Image,ScrollView, View} from 'react-native';
import { Container, Header,Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right,Icon } from 'native-base';


export default class Friends extends Component {
  render() {
    return (
      <View style = {{flex: 1}}>
      
      <Container>
      <View>
        <Header style={{backgroundColor:'#fafafa'}} androidStatusBarColor={"transparent"}>
                        <Left>
                            <Text style={{color:'rgba(0, 0, 0, 0.85)',opacity:0.85,fontSize:15,paddingTop:20}}>Eventos</Text>
                        </Left>
                        <Right>
                            <Icon style={{paddingTop:20}} name={"calendar"} size={25}/>
                        </Right>
                    </Header>
        </View>
        <View>
        <ScrollView>
        <Content>
          <ScrollView></ScrollView>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://terceirotempo.bol.uol.com.br/imagens/60/50/qfl_fto_16050.jpg'}} />
                <Body>
                  <Text>Aloísio Chulapa</Text>
                  <Text note>Chula</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://praiacentro.com.br/wp-content/uploads/2016/05/o-que-fazer-em-fortaleza-arena-castelao-praia-centro-hotel.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Curtidas</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comentários</Text>
                </Button>
              </Body>
              <Right>
                <Text>1h atrás</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://ep01.epimg.net/brasil/imagenes/2018/06/21/deportes/1529609615_630867_1529609753_noticia_normal.jpg'}} />
                <Body>
                  <Text>Neymar Júnior</Text>
                  <Text note>Ney</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://images.performgroup.com/di/library/goal_de/fb/3b/parc-des-princes-15042016_1ej8ys16fbqxn1rllbps8mvxtj.jpg?t=83077175&w=620&h=430'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>70 Curtidas</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>44 Comentários</Text>
                </Button>
              </Body>
              <Right>
                <Text>2h atrás</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        </ScrollView>
        </View>
      </Container>
      </View>

      
    );
  }
}