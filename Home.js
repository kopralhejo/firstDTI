import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <View style={{flex:1,}}>
      <View style={{flex: 1, backgroundColor: 'white',flexDirection:'column', justifyContent:'flex-end'}}>
        <View style={{paddingLeft:20}}>    
        <Text style={{fontSize:14,fontWeight:'400',color:'#484848'}}>Saldo anda :</Text>
        </View>
        <View style={{flexDirection:'row',paddingLeft:20,paddingBottom:7,}}>
        <Text style={styles.duid}>Rp.</Text>
        <Text style={styles.duid}>20.000</Text>
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: '#E5E5E5', paddingTop:20, alignItems:'center'}}>
          <View style={{width:'80%',backgroundColor:'#4982C1',height:82,borderRadius: 4,}}>
              <View style={{flex:1, alignItems:'center', flexDirection:'row',justifyContent:'space-between',paddingRight:23,paddingLeft:23}}>

              <View style={{backgroundColor:'white', width:48, height:48,borderRadius:4}}></View>
              <View style={{backgroundColor:'white', width:48, height:48,borderRadius:4}}></View>
              <View style={{backgroundColor:'white', width:48, height:48,borderRadius:4}}></View>
              </View>
          </View>
          <View style={{alignContent:'flex-start',alignItems:'flex-start',marginTop:37,width:'80%',marginBottom:8}}>
          <Text style={{fontWeight:'300', fontSize:14,}}>5 transaksi terakhir anda</Text>
          </View>
          <View style={{backgroundColor:'white', width:'80%', height:72,marginBottom:16}}>
              <Text>-></Text>
          </View>
          <View style={{backgroundColor:'white', width:'80%', height:72,marginBottom:16}}></View>
          <View style={{backgroundColor:'white', width:'80%', height:72,marginBottom:16}}></View>

      </View>

    </View>
  );
}

const Smallbox = () => {
    return(
        <View style={{flex:1}}>
        <View style={{backgroundColor:'white', width:48, height:48,borderRadius:4}}></View>
        <View style={{backgroundColor:'white', width:48, height:48,borderRadius:4}}></View>
        <View style={{backgroundColor:'white', width:48, height:48,borderRadius:4}}></View>
        <View style={{backgroundColor:'white', width:48, height:48,borderRadius:4}}></View>
        </View>
    )
};
const styles = StyleSheet.create({
    duid:{
        fontSize:36,
        fontWeight:'bold',
        lineHeight:42.19,
        color:'#575757'
    },
});
