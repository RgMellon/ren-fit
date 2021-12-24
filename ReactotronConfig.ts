import Reactotron, { ReactotronReactNative } from "reactotron-react-native";

// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron: ReactotronReactNative = Reactotron.configure({
    host: "10.0.0.101",
  })
    .useReactNative()

    .connect();

  tron.clear();
  console.tron = tron;
}
