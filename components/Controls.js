import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Controls = ({ pause, onPlay, onPause, onNext, onBack }) => {
  return (
    <View style={styles.controlWrapper}>
      <TouchableOpacity onPress={onBack} style={styles.btn}>
        <AntDesign name="banckward" size={30} color={"white"} />
      </TouchableOpacity>

      {/* play/pause */}

      {pause ? (
        <TouchableOpacity style={styles.playContainer} onPress={onPlay}>
          <AntDesign name="playcircleo" size={32} color="#000" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playContainer} onPress={onPause}>
          <AntDesign name="pausecircleo" size={32} color="#000" />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.btn} onPress={onNext}>
        <AntDesign name="forward" size={30} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  controlWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  playContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    borderColor: "#1B1246",
    borderWidth: 16,
    width: 126,
    height: 128,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "#1B1246",
    shadowOpacity: 0.5,
    elevation: 0.2,
    shadowRadius: 30,
  },
});
