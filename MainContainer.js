import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import PrayTimeScreen from "./screens/PrayTimeScreen";
import SettingScreen from "./screens/SettingsScreen";
import VeranstalltungenScreen from "./screens/VeranstalltungenScreen";


//Screen names
const prayTimeName = "Gebetszeit";
const settingsName = "Einstellungen";
const veranstaltungName = "Events";

const Tab = createBottomTabNavigator();

function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName={prayTimeName}
            
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if(rn === prayTimeName){
                        iconName = focused ? "time" : "time-outline";
                    
                    }else if(rn === veranstaltungName){
                        iconName = focused ? "calendar" : "calendar-outline";
            
                    }else if(rn === settingsName){
                        iconName = focused ? 'settings' : "settings-outline";
                    }
            
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
             tabBarOptions={{
                activeTintColor: "#49B295",
                inactiveTintColor: "grey",
                labelStyle: { paddingBottom: 1, fontSize: 10},
                style: {padding: 10, height: 70},
            }}>
            

                <Tab.Screen name={veranstaltungName} component={VeranstalltungenScreen}/>
                <Tab.Screen name={prayTimeName} component={PrayTimeScreen}/>
                <Tab.Screen name={settingsName} component={SettingScreen}/>
                


            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;


