
import { TextInput, ActivityIndicator, FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange } from 'react-native-responsive-screen';
import PrayTimes from "../../components/PrayTimes";
import axios from "axios";
import {
    useFonts,
    K2D_100Thin,
    K2D_100Thin_Italic,
    K2D_200ExtraLight,
    K2D_200ExtraLight_Italic,
    K2D_300Light,
    K2D_300Light_Italic,
    K2D_400Regular,
    K2D_400Regular_Italic,
    K2D_500Medium,
    K2D_500Medium_Italic,
    K2D_600SemiBold,
    K2D_600SemiBold_Italic,
    K2D_700Bold,
    K2D_700Bold_Italic,
    K2D_800ExtraBold,
    K2D_800ExtraBold_Italic,
} from '@expo-google-fonts/k2d';


export default function PrayTimeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState();

    const url = "https://api.aladhan.com/v1/timingsByAddress?address=Switzerland,%20UK&method=99&methodSettings=18.5,null,17.5&tune=1,2,3,4,5";

    useEffect(() => {
        fetch(url, {
            headers: {
                'X-API-KEY': '11ca32515bf443689f919a0ef9d3015e'
            },

        })
            .then((response) => response.json())
            .then(
                (result) => {
                    setLoading(false)
                    setData(result);

                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }

            )

    }, []);

    let [fontsLoaded] = useFonts({
        K2D_100Thin,
        K2D_100Thin_Italic,
        K2D_200ExtraLight,
        K2D_200ExtraLight_Italic,
        K2D_300Light,
        K2D_300Light_Italic,
        K2D_400Regular,
        K2D_400Regular_Italic,
        K2D_500Medium,
        K2D_500Medium_Italic,
        K2D_600SemiBold,
        K2D_600SemiBold_Italic,
        K2D_700Bold,
        K2D_700Bold_Italic,
        K2D_800ExtraBold,
        K2D_800ExtraBold_Italic,
    })



    let fajr = "Fajr";
    let sunrise = "Sunrise";
    let dhuhr = "Dhuhr";
    let asr = "Asr";
    let maghrib = "Maghrib";
    let isha = "Isha";

    const prayerTimesArray = [fajr, sunrise, dhuhr, asr, maghrib, isha];



    //data.data?.timings geht auch
    /*während dem Laden sind keine Daten in timings vorhanden, daher 
        gibt es ein Fehler aus. */

    const getContent = (prayerTimesArray) => {
        if (isLoading == false && data.data) {

            if (error) {
                return <Text>{error}</Text>
            }
            console.log(data.data.timings)
            return <Text >
                {data.data.timings[prayerTimesArray]}
            </Text>


        } else {
            return <ActivityIndicator size="large" />
        }

    }

/*Muss Dropdown anstatt Input sein*/
    return (

        <View style={{ flex: 1, alignItems: "center" }}>

            <View style={[styles.textContainer, styles.shadowProp]}>
                <TextInput
                    placeholder="Ort"
                    onChangeText={text => setInput(text)}
                    value={input}
                    style={styles.placeholderText}
                    placeholderTextColor={"#000"}

                />

            </View>

            <View style={{ width: "100%", alignItems: "center", marginTop: 100 }} >

                <View style={[styles.containerCard]}>
                    <View style={[styles.card, styles.shadowProp]}>

                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[0]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Imsak
                        </Text>



                    </View>
                </View>

                <View style={[styles.containerCard]}>
                    <View style={[styles.card, styles.shadowProp]}>
                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[1]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Surnise
                        </Text>
                    </View>
                </View>

                <View style={[styles.containerCard]}>
                    <View style={[styles.card, styles.shadowProp]}>
                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[2]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Dhuhr
                        </Text>
                    </View>
                </View>

                <View style={[styles.containerCard]}>
                    <View style={[styles.card, styles.shadowProp]}>
                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[3]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Asr
                        </Text>
                    </View>
                </View>

                <View style={[styles.containerCard]}>
                    <View style={[styles.card, styles.shadowProp]}>
                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[4]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Maghrib
                        </Text>
                    </View>
                </View>

                <View style={[styles.containerCard]}>
                    <View style={[styles.card, styles.shadowProp]}>
                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[5]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Isha
                        </Text>
                    </View>
                </View>
            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    containerCard: {
        marginTop: "20px",
        width: "90%",
        height: 78,

    },
    card: {
        padding: 20,

        borderRadius: "16px",
        backgroundColor: "#ffffff",
    },



    shadowProp: {

        borderRadius: "16px",
        background: "#ffffff",
        boxShadow: " 6px 6px 12px #aaaaaa,-6px -6px 12px #ffffff",

    },

    textContainer: {
        width: "90%",

        marginTop: 20,

    },

    placeholderText: {

        padding: 10,
        borderRadius: 10,
        backgroundColor: "#ffffff",

    },

    textTime: {
        fontSize: 20, fontFamily: ' K2D_400Regular', color: "#274546"
    },

    textTimeName: {
        fontSize: 15, fontFamily: 'K2D_400Regular ', color: "#274546"
    }


});




