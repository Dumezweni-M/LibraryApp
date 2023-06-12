import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView } from "react-native";
import React, { useState } from "react";

//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from "../App";
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { data } from './Data'


//---------------------------------------------------------------------------------------------
type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>


function Search({ route }: SearchProps) {

    const { search } = route.params;
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const genres = ['Total Books', ...Array.from(new Set(data.map(item => item.genre)))];
    const filteredData = selectedGenre ? data.filter(item => item.genre === selectedGenre) : data;
    const [visibleItems, setVisibleItems] = useState(0);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const getBookCountPerGenre = (genre: string): number => {
        if (genre === 'Total Books') {
          return data.length;
        } else {
          return data.filter((item) => item.genre === genre).length;
        }
      };



  return (
    <ImageBackground
        source={require('./assets/mar3.jpg')}
        style={styles.bgImage}
        >
    <View style={styles.container}>
        
      <Text style={styles.header}>Books per Genre</Text>


                    
{/* /----------------------------GENRE LIST--------------------------------------------/ */}
       
<View style={styles.genreWrap}>
                <View style={styles.genreList}>
                    {genres.map((genre, index) => (
                        <Text
                        style={[
                          styles.genreItem,
                        ]}
                        key={index}
                        onPress={() => setSelectedGenre(genre === 'Total Books' ? null : genre)}
                      >
                        {genre} ({getBookCountPerGenre(genre)})
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

export default Search;

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

    heading: {
        fontSize: 30,
        height: '10%',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        margin: 5,
        marginBottom: 10,
        borderBottomWidth: 5,
        borderBottomColor: "lightgrey",
    },
    genreItem: {
        flex: 1,
        margin: 3,
        padding: 3,
        paddingTop: 22,
        width: '25%',
        height: '60%',
        minWidth: '30%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 800,
        borderRadius: 10,
        backgroundColor: 'white',
        opacity: 0.95,      
    },
    genreList: {
        flexDirection: "row",
        flexWrap: "wrap",
        height: 140,
        width: '98%',
        paddingTop: 15,
        paddingRight: 20,
        paddingLeft: 25,
        paddingBottom: 10,
        justifyContent: 'center',
        marginBottom: 550,
    },
    buttons: {
        width: '100%',
        height: '10%',
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
        marginBottom: -15,
    },   
});