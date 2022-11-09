import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import {Home} from './src/screens/Home'; //import using export function

export default function App(){
  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor= '#121015' //"transparent"
        //translucent
        />
      <Home/>
    </>
  );
}

//JSX deve retornar apenas um elemento. Caso tenha mais de um
// no nível mais externo (parent), pode-se usar o componente
// Fragment, ou a tag vazia <> ... </>