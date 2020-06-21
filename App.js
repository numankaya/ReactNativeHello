import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Numan extends React.Component {
  render() {
    // function fonksiyon(x) {
    //   console.log(x);
    // }
    // const dizi = ['numan', 24, false, , 3.5];
    // const dizi1 = [];
    // dizi1.push('numan');
    // dizi1.push(12);
    // dizi.push('23');
    // dizi.push(23);

    // const j = {
    //   key1: 'numan',
    //   key2: 12,
    //   key3: false,
    // };

    // 5 > 10 ? console.log('olumsuz') : console.log('olumsuz');

    // let tmp = '',
    //   x = 0;

    // if (x) tmp = 'asds';
    // else tmp = 'ffdfd';

    // for (let i = 0; i < 10; fonksiyon((i += 3)));

    // for (let i = 0, t = 0; i < 20 && t < 10; console.log(i++ + '___' + t++));
    // return <Text>{x ? 'olumlu' : 'olumsuz'}</Text>;

    const boyut = 20;

    for (let i = 0; i < boyut; i++) {
      for (let j = 0; j <= i; j++) {
        console.log('*');
      }
      console.log('\n');
    }
  }
}

export default Numan;
