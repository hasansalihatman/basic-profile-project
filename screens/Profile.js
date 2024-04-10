import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { DATA } from "../Data";

export default function Profile({ route }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const { userId } = route.params;
      const user = DATA.filter((e) => e.id === userId)[0];
      setUser(user);
      console.log(user);
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 5,
          borderColor: "purple",
        }}
        source={{ uri: user.avatar }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{user.name}</Text>
      <Text style={{ color: "gray", fontWeight: "bold", fontSize: 12 }}>
        {user.email}
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        About:<Text style={{ fontWeight: "300" }}>{user.about}</Text>{" "}
      </Text>
      <Text>Followers: {user.followers}</Text>
      <Text>Follows: {user.follows}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
