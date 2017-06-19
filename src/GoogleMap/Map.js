import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 55.408891,
  lng: 10.386469
};

const params = {v: '3.exp', key: 'AIzaSyC1oro6s4tSJ73Bga9m9oiZov7bgKrP094'};

export default class GoogleMap extends Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  onDragEnd(e) {
    console.log('onDragEnd', e);
  };

  onCloseClick() {
    console.log('onCloseClick');
  };

  onClick(e) {
    console.log('onClick', e);
  };

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={false}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Her bor seje Sara'}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
    );
  }

};
