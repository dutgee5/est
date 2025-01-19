import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-rubik text-3xl">Welcome to Estate</Text>
      <Link href={"/sign-in"}>Sign</Link>
      <Link href={"/explore"}>explore</Link>
      <Link href={"/profile"}>profile</Link>
      <Link href={"./properties/1"}>Property</Link>
    </View>
  );
}
