import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import logo from "./assets/logo-imdb.png";
import imgFilm from "./assets/film.jpg";
import imgMatthew from "./assets/matthew.jpg";
import imgAnne from "./assets/anne.jpg";
import imgJessica from "./assets/jessica.jpg";
import imgmackenzie from "./assets/mackenzie.jpg";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.firstPart}>
        <View style={styles.logo}>
          <Image style={styles.imageLogo} source={logo} />
        </View>
        <View>
          <Text style={styles.textWhiteTitle}>Interstellar</Text>
        </View>
        <View style={styles.descriptionFilm}>
          <Text style={styles.textWhiteDefTitle}>2014</Text>
          <Text style={styles.textWhiteDefTitle}>PG-13</Text>
          <Text style={styles.textWhiteDefTitle}>2h49min</Text>
          <Text style={styles.textWhiteDefTitle}>Adventure,Drama,Sci-Fi</Text>
        </View>
        <View style={styles.containerFilm}>
          <Image style={styles.imageFilm} source={imgFilm} />
          <View>
            <Text style={styles.textWhiteDescription}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival
            </Text>
            <TouchableOpacity
              style={styles.buttonWatch}
              onPress={() => console.log("Touchable Opacity")}
            >
              <Text style={styles.textWhiteBold}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.notation}>
          <View style={styles.center}>
            <FontAwesome
              style={styles.marginNotation}
              name="star"
              size={24}
              color="#E7B91E"
            />
            <View style={[styles.directionRow, styles.marginNotation]}>
              <Text style={styles.textWhiteBold}>8.6</Text>
              <Text style={[styles.textWhite, styles.overnotation]}>/10</Text>
            </View>
            <Text style={styles.abovenotation}> 1.1M</Text>
          </View>
          <View style={styles.center}>
            <FontAwesome
              style={styles.marginNotation}
              name="star-o"
              size={24}
              color="#FBFBFB"
            />
            <Text style={styles.textWhite}> RATE THIS</Text>
            <Text></Text>
          </View>
          <View style={styles.center}>
            <View style={[styles.squareNotation, styles.marginNotation]}>
              <Text style={styles.textWhiteBold}>74</Text>
            </View>
            <Text style={styles.textWhite}>Metascore</Text>
            <Text style={styles.abovenotation}>46 critic reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.secondPart}>
        <View style={[styles.directionRow, styles.center, styles.spaceBetween]}>
          <Text style={styles.textWhiteTitleCast}>Top Billed Cast</Text>
          <TouchableOpacity
            style={styles.buttonSeeAll}
            onPress={() => console.log("Touchable Opacity")}
          >
            <Text style={styles.textBlue}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          style={styles.scrollView}
          contentContainerStyle={styles.box}
        >
          <View style={styles.sizeActors}>
            <Image style={styles.sizeActors} source={imgMatthew} />
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={styles.textWhiteBold}
            >
              Matthew McConaughey
            </Text>
            <Text style={styles.textWhite}>Cooper</Text>
          </View>
          <View>
            <Image style={styles.sizeActors} source={imgAnne} />
            <Text style={styles.textWhiteBold}>Anne Hathaway</Text>
            <Text style={styles.textWhite}>Brand</Text>
          </View>
          <View>
            <Image style={styles.sizeActors} source={imgJessica} />
            <Text style={styles.textWhiteBold}>Jessica Chastain</Text>
            <Text style={styles.textWhite}>Murphy</Text>
          </View>
          <View>
            <Image style={styles.sizeActors} source={imgmackenzie} />
            <Text style={styles.textWhiteBold}>Mackenzie Foy</Text>
            <Text style={styles.textWhite}>Young Murphy</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.thirdPart}>
        <View style={styles.marginVertical}>
          <Text style={styles.textWhiteBold}>Director</Text>
          <Text style={styles.textWhite}>Christopher Nolan</Text>
        </View>
        <View style={styles.marginVertical}>
          <Text style={styles.textWhiteBold}>Writers</Text>
          <Text style={styles.textWhite}>Jonathan Nolan</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  firstPart: {
    backgroundColor: "#212121",
  },
  secondPart: {
    marginTop: 10,
    backgroundColor: "#212121",
  },

  thirdPart: {
    backgroundColor: "black",
  },

  directionRow: {
    flexDirection: "row",
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  spaceBetween: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    backgroundColor: "#393939",
    paddingVertical: 5,
    paddingLeft: 10,
  },
  imageLogo: {
    height: 30,
    width: 55,
  },

  imageFilm: {
    height: 122,
    width: 88,
  },

  descriptionFilm: {
    flexDirection: "row",
  },

  textWhite: {
    color: "white",
  },

  textWhiteBold: {
    color: "white",
    fontWeight: "bold",
  },

  textWhiteTitle: {
    paddingLeft: 10,
    paddingVertical: 10,
    color: "white",
    fontSize: 30,
  },

  textWhiteDefTitle: {
    paddingBottom: 30,
    color: "white",
    paddingLeft: 10,
  },

  containerFilm: {
    paddingLeft: 10,
    flexDirection: "row",
  },

  textWhiteDescription: {
    color: "white",
    paddingLeft: 15,
    width: 280,
    paddingBottom: 10,
  },

  buttonWatch: {
    backgroundColor: "#0177BD",
    color: "white",
    marginLeft: 15,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 2,
  },

  notation: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  squareNotation: {
    height: 20,
    width: 20,
    backgroundColor: "#61C74F",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  overnotation: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
  abovenotation: {
    fontSize: 12,
    color: "grey",
  },
  center: {
    alignItems: "center",
  },

  marginNotation: {
    marginBottom: 5,
  },

  marginVertical: {
    marginVertical: 5,
  },

  textWhiteTitleCast: {
    paddingLeft: 10,
    paddingVertical: 10,
    color: "white",
    fontSize: 20,
  },

  buttonSeeAll: {
    marginRight: 15,
    borderRadius: 2,
  },

  textBlue: {
    color: "#04A7F3",
  },

  box: {
    paddingLeft: 10,
  },

  sizeActors: {
    height: 180,
    width: 120,
    marginRight: 10,
  },
});
