
import { TextInput, ActivityIndicator, FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange } from 'react-native-responsive-screen';
import axios from "axios";
import Constants from 'expo-constants';
import SelectList from 'react-native-dropdown-select-list';
import Favicon from 'react-favicon'
import {
    useFonts,
    K2D_400Regular,
} from '@expo-google-fonts/k2d';





export default function PrayTimeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [error, setError] = useState();

    const url = "https://api.aladhan.com/timingsByAddress?address=Switzerland, CH&method=99&methodSettings=18.5,null,17.5&tune=1,2,3,4,5";
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
        K2D_400Regular,
    });


    //Arraylist für Get Content von API ################################
    let fajr = "Fajr";
    let sunrise = "Sunrise";
    let dhuhr = "Dhuhr";
    let asr = "Asr";
    let maghrib = "Maghrib";
    let isha = "Isha";

    const prayerTimesArray = [fajr, sunrise, dhuhr, asr, maghrib, isha];
    //##########################################################

    /*console.log(getContent);
    console.log(new Date().getTime())
    let time;
    switch (new Date().getTime()) {
        case fajr:
            if (fajr <= new Date().getTime) {
                time = changeBoder;
            }
            time = "Tuesday";
            break;
        case sunrise:
            time = "Tuesday";
            break;
        case dhuhr:
            time = "Tuesday";
            break;
        case asr:
            time = "Wednesday";
            break;
        case maghrib:
            time = "Thursday";
            break;
        case isha:
            time = "Friday";
            break;

    }

    function changeBoder(prayerTimesArray) {
        return (
            <View >


            </View>
        )
    }*/



    //data.data?.timings geht auch
    /*während dem Laden sind keine Daten in timings vorhanden, daher 
        gab es ein Fehler aus. */

    //Get content von API ##############################
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
    // #################################################


    //Datum ############################################
    const [currentDate, setcurrentDate] = useState("")

    useEffect(() => {
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1
        var year = new Date().getFullYear()
        setcurrentDate(
            date + "." + month + "." + year
        )
    }, [])
    //####################################################


    //Dropdwon Ortschaftsdaten ###############################################
    const [selected, setSelected] = React.useState("");

    const standorte = [
        { key: "1", value: "Basel" },
        { key: "2", value: "Bern" },
        { key: "3", value: "Bürgeln" },
        { key: "4", value: "Genf" },
        { key: "5", value: "Cham" },
        { key: "6", value: "Chur" },
        { key: "7", value: "Dietikon" },
        { key: "8", value: "Glarus" },
        { key: "9", value: "Liestal" },
        { key: "10", value: "Lugano" },
        { key: "11", value: "Luzern" },
        { key: "12", value: "Oberuzwil" },
        { key: "13", value: "Olten" },
        { key: "14", value: "Sion" },
        { key: "15", value: "Solothurn" },
        { key: "16", value: "Wetzikon" },
        { key: "17", value: "Winterthur" },
        { key: "18", value: "Wohlen" },

    ];
    //######################################
    return (

        <View style={{ flex: 1, alignItems: "center" }}>

            <View >
                <Text style={styles.date}>{currentDate}</Text>
            </View>

            <View style={[styles.dropDownList, styles.textTimeName]}>
                <SelectList
                    onSelect={() => (selected)}
                    setSelected={setSelected}
                    data={standorte}
                    search={false}
                    boxStyles={{ borderRadius: 13, backgroundColor: "#ffffff", borderColor: "#ffffff" }} //Ausgewählte ortschaft angezeigt, wird überschrieben
                    textStyles={{ fontSize: 20 }}
                    defaultOption={{ key: '1', value: 'Wähle eine Ortschaft aus' }}  //als erstes angezeigt
                />

            </View>

            <View style={{ alignItems: "center", width: "90%", display: "flex", flexDirection: "row-reverse", marginTop: 15 }}>

                <View style={[styles.containerCardMorning]}>
                    <View style={[styles.card, styles.shadowProp]}>
                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[1]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Sunrise
                        </Text>
                    </View>
                </View>

                <View style={{ width: "3%" }}></View>

                <View style={[styles.containerCardMorning]}>
                    <View style={[styles.card, styles.shadowProp]}>

                        <Text style={styles.textTime}>
                            {getContent([prayerTimesArray[0]])}
                        </Text>

                        <Text style={styles.textTimeName}>
                            Imsak
                        </Text>
                    </View>
                </View>


            </View>

            <View style={{ width: "100%", alignItems: "center" }} >

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
        height: 95,

    },

    containerCardMorning: {
        marginTop: "20px",
        width: "48.5%",
        height: 95,

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

    date: {
        fontSize: 50,
        marginTop: "10%",
        color: "#274546",
        fontFamily: 'K2D_400Regular',
    },

    dropDownList: {
        width: "90%",
        marginTop: 40,
    },

    textTime: {
        fontSize: "20px", fontFamily: 'K2D_400Regular', color: "#274546",
    },

    textTimeName: {
        fontSize: "15px", fontFamily: 'K2D_400Regular', color: "#274546",
    }


});






