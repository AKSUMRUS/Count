import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


const Title = (text) => {
  return <Text style={styles.titleD}>{text}</Text>;
}

const Content = (text) => {
  return <Text style={styles.textD}>{text}</Text>;
}

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  return (
      <View style={styles.container}>
        <Pressable
            onPress={() => {
              setTimesPressed((current) => current + 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : 'white'
              },
              styles.wrapperCustom
            ]}>
          {({ pressed }) => (
              <Text style={styles.text}>
                +
              </Text>
          )}
        </Pressable>
        <Pressable
            onPress={() => {
              setTimesPressed((current) => current - 1);
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : 'white'
              },
              styles.wrapperCustom
            ]}>
          {({ pressed }) => (
              <Text style={styles.text}>
                -
              </Text>
          )}
        </Pressable>
        <View style={styles.logBox}>
          <Text>{timesPressed}</Text>
        </View>
      </View>
  );
  // <News title={'Programming'} text={'Is the best job in the world'}/>
}


const styles = StyleSheet.create({
  header:{

  },
  a:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{

  },
  titleA:{
    fontSize: 32,
    color: 'red'
  },
  textA:{
    fontSize: 20,
    color: 'blue'
  },
  b:{
    flex: 1,
    justifyContent: 'flex-start'
  },
  titleB:{
    textAlign: 'center',
    fontSize: 32,
    color: 'red'
  },
  textB:{
    textAlign: 'left',
    fontSize: 20,
    color: 'blue'
  },
  c:{
    flex: 1,
    justifyContent: 'flex-start'
  },
  titleC:{
    textAlign: 'right',
    fontSize: 32,
    color: 'red'
  },
  textC:{
    textAlign: 'right',
    fontSize: 20,
    color: 'blue'
  },
  d:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  titleD:{
    textAlign: 'center',
    fontSize: 32,
    color: 'red'
  },
  textD:{
    textAlign: 'left',
    fontSize: 20,
    color: 'blue'
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

export default App;
