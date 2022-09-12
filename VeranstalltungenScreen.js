import * as React from "react";
import { Stylesheet, View, Text} from 'react-native';


export default function VeransstalltungenScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text 
                onPress={() => navigation.navigate("Home")}
                style={{fontSize: 26, fontWeight: "bold"}}>Veranstaltungen </Text>
        </View>
    );
}