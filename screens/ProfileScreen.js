import React from 'react';
import { Button, View,StyleSheet } from 'react-native';

function ProfileScreen({ navigation }) {
    return (
      <View style={styles.profile} >
        <Button
          title="Go to Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  const styles = StyleSheet.create({

    profile:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around',

    },
  });
  export default ProfileScreen;