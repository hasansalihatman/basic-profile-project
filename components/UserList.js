import { FlatList, StyleSheet, Text, View } from "react-native";
import { DATA } from "../Data";
import UserDetail from "./UserDetail";

export default function UserList() {
  return (
    <View style={{ width: "90%" }}>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          <UserDetail
            avatar={item.avatar}
            name={item.name}
            email={item.email}
            id={item.id}
            online={item.online}
            about={item.about}
            followers={item.followers}
            follows={item.follows}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
