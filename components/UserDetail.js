import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function UserDetail({ avatar, name, email, id, online }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "90%",
        height: 80,
        margin: 2,
        padding: 2,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "gray",
      }}
    >
      <View style={{ flex: 2 }}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 3,
            borderColor: "purple",
          }}
          source={{ uri: avatar }}
        />
        {online && (
          <View
            style={{
              backgroundColor: "#50EF93",
              width: 15,
              height: 15,
              borderRadius: 8,
              position: "absolute",
              bottom: 5,
              right: 15,
            }}
          ></View>
        )}
      </View>
      <View style={{ flex: 4 }}>
        <Text style={{ fontWeight: "bold", paddingBottom: 2 }}>
          Name:{name}
        </Text>
        <Text style={{ color: "gray", fontSize: 12 }}>Email: {email}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("profile", { userId: id })}
        >
          <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
