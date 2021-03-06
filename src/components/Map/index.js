import React,{Component, Fragment} from 'react';
import MapView,{Marker}from 'react-native-maps';
import Search from "../Search"
import Directions from "../Directions"

import { getPixelSize } from "../../utils";
import markerImage from "../../assets/marker.png"

import { View, Alert} from 'react-native'



export default class Map extends Component {

  state = {
    region: null,
    destination: null,
  };
   

  async componentDidMount (){
    navigator.geolocation.getCurrentPosition(
        ({coords: {latitude, longitude}}) => {
          this.setState({
              region: {
                latitude,
                longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134
              }

          });
        },
        () => {}, {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,


        }
    )

  }
  handleLocationSelected = (data, {geometry}) => {
    const {
        location: {
          lat: latitude,
          lng: longitude
        }
    } = geometry;
      this.setState({
        destination: {
          latitude,
          longitude,
          title: data.structured_formatting.main_text,
        },
      });

  }
   render (){
     const {region , destination} = this.state;
     return (
   <View style={{flex: 1}}>
     <MapView
       style={{flex: 1}}
       region={region}
       showsUserLocation
       loadingEnabled
       ref = {el => (this.mapView = el)}
       >
        {destination  &&  (
          <Fragment>
          <Directions
            origin = {region}
            destination = {destination}
            onReady = {
              result => {
                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: getPixelSize(50),
                    left: getPixelSize(50),
                    top: getPixelSize(50),
                    bottom: getPixelSize(50)
                  }
                });
              }
          } />

          <Marker coordinate = {destination} anchor = {{x: 0 , y: 0}} image = {markerImage}/>
          </Fragment> 
        )} 
        </MapView>

     {destination ? (  Alert.alert('Parabéns',
                      'Você acaba de encontrar um evento no enderço solicitado',
                      [
                        {text: 'Vá pro Fut', onPress: () => console.log('Ask me later pressed')},
                        {
                          text: 'Não vou pro Fut',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
  ],
  {cancelable: false},) ) : (<Search onLocationSelected = {this.handleLocationSelected}/>)}

   </View>
);
    }
}


