import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, Alert} from "react-native";
import React, { useState } from "react";

//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from "../App";
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { data } from './Data';

// ----------------------------------------------------------------------------------------------


type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details = ({route} : DetailsProps) => {
    const {story} = route.params
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [pages, setPages] = useState('');


    const handleAddData = () => {
        const newData = {
            author: author,
            title: title,
            genre: genre,
            pages: pages,
          };
      

    if (author.trim() === "" || title.trim() === "" || genre.trim() === "" || pages.trim() === "") {
              // Display an error message or take appropriate action
              Alert.alert("All fields are required, if unable to provide details fill in all sections with Z. ")
              return;
            }



        (data as unknown as { 
            author: string;
            title: string;
            genre: string;
            pages: string
            }[]).push(newData);


     
        setAuthor('');
        setTitle('');
        setGenre('');
        setPages('');
      };
    



    return(
//-------------------------- ADD BOOK -----------------------------------------------------
        <ImageBackground
        source={require('./assets/mar3.jpg')}
        style={styles.bgImage}
>
        <View style={styles.container}> 

                
        <Text style={styles.header}>Add To Your List</Text>

        <View style={styles.addDetails}>
                        <ImageBackground
                        source={require('./assets/cotton.jpg')}
                        style={styles.backgroundImage}
                        >
                            
                        </ImageBackground>
        <TextInput
          style={styles.inputStyle}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Genre"
          value={genre}
          onChangeText={setGenre}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Page number"
          value={pages}
          onChangeText={setPages}
        />

        < Text style={styles.buttonsCustomAdd} onPress={handleAddData} >Add</Text>
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
export default Details


// ----------------------------------------------------------STYLES-----------------------
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
        resizeMode: 'cover',
        width: '100%',
        height: '90%',
        marginTop: 50,
    },
    header: {
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 20,
        marginBottom: 20,
        borderBottomWidth: 5,
        borderBottomColor: "white",
        color: 'white',
    },
    inputStyle: {
        borderBottomWidth: 1,
        width: '80%',
        padding: 2,
        margin: 25,
        marginBottom: '3%',
        fontSize: 18,        
    },
    buttons: {
        width: '100%',
        height: '10%',
    },
    buttonsCustom: {
        height: 109,
        textAlign: 'center',
        width: '18%',
        marginTop: '25%',
        borderRadius: 10,
        fontWeight: 700,
        padding:10,
        borderColor: "lightgrey",
        backgroundColor: 'black',
        fontSize: 18,
        color: 'white',
    },
    buttonsCustomAdd: {
        height: 45,
        textAlign: 'center',
        width: '40%',
        margin: '10%',
        borderRadius: 10,
        fontWeight: 500,
        padding:10,
        borderColor: "lightgrey",
        backgroundColor: 'black',
        fontSize: 18,
        color: 'white',
        elevation: 2,
    },
    buttonsWrap: {
        height: '8%',
        width: '104%',
        borderRadius: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        padding:10,
        borderColor: "lightgrey",
    },
    addDetails: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        width: '80%',
        height: '60%',
        borderRadius: 20,
        padding: 0,
        marginBottom: 30,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        elevation: 30,
    }
});