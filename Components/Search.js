// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import movies from '../Helpers/moviesData'
import MovieItem from './MovieItem'

class Search extends React.Component {
    render() {
        return (
            <View style={ stylesSearch.main_container }>
                <TextInput style={ stylesSearch.textinput } placeholder='Titre du film'/>
                <Button style={ stylesSearch.textinput } title='Rechercher' onPress={() => {}}/>
                <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <MovieItem movie={item}/> }
                />
            </View>
        )
    }
}

const stylesSearch = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
      },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })

export default Search