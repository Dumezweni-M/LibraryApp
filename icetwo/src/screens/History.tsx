import { StyleSheet, Text, View, Button, Image, ImageBackground } from "react-native";
import React from "react";
import { data } from './Data'



//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from "../App";
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'



// import Home from "./Home";

//---------------------------------------------------------------------------------------------
type HistoryProps = NativeStackScreenProps<RootStackParamList, 'History'>


function History({ route }: HistoryProps) {

    const { history } = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const lastThreeBooks = data.slice(-3);
        



    return (
    <ImageBackground
    source={require('./assets/mar3.jpg')}
    style={styles.bgImage}
    >   
        <View style={styles.container}>

            <Text style={styles.header}> Reading History </Text>
            
{/* // ----------------------------THREE BOOK HISTORY ------------------------------------ */}

<View>

        {lastThreeBooks.map((book, index) => (
          <View style={styles.lastbook} key={index}>
            <Text style={styles.textStyle}>Title: {book.title}</Text>
            <Text style={styles.textStyle}>Author: {book.author}</Text>
            <Text style={styles.textStyle}>Genre: {book.genre}</Text>
            <Text style={styles.textStyle}>Pages: {book.pages}</Text>
          </View>
        ))}
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
    );
}

export default History;

{/* /----------------------------   STYLES  ----------------------------------------------/ */}

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
        flex: 1,
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    textStyle: {
        padding: 2,
        margin: 2,
        fontSize: 18,
    },
    lastbook: {
        height: '24%',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'column',
        margin: 15,
        padding: 20,
        paddingBottom: 80,
        borderColor: "lightgrey",
        elevation: 10, 
        backgroundColor: 'white',
        opacity: 0.95,
    },
    buttonsCustom: {
        height: 109,
        textAlign: 'center',
        width: '18%',
        marginTop: '15%',
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
        width: '100%',
        borderRadius: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        padding:25,
        borderColor: "lightgrey",
        marginBottom: 20,
    }, 
    header: {
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
        paddingLeft: 20,
        marginLeft: -40,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 20,
        borderBottomWidth: 5,
        borderBottomColor: "white",
        color: 'white',
    },
});