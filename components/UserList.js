import React from 'react'
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native'
import { Card } from 'react-native-elements';


class UserList extends React.Component {
  render() {
    const { users } = this.props.users

    return (
      <ScrollView>
        <Card containerStyle={{ padding: 3 }}>
        {
          users.map((u, i) => {
            return (
              <View
                key={i}
                style={{ flexDirection: 'row' }}
              >
                <Image
                  source={{ uri: u.img }}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text
                  style={styles.text}
                >
                  {u.firstName}
                </Text>
                <Text
                  style={styles.text}
                >
                  {u.secondName}
                </Text>
              </View>
            );
          })
        }
      </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: 'black',
    alignSelf: 'center',
    marginLeft:7
  },

});

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList)