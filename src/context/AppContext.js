import { View, Text } from 'react-native'
import { React,  createContext, useEffect, useState } from 'react'
import '../i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const {t, i18n } = useTranslation();
    const [isDarkMode, setIsDarkmode ] = useState(false)

    useEffect(()=>{
        const loadSaveSettings = async() => {
            try {
                const saveLanguage = await AsyncStorage.getItem('user_language')
                const saveTheme = await AsyncStorage.getItem('user_theme')

                if(saveLanguage){
                    i18n.changeLanguage(saveLanguage)
                }

                if(saveTheme !== null){
                    setIsDarkmode(saveTheme === 'dark')
                }
                
            } catch (error) {
                console.error('Failed to load settings:', error)
            }
        }
        loadSaveSettings();
    },[]);


    const toggleTheme = async () => {
        try {
            const newTheme = !isDarkMode;
            setIsDarkmode(newTheme);
            await AsyncStorage.setItem('user_theme', newTheme ? 'dark':'light');
            
        } catch (error) {
            console.error('Failed to save theme:', error)
        }
    }

    const changeLanguage = async(lng) => {
        try {
            i18n.changeLanguage(lng);
            await AsyncStorage.setItem('user_language', lng)
        } catch (error) {
            console.error('Failed to save language:', error)
            
        }
    }

    const colors = {
        background: isDarkMode ? '#0000':'#ffff',
        text: isDarkMode ? '#ffff':'#0000',
        card: isDarkMode ? '#000000':'#ffffff',
        primary: '#3300ff'
        
    }
    
    return (
        <View>
            <Text>AppContext</Text>
        </View>
    )
};

export const useAppContext = () => useAppContext(AppContext);