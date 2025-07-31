import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from "./src/_layout/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { StyleSheet } from "react-native";

export default function App() {
  return (
     <GestureHandlerRootView style={styles.root}>

       <SafeAreaProvider>

       <ThemeProvider>

       <Main/>
       </ThemeProvider>
       </SafeAreaProvider>
     </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },})