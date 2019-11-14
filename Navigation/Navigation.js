import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Search from '../Components/Search'
import MovieDetail from'../Components/MovieDetail'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  }
})

export default createAppContainer(SearchStackNavigator)