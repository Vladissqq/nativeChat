import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements';

export default ({ room, joinRoom, navigation,inviteRoom}) => {
    return (
        <View
            style={styles.container}
        >
            <Image
                source={{ uri: 'https://lh4.googleusercontent.com/-4xgUWcK1gvo/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3remkuRAmxrufpX-mixz2kVQT39S4w/s96-c/photo.jpg' }}
                style={{ width: 50, height: 50, borderRadius: 25, flex: 2 }}
            />
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 8 }}>
                <Text
                    onPress={() => {
                        joinRoom(room)
                    }}
                    style={styles.text}
                >
                {room}
                </Text>
                <Icon
                    name='person-add'
                    color='#00aced' 
                    onPress={() => {
                        console.log(room)
                        inviteRoom(room);
                        navigation.navigate('inviteUsers');                    
                    }}    
                    />
                    
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        color: 'black',
        alignSelf: 'center',
        marginLeft: 7
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7,
        borderColor: '#a5aab350',
        borderWidth: 1.5,
        borderLeftWidth: 0,
        borderRightWidth: 0
    }

});