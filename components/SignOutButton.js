import { useDispatch } from "react-redux";
import Button from "./Button";
import { logoutUser } from "../src/features/authSlice";
import { Auth } from "aws-amplify";

export default function ({ navigation }) {
  const dispatch = useDispatch();
  const onSignOut = () => {
    Auth.signOut()
      .then(() => {
        dispatch(logoutUser);
        navigation.reset({
          index: 0,
          routes: [{ name: "PreSignIn" }],
        });
      })
      .catch((err) => {
        Alert.alert(err);
      });
  };

  return (
    <Button
      className="bg-gray-100"
      type="SignOut"
      title="Sign out"
      onPress={onSignOut}
    />
  );
}
