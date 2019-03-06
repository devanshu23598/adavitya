import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../HomeScreen';
import EventByCategory from '../EventByCategory';
import EventDetail from '../EventDetail';
import CategoryList from '../CategoryList';
import SplashScreen from '../SplashScreen'
import Developers from '../Developers';
const AppNavigator=createStackNavigator({
    Home:{
        screen:HomeScreen
    },
    EventByCategory:{
        screen:EventByCategory
    },
    EventDetail:{
        screen:EventDetail
    },
    CategoryList:{
        screen:CategoryList
    },
    SplashScreen:{
        screen:SplashScreen
    },
    Developers:{
        screen:Developers
    }

},
{
    initialRouteName:'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   });

export default AppNavigator;