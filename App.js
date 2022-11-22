import { StatusBar } from "expo-status-bar";
import {
  View,
  ScrollView,
  Platform,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import logo from "./assets/logo.png";
import Film from "./assets/Film.jpg";
import Anne from "./assets/Anne.jpg";
import Jessica from "./assets/Jessica.jpg";
import Mackenzie from "./assets/Mackenzie.jpg";
import Matthew from "./assets/Matthew.jpg";

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <StatusBar style="light" />
      <ScrollView style={[styles.container]}>
        <View style={[styles.header]}>
          <Image
            source={logo}
            style={[styles.logo]}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={[styles.film]}>
          <Text style={[styles.text, styles.title]}>Interstellar</Text>
          <View style={[styles.infoContainer]}>
            <Text style={[styles.text, styles.info]}>2014 </Text>
            <Text style={[styles.text, styles.info]}>PG-13</Text>
            <Text style={[styles.text, styles.info]}>2h49min</Text>
            <Text style={[styles.text, styles.info]}>
              Adventure,Drama, Sci-Fi
            </Text>
          </View>
          <View style={[styles.filmContainer]}>
            <Image
              source={Film}
              style={[styles.imgFilm]}
              resizeMode="cover"
            ></Image>
            <View style={[styles.descriptionContainer]}>
              <Text style={[styles.resumé]}>
                <Text style={[styles.text, styles.description]}>
                  A team of explorers travel throught a wormhole in space in an
                  attempt to ensure humanity's survival
                </Text>
              </Text>

              <TouchableOpacity style={[styles.buttonContainer]}>
                <Text style={[styles.text, styles.button]}>
                  + ADD TO WATCHLIST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.starsContainer]}>
            <View style={[styles.stars]}>
              <FontAwesome
                name="star"
                size={20}
                color="#e6b91f"
                style={[styles.logoStars]}
              />
              <Text style={[styles.text]}>8.6/10</Text>
              <Text style={[styles.text, styles.textUnderStars]}>1.1M</Text>
            </View>
            <View style={[styles.stars]}>
              <FontAwesome
                name="star-o"
                size={20}
                color="white"
                style={[styles.logoStars]}
              />
              <Text style={[styles.text]}>RATE THIS</Text>
            </View>
            <View style={[styles.stars]}>
              <Text style={[styles.text, styles.textNombre]}>74</Text>
              <Text style={[styles.text]}>Metascore</Text>
              <Text style={[styles.text, styles.textUnderStars]}>
                46 critic reviews
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.casting]}>
          <Text style={[styles.text, styles.cast]}>Top Billed Cast</Text>
          <ScrollView horizontal={true} style={[styles.castingContainer]}>
            <View style={[styles.imgCastingContainer]}>
              <Image
                source={Matthew}
                style={[styles.imgCasting]}
                resizeMode="cover"
              ></Image>
              <Text style={[styles.text, styles.name]} numberOfLines={1}>
                Matthew McConaughey
              </Text>
              <Text style={[styles.text, styles.personnage]}>Cooper</Text>
            </View>
            <View style={[styles.imgCastingContainer]}>
              <Image
                source={Anne}
                style={[styles.imgCasting]}
                resizeMode="cover"
              ></Image>
              <Text style={[styles.text, styles.name]}>Anne Hathaway</Text>
              <Text style={[styles.text, styles.personnage]}>Brand</Text>
            </View>
            <View style={[styles.imgCastingContainer]}>
              <Image
                source={Jessica}
                style={[styles.imgCasting]}
                resizeMode="cover"
              ></Image>
              <Text style={[styles.text, styles.name]}>Jessica Chastain</Text>
              <Text style={[styles.text, styles.personnage]}>Murphy</Text>
            </View>
            <View style={[styles.imgCastingContainer]}>
              <Image
                source={Mackenzie}
                style={[styles.imgCasting]}
                resizeMode="cover"
              ></Image>
              <Text style={[styles.text, styles.name]}>Mackenzie Foy</Text>
              <Text style={[styles.text, styles.personnage]}>Murphy</Text>
            </View>
          </ScrollView>
          <View style={{ marginTop: 10 }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={[styles.text, styles.name]}>Director</Text>
              <Text style={[styles.text, styles.personnage]}>
                Christopher Nolan
              </Text>
            </View>
            <View>
              <Text style={[styles.text, styles.name]}>Writters</Text>
              <Text style={[styles.text, styles.personnage]}>
                Jonathan Nolan and Christopher Nolan
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "black",
  },

  container: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    height: "100%",
    backgroundColor: "#191919",
  },

  text: {
    color: "white",
  },

  header: {
    backgroundColor: "#393939",
    height: 60,
  },

  logo: {
    height: 40,
    width: 60,
    backgroundColor: "#393939",
    flex: 1,
    marginHorizontal: 10,
    tintColor: "white",
  },

  film: {
    backgroundColor: "#212121",
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 35,
    marginBottom: 10,
  },

  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },

  info: {
    marginRight: 10,
  },

  filmContainer: {
    flexDirection: "row",
  },

  imgFilm: {
    height: 130,
    width: 90,
    marginRight: 10,
  },

  descriptionContainer: {
    flex: 1,
  },

  resumé: {
    marginBottom: 10,
  },

  buttonContainer: {
    backgroundColor: "#0177bd",
    height: 30,
    width: 270,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },

  stars: {
    width: 110,
    flexDirection: "column",
    alignItems: "center",
  },

  logoStars: {
    marginBottom: 5,
  },

  textNombre: {
    marginBottom: 5,
    width: 20,
    textAlign: "center",
    backgroundColor: "#88d479",
  },

  textUnderStars: {
    fontSize: 12,
    color: "gray",
  },

  casting: {
    backgroundColor: "#212121",
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  cast: {
    fontSize: 23,
    marginBottom: 10,
  },

  castingContainer: {
    flexDirection: "row",
    overflow: "hidden",
  },

  imgCastingContainer: {
    height: 230,
    width: 130,
    backgroundColor: "#2a2a2a",
    marginRight: 5,
  },

  imgCasting: {
    height: 170,
    width: 130,
    marginBottom: 10,
  },

  name: {
    paddingHorizontal: 10,
  },

  personnage: {
    fontSize: 14,
    color: "gray",
    paddingHorizontal: 10,
  },
});
