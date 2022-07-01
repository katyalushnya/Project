import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Stylesheet from "./stylesheet";
import Shared from "./components/Sharing";
import getEnvVars from "./env";
import Lists from "./components/Lists";

//react-native-config
getEnvVars().then(vars => console.log(vars));

// build extended stylesheets with global variables
EStyleSheet.build({
  $fontColor: '#73b786',
  $bgColor: '#fff9df',
  $rem: 16,
});


export default class App extends Component {

  render() {
    return (
        //<Stylesheet/>
        //<Shared/>
        <Lists/>
    );
  }
}
