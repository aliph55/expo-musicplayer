import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TRACKS } from "./data/tracks-data";
import AlbumCover from "./components/AlbumCover";
import AlbumDetials from "./components/AlbumDetials";
import Controls from "./components/Controls";
import Video from "react-native-video";

const App = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [pause, setPause] = useState(false);

  const currentTrack = TRACKS[selectedTrack];

  function onPlay() {
    setPause(false);
  }
  function onPause() {
    setPause(true);
  }

  function onNext() {
    if (selectedTrack == TRACKS.length - 1) {
      setSelectedTrack(0);
    } else {
      setSelectedTrack(selectedTrack + 1);
    }
  }

  function onBack() {
    if (selectedTrack == 0) {
      setSelectedTrack(TRACKS.length - 1);
    } else {
      setSelectedTrack(selectedTrack - 1);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <AlbumCover albumCover={currentTrack.albumArtUrl} />
      <AlbumDetials
        trackName={currentTrack.title}
        artistName={currentTrack.artist}
      />
      <Controls
        onNext={onNext}
        onBack={onBack}
        pause={pause}
        onPlay={onPlay}
        onPause={onPause}
      />
      <Video
        source={{ uri: currentTrack.audioUrl }}
        paused={pause}
        audioOnly
        poster={currentTrack.albumArtUrl}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111436",
  },
});
