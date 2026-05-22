import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppContext } from '../context/AppContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import MoreScreen from '../screens/MoreScreen';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    const {colors , t, isDarkMode } = useAppContext();

    const insets  = useSafeAreaInsets

    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeScreen} />
            <Tab.Screen name="SearchTab" component={SearchScreen} />
            <Tab.Screen name="AboutTab" component={AboutScreen} />
            <Tab.Screen name="MoreTab" component={MoreScreen} />
        </Tab.Navigator>
    )
}