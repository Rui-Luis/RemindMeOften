import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, Vibration, Button, Switch } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Alarm/>
      <StatusBar style="auto" />
    </View>
  );
}

const Alarm = () => {
  // For the testing part!
  const [value, onChangeText] = useState('Write your message here!');

  // For the switch part!
  const [isEnabled, setIsEnabled] = useState(false);

  var timer = useRef();

  const toggleSwitch = () => {

    if (!isEnabled) {
      setIsEnabled(true);
      timer.current = setInterval(() => {
        Vibration.vibrate(); 
        alert(value);
      }, 3000);
    } else { 
      timer.current = clearInterval(timer.current)
      setIsEnabled(false);
    }
  }

  return(
  <View>
    <TextInput style={styles.messageText} onChangeText={text => onChangeText(text)} value={value} />

    <Button onPress={
      () => { 
       Vibration.vibrate();
       alert(value);
      }
    } 
      title="TEST"/>

      <Switch 
      style={styles.alarmSwitch} 
      value={isEnabled}
      onValueChange={toggleSwitch}
      />   
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alarmSwitch: {
    margin: 40,
    alignSelf: 'center'
  },
  messageText: {
    textAlign: 'center',
  }
});