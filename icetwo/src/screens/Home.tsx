import { Button, Image, StyleSheet, Text, View, TextInput, ImageBackground} from "react-native";
import React from "react";

//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from "../App";
import Details from "./Details";
import List from './Library';
import { data } from './Data'

//------------------------------------------------------------------------------------------

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {

const lastBook = data.slice(-1);
    const bookinfo = {
            Author : "Daniel C. Denette",
            Title : "Being Explained",
            Genre : "Non-Fiction",
            Pages : 734,
    }

    return(       
        <ImageBackground
        source={require('./assets/mar3.jpg')}
        style={styles.bgImage}
        >

        <View style={styles.container}> 

       
        <Text style={styles.header}>Good Afternoon!</Text>
                <View style={styles.lastbook}>
                        <Text style={styles.heading}>Last book </Text>
                        <ImageBackground
                        source={require('./assets/madi.jpg')}
                        style={styles.backgroundImage}
                        >
                        </ImageBackground>
                       
                        {lastBook.map((book, index) => (
                        <View key={index}>
                            <Text style={styles.avgText}>Title: {book.title}</Text>
                            <Text style={styles.avgText}>Author: {book.author}</Text>
                            <Text style={styles.avgText}>Genre: {book.genre}</Text>
                            <Text style={styles.avgText}>Pages: {book.pages}</Text>
                        </View>
                        ))}
                </View>

                <View>

        
      </View>
 


{/* /----------------------------   AVG AND TOTAL VALUES  ------------------------------------------/ */}     
          
                <View style={styles.avgpages}>

                <Text style={styles.heading}>Progress page</Text>

                <ImageBackground
                        source={require('./assets/cotton.jpg')}
                        style={styles.backgroundImage}
                        >
                </ImageBackground>
                    

                    <Text style={styles.avgText}>
                    Average Pages:{" "}
                    {data.length > 0
                        ? (
                            data.reduce((sum, item) => sum + Number(item.pages), 0) / data.length
                        ).toFixed(2)
                        : 0}
                    </Text>

                    <Text style={styles.avgText}>
                    Total Pages:{" "}
                    {data.length > 0
                        ? data.reduce((sum, item) => sum + Number(item.pages), 0)
                        : 0}
                    </Text>       
                </View>

{/* /----------------------------   BUTTONS  2  ------------------------------------------/ */}

                <View style={styles.buttonsWrap}>
                    <Text
                    style={styles.buttonsCustom}
                    onPress={() => navigation.navigate('Home')}
                    >Home</Text>

                    <Text 
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('Details', {         
                        story: 'Whats up'
                    }) }
                    >Add Book</Text>

                    <Text
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('Library', {         
                        library: 'The Library'
                    }) }
                    >Library</Text>

                    <Text
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('Search', {        
                        search: 'Search'
                    }) }
                    >Genre</Text>

                    <Text
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('History', {       
                        history: 'History'
                    }) }
                    >History</Text>
                </View>        
        </View>
        </ImageBackground>
    )
}

export default Home

{/* /----------------------------   STYLES  ------------------------------------------/ */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 30,
        borderRadius: 20,
        margin:25,
        borderColor: "white",
        opacity: 0.95,
        elevation: 10,
    },
    bgImage: {
        width: '100%',
        height: '100%', 
      },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: 120,
        borderRadius: 20,  
      },
      header: {
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 5,
        borderBottomWidth: 5,
        borderBottomColor: "white",
        color: 'white',
    },
    buttons: {
        width: '100%',
        height: '10%',
    },
    buttonsCustom: {
        height: 109,
        textAlign: 'center',
        width: '18%',
        marginTop: '20%',
        borderRadius: 10,
        fontWeight: 800,
        padding:10,
        borderColor: "lightgrey",
        backgroundColor: 'black',
        fontSize: 18,
        color: 'white',
    },
    buttonsWrap: {
        height: '8%',
        width: '98%',
        borderRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        padding:10,
        borderColor: "lightgrey",
    },
    lastbook: {
        width: '75%',
        height: '40%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "lightgrey",
        marginBottom: 5, 
        backgroundColor: 'white',
        elevation: 30,
        paddingBottom: 40,
    },
    avgpages: {
        width: '75%',
        height: '38%',
        borderRadius: 20,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "lightgrey",
        backgroundColor: 'white',
        elevation: 30,
        paddingBottom: 60,
    },
    heading: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 5,
        borderBottomWidth: 5,
        borderBottomColor: "lightgrey",
    },
    avgText: {
        fontSize: 18,
    },

});