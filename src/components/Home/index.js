import React, { Component } from "react";
import { View, ScrollView, StatusBar, SafeAreaView, Text} from 'react-native';
import {Header,Left,Right,Thumbnail,Body,CardItem, Container,Content,Card} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import styles from './index.style';
import SliderEntry from './SliderEntry';




const games = [
    {
        title: 'Arena Castelão',
        subtitle: 'Venha pro Fut na Arena Castelão',
        illustration: 'https://i.ytimg.com/vi/X7ZhtWAapVM/hqdefault.jpg'
    },
    {
        title: 'Ifce',
        subtitle: 'Vem p fut no IFCE',
        illustration: 'https://1.bp.blogspot.com/-hxqaxSVFQOE/WQr2r5p_JZI/AAAAAAAAHiU/y9miDpocgBcnUc0C_DZ4qIrOT0wJf7axQCLcB/s1600/futfem05.jpg'
    },
    {
        title: 'Estádio Presidente Vargas',
        subtitle: 'Vem p fut no PV',
        illustration: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Presidente_Vargas_Stadium_%283%29.jpg/314px-Presidente_Vargas_Stadium_%283%29.jpg'
    },
];



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    componentWillMount(){
    
    }
    componentDidMount() {
       
    }
    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }


      render () {
        return (
            <SafeAreaView >
                <View  >
                    <StatusBar
                      translucent={true}
                      backgroundColor={'#fafafa'}
                      barStyle={'light-content'}
                    />
                    <Header style={{backgroundColor:'#fafafa'}} androidStatusBarColor={"transparent"}>
                        <Left>
                            <Text style={{color:'rgba(0, 0, 0, 0.85)',opacity:0.85,fontSize:15,paddingTop:20}}>Vem p Fut</Text>
                        </Left>
                        <Right>
                            <Icon style={{paddingTop:20}} name={"notifications-none"} size={25}/>
                        </Right>
                    </Header>
                    <View >
                    <CardItem>
                        <Left>
                        <Thumbnail source={{uri:'https://cdn2.iconfinder.com/data/icons/football-cups/512/Football_Soccer_Cup_Europe_South_America_Champions_league_cup_UEFA-512.png'}} />
                        <Body>
                            <Text>Boleiro mestre</Text>
                            <Text style={[{opacity:0.70}]}>{100} Pontos</Text>
                        </Body>
                        </Left>
                    </CardItem>
            </View>
                    <ScrollView
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >

                <Text style={styles.title}>Próximos jogos por perto!</Text>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={games}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  autoplay={true}
                  autoplayDelay={1000}
                  autoplayInterval={3000}
                />
        <Text style={styles.title}>Notícias no mundo da bola </Text>

        <Container>
        <Content padder>
          <Card>
          <CardItem>
            <Text style={{ color: 'black',
            fontSize: 15,
            fontFamily: "Roboto",
            }}>Novidades</Text>
            </CardItem>
            <CardItem button onPress={() => alert("Área para novidades, parecido com feed")}>
              <Body>
                <Text>
                O meia Celso Ernani ganhou baita moral na véspera da apresentação à seleção de racheiros do Ceará para os amistosos dos dias 23 e 26 de março, contra os racheiros dos Sem Nacional e Peia no Kanal, respectivamente. Neste sábado, foi dele o passe para o gol da vitória, na Arena Castelão.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("Botão para ler mais sobre a noticia")}>
              <Text style = {{color: 'blue'}}>Ler mais...</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
      <Container enableResetScrollToCoords = {true}>
        <Content padder>
          <Card>
          <CardItem>
            <Text style={{ color: 'black',
            fontSize: 15,
            fontFamily: "Roboto",
            }}>Novidades</Text>
            </CardItem>
            <CardItem button onPress={() => alert("Área para novidades, parecido com feed")}>
              <Body>
                <Text>
                Maior artilheiro da história dos Racha dos Campeões, Chicão fez três gols e o Só tapa venceu o Atlético Cearense, nesta quarta-feira (histórica), por 3 a 0. O So Tapa consegue a virada e se classifica para as quartas de final da Racha dos Campeões. O Atlético se limitou a se defender, não conseguiu ameaçar o adversário e saiu de campo sem chutar uma bola na direção do gol de Tafarel. Chicão7, por sua vez, chegou aos 124 gols na competição e teve mais uma noite brilhante no torneio.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("Botão para ler mais sobre a noticia")}>
              <Text style = {{color: 'blue'}}>Ler mais...</Text>
            </CardItem>
          </Card>
        </Content>
      </Container> 
                
                       
                    </ScrollView>
                </View>
            </SafeAreaView>
    );
  }
}
export default Home;