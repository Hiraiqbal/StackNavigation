import React from 'react';
import { Button, View,StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.home} >
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  home:{ 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;