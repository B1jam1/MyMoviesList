// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import movies from '../Helpers/moviesData'
import MovieItem from './MovieItem'
import getFilmsFromApiWithSearchedText from '../API/TMDBApi'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      movies : [],
      isLoading: false }
    searchedText = ""
  }
  

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  _loadFilms() {
    this.setState({ isLoading: true })
    if(this.searchedText.length > 0) {
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({ 
        movies : data.results,
        isLoading: false 
      }))
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={stylesSearch.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  render() {
      console.log(this.state.isLoading)
      return (
          <View style={ stylesSearch.main_container }>
              <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={ stylesSearch.textinput } placeholder='Titre du film'/>
              <Button style={ stylesSearch.textinput } title='Rechercher' onPress={() => this._loadFilms() }/>
              <FlatList
                  data={ this.state.movies }
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => <MovieItem movie={item}/> }
              />
              {this._displayLoading()}
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
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default Search