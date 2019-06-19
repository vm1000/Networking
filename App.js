/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  // Profile: {screen: ProfileScreen},
});


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: null,
            loaded: true,
            error: null
        }
    }

    baseURL = 'https://jsonplaceholder.typicode.com';
    
    getData = (ev)=>{
        this.setState({loaded:false, error: null});
        let url = this.baseURL + '/comments';
        let h = new Headers();
        h.append('Authorization', 'Bearer ksksksksksksksksrtrtrt');
        h.append('X-Client', 'Steve and Friends');
        
        let req = new Request(url, {
            headers: h,
            method: 'GET'
        });
        
        fetch(req)
        .then(response=>response.json())
        .then(this.showData)
        .catch(this.badStuff)
    }
    showData = (data)=>{
        this.setState({loaded:true, data});
        console.log(data);
    }
    badStuff = (err) => {
        this.setState({loaded: true, error: err.message});
    }
    componentDidMount(){
      //  this.getData();
    }
    render() {
      return <MainNavigator />
        // return (
        //   <View style={styles.container}>
        //     <ScrollView style={styles.scrollView}>
        //         { !this.state.loaded && (
        //             <Text>LOADING...</Text>
        //         )}
        //         <Text style={styles.txt}>Press the button to get data!</Text>
        //         <Button title="Get Data"
        //             onPress={this.getData} />
        //         { this.state.error && (
        //             <Text style={styles.err}>{this.state.error}</Text>
        //         )}
        //         { this.state.data && this.state.data.length > 0 && (
        //             this.state.data.map( comment => (
        //               <TouchableOpacity>
        //                 <Text key={comment.id} style={styles.txt}>
        //                    {[ comment.name, ', \n', comment.email ]}    
        //                 </Text>
        //               </TouchableOpacity>  
        //             ))
        //         )}
        //     </ScrollView>
        //   </View>
        // );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        height: 80,
        paddingTop: 80
    },
    ScrollView: {
      flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
      flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        color: '#333',
        borderWidth: 1,
        borderColor:'gray',
        margin:3,
        borderRadius:10,
        overflow: 'hidden',
        
    },
    err:{
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    }
});