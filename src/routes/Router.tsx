import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeRoutes from './HomeRoutes';
import { useEffect } from 'react';
import SearchScreen from '../screens/home/SearchScreen';
import { AntDesign } from '@expo/vector-icons'; 
import expoLanguageDetector from '../../plugins/expoLanguageDetector';
import { useTranslation } from 'react-i18next';
import { addResources } from '../../i18n';
import { en, tr } from '../../locales';

const Stack = createNativeStackNavigator();
const Router = () => {

    const language = expoLanguageDetector.detect();

    const { t } = useTranslation();

    useEffect(() => {

        if(language == "en") {
            addResources(en);
           }
           else {
            addResources(tr);
           }
    }, []);

    return (
        <NavigationContainer>

            <Stack.Navigator>
            <Stack.Screen
             options={{ headerShown: false }}
             name="HomeRoutes"
             component={HomeRoutes} />
                       
                <Stack.Screen
                    options={({ navigation }) => ({
                        headerTitle: t("router.search"),
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <AntDesign name="left" size={24} color="black" />
                            </TouchableOpacity>
                        ),
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerShadowVisible: false,
                    })}
                    name="SearchScreen"
                    component={SearchScreen} />

                {/* <Stack.Group screenOptions={{ presentation: 'modal',  animation:"slide_from_bottom"}}>
                    <Stack.Screen name="MyProfileModal" component={MyProfileModal} 

                    options={({ navigation }) => ({
                       headerTitle: t("profile.button.myprofile"),
                       headerTitleAlign: 'center',
                       headerShadowVisible: false,
                       headerLeft: () => (
                        <TouchableOpacity>
                          <Fontisto 
                          name="bell" size={24} 
                          color="black" />
                        </TouchableOpacity>
                       ),
                       headerRight: () => (
                        <AntDesign 
                          name="close" 
                          size={24} 
                          color="black"
                          onPress={() => navigation.goBack()}
                          />
                       )
                    })}
                    />
                </Stack.Group> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

const styles = StyleSheet.create({
      modalHeaderText: {
        fontSize: 16,
        fontWeight: 'bold'
      },
})
