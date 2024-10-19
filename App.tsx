import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {setupPlayer} from "./src/libs/setup-player";
import {useEffect} from "react";
import {Event, useTrackPlayerEvents} from "react-native-track-player";
import {MusicPlayer} from "./src/screens/music-player";

const events = [Event.PlaybackState, Event.PlaybackError, Event.PlaybackActiveTrackChanged]

export default function App() {
  useEffect(() => {
    setupPlayer()
      .catch(console.error)
  }, [])

  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occurred: ', event)
    }

    if (event.type === Event.PlaybackState) {
      console.log('Playback state: ', event.state)
    }

    if (event.type === Event.PlaybackActiveTrackChanged) {
      console.log('Track changed', event.index)
    }
  })

  return (
    <View style={styles.container}>
      <MusicPlayer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
