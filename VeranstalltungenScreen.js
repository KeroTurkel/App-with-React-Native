import * as React from "react";
import { StyleSheet, View, Text, Image, Button,ScrollView, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';




export default function VeransstalltungenScreen(props, {navigation}) {

    const { onPress, title = 'Prävention'} = props;

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

            <ScrollView style={styles.scrollview}>

                <View style={{ alignItems: "center", width: "100%", height: "100%", marginTop: "5%", marginBottom: "5%" }}>



                    <View style={styles.card}>

                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/Baby.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>

                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Güclu aile güclu nesiller</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>

                                <Pressable style={styles.button} onPress={() => navigation.navigate('MehrErfahren')} >
                                    <Text style={styles.textButton}>{title}</Text>
                                </Pressable>

                            </View>

                        </View>
                    </View>

                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/Theater.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Theater "Bizim Istasiyon"</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>                                
                                <Button

                                    title="Prävention"
                                    color="white"
                                    style={styles.buttonDesign}

                                />
                            </View>

                        </View>
                    </View>



                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/Baby.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Güclu aile güclu nesiller</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>                                
                                <Button

                                    title="Prävention"
                                    color="white"
                                    style={styles.buttonDesign}

                                />
                            </View>

                        </View>
                    </View>


                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/arabischKurs.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Arabisch Kurs</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>                                
                                <Button

                                    title="Prävention"
                                    color="white"
                                    style={styles.buttonDesign}

                                />
                            </View>

                        </View>
                    </View>


                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/quran.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Quran-Unterricht</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>                                
                                <Button

                                    title="Prävention"
                                    color="white"
                                    style={styles.buttonDesign}

                                />
                            </View>

                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>


    );
}


/**
 * 
 *  <Canvas style={{width: width, height: height, zIndex: -1, position: "absolute"}}>
                    <Fill color={"#EEF0F5"}/>
                    <Box box={rrect(rect(width / 2 -100, 70, 200, 200), 100, 100)}>
                    
                    
                    </Box>

                </Canvas>
 */

const styles = StyleSheet.create({
    card: {
        width: "90%",
        height: 320,
        borderRadius: 16,
        padding: 20,
        backgroundColor: "#ffffff",
        alignSelf: "center"

    },

    card2: {
        width: "90%",
        marginTop: "4%",
        height: 320,
        padding: 20,
        borderRadius: 16,
        backgroundColor: "#ffffff",
        alignSelf: "center" /**ScrollView hatte verschoben mit alignSelf korrigiert */

    },

    containerInside: {

        width: "100%",
        height: "100%",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",

    },

    TextHalf: {

        width: "100%",
        height: "38%",

        borderRadius: 10,
        padding: 10,

    },

    ImageHalf: {

        width: "100%",
        height: "59%",
        borderRadius: 10,


    },

    topicTitle: {
        fontSize: 20,
        color: "gray",
        marginBottom: 3,

    },

    addressOfCourse: {
        borderRadius: 10,
        marginLeft: 5,
    },

    buttonDesign: {
        
    },

    IconAdressContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },

    scrollview: {
        width: "100%",
    },

    button:{
        marginTop: 15,
        backgroundColor: "#49B295",
        width: 80,
        padding: 4,
        borderRadius: 10,
        alignItems: "center",
    },

    textButton: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    }
});
