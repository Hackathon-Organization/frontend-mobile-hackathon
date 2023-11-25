import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function HeaderMenuComponent({ navigation }) {
  return (
    <View style={styles.HeaderMenuContainer}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          justifyContent: "flex-start",
          width: "75%",
        }}
      >
        Header
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Usuario", { screen: "UserScreen" })}
        style={styles.AccountButton}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "013956",
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/images/user.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function MainMenuComponent({ navigation }) {
  return (
    <View style={styles.MainMenuContainer}>
      <View
        style={{
          backgroundColor: "#013956",
          width: 300,
          height: 300,
          borderRadius: 200,
        }}
      >
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={styles.MainMenuButtonsContainer}>
        <TouchableOpacity style={styles.MainMenuButtons}>
          <Text style={{ color: "white", fontSize: 20 }}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.MainMenuButtons}>
          <Text style={{ color: "white", fontSize: 20 }}>Inscrição</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#012030", "#FFFFFF", "#FFFFFF"]}
      start={{ x: 0.5, y: 0.0 }}
      end={{ x: 1.5, y: 2.0 }}
      locations={[0, 0.27, 1]}
      style={styles.container}
    >
      <HeaderMenuComponent navigation={navigation} />
      <MainMenuComponent navigation={navigation} />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 10,
  },
  HeaderMenuContainer: {
    flexDirection: "row",
    backgroundColor: "#013956",
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
  },
  MainMenuContainer: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  MainMenuButtonsContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  MainMenuButtons: {
    width: "50%",
    height: "auto",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "#013956",
  },
});
