import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView } from "react-native";
import React, { useState } from "react";

//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from "../App";
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { data } from './Data'

//---------------------------------------------------------------------------------------------
type LibraryProps = NativeStackScreenProps<RootStackParamList, 'Library'>

function Library({ route }: LibraryProps): React.JSX.Element {

    const { library } = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const averagePages = data.length > 0 ? (data.reduce((sum, item) => sum + Number(item.pages), 0) / data.length).toFixed(2) : 0;

    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const genres = ['All', ...Array.from(new Set(data.map(item => item.genre)))];
    const filteredData = selectedGenre ? data.filter(item => item.genre === selectedGenre) : data;

    return (

        <ImageBackground
        source={require('./assets/mar3.jpg')}
        style={styles.bgImage}
        >
       
        <View style={styles.container}>
            

            <Text style={styles.header}>Book Collection</Text>
    
{/* /----------------------------BOOK LIST--------------------------------------------/ */}  

            <View style={styles.lastbook}>
            <ScrollView  style={styles.scroll}>
                {filteredData.map((item, index) => (
                <View style={styles.bookWrap} key={index}>
                    <></>
                    <Text style={styles.bookFont} >Author : {item.author}</Text>
                    <Text style={styles.bookFont}>Title : {item.title}</Text>
                    <Text style={styles.bookFont}>Genre : {item.genre}</Text>
                    <Text style={styles.bookFont}>Pages : {item.pages}</Text>    
                </View>
            ))}
            </ScrollView>
            </View>
                                       
{/* /----------------------------GENRE LIST--------------------------------------------/ */}
       
            <View style={styles.genreWrap}>
                <View style={styles.genreList}>
                    {genres.map((genre, index) => (
                        <Text
                        style={[
                            styles.genreItem,
                            selectedGenre === genre && styles.selectedGenreItem
                        ]}
                        key={index}
                        onPress={() => setSelectedGenre(genre === 'All' ? null : genre)}
                    >
                        {genre}
                    </Text>
                    ))}
                </View>
               
            </View>   
{/* /----------------------------   BUTTONS  2  ------------------------------------------/ */}
                <View style={styles.buttonsWrap}>
                    <Text
                    style={styles.buttonsCustom}
                    onPress={() => navigation.navigate('Home')}
                    >Home</Text>

                    <Text 
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('Details', {         //method 3
                        story: 'Whats up'
                    }) }
                    >Add Book</Text>

                    <Text
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('Library', {         //method 3
                        library: 'The Library'
                    }) }
                    >Library</Text>

                    <Text
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('Search', {         //method 3
                        search: 'Search'
                    }) }
                    >Genre</Text>

                    <Text
                    style={styles.buttonsCustom}
                    onPress={ () => navigation.push('History', {         //method 3
                        history: 'History'
                    }) }
                    >History</Text>
                </View> 


        </View>
        </ImageBackground>
    );
}
export default Library;

{/* /---------------------------- STYLES --------------------------------------------/ */}

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
        width: '98%',
        height: '100%',
    },
    header: {
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
        paddingLeft: 20,
        marginLeft: -40,
        paddingRight: 20,
        marginTop: 0,
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
        fontWeight: 900,
        padding:10,
        borderColor: "lightgrey",
        backgroundColor: 'black',
        fontSize: 18,
        color: 'white',
    },
    buttonsWrap: {
        height: '8%',
        width: '98%',
        borderRadius: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        padding:10,
        borderColor: "lightgrey",
    },
    heading: {
        fontSize: 30,
        height: '10%',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        margin: 5,
        marginBottom: 20,
        borderBottomWidth: 5,
        borderBottomColor: "lightgrey",
    },
    lastbook: {
        flex: 1,
        width: '80%',
        height: '20%',
        borderRadius: 50,
        marginTop: 0,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '6%',        
    },
    bookWrap: {
        flex: 1,
        alignContent: 'center',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 57,
        borderRadius: 15,
        backgroundColor: 'white',
        width: '70%',
        elevation: 10,
        opacity: 0.95,
    },
    bookFont: {
        fontSize: 18,
        color: 'grey',
        marginLeft: 25,
    },
    scroll: {
        width: '140%',
        height: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
    },
    genreItem: {
        flex: 1,
        margin: 5,
        marginBottom: 5,
        padding: 5,
        width: '20%',
        height: 26,
        minWidth: '25%',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 800,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        opacity: 0.95,      
    },
    genreList: {
        flexDirection: "row",
        flexWrap: "wrap",
        height: 160,
        width: '100%',     
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10,
        justifyContent: 'center',
    },
    genreWrap: {
        flexDirection: "column",
        padding: 10,
        marginBottom: 50,
        flexWrap: "wrap",
        justifyContent: "center",
        width: '90%',
        height: '15%',        
    },
    genreScroll: {
        width: '120%',
        paddingLeft: 10,
        paddingRight: 20, 
    },
});