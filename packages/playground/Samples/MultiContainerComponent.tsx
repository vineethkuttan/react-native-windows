import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MultiContainerComponent = () => {
  const [count, setCount] = useState("This is a normal text");
  const [nooflines, setNoOfLines] = useState(0);

  const increaseCount = () => {
    setCount(count + " Added");
  };
  
  const sliceFromEnd = () => {
    setCount(prevText => prevText.slice(0,count.length-6));
  };

  const Reset = () => {
    setCount("This is a normal text");
    setNoOfLines(0);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <Text numberOfLines={nooflines} adjustsFontSizeToFit style={styles.text}>{count}</Text>
      </View>
      <View style={styles.container3}>
        <Text numberOfLines={nooflines} adjustsFontSizeToFit style={styles.text}>{count}</Text>
      </View>
      <Text>Number of Lines {nooflines}</Text>
      <View >
        <View style={styles.buttonContainer}>
          <Button color='black' title="Add Text" onPress={increaseCount} />
        </View>
        <View style={styles.buttonContainer}>
          <Button color='blue' title="Reduce" onPress={sliceFromEnd} />
        </View>
        <View style={styles.buttonContainer}>
          <Button color='green' title="LineCount" onPress={()=>{setNoOfLines(prev=>prev+1)}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button color='red' title="Reset" onPress={Reset} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginBottom: 10,
    width:800,
    height: 150,
  },
  container2: {
    backgroundColor: 'lightgreen',
    padding: 20,
    height:50,
    marginBottom: 10,
    width: 700,
  },
  container3: {
    backgroundColor: 'lightcoral',
    padding: 20,
    marginBottom: 10,
    width:500,
    height:100,
  },
  buttonContainer: {
    justifyContent:"center",
    marginTop: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default MultiContainerComponent;
