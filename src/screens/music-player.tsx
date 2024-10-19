import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';

export function MusicPlayer() {
  const [trackTitle, setTrackTitle] = useState('Never Gonna Give You Up');
  const playbackState = usePlaybackState();

  async function playMusic() {
    await TrackPlayer.play();
  }

  async function pauseMusic() {
    await TrackPlayer.pause();
  }

  async function stopMusic() {
    await TrackPlayer.stop();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music Player</Text>
      <Text style={styles.trackTitle}>{trackTitle}</Text>
      <View style={styles.controls}>
        {playbackState.state === State.Playing ? (
          <Button title="Pause" onPress={pauseMusic} />
        ) : (
          <Button title="Play" onPress={playMusic} />
        )}
        <Button title="Stop" onPress={stopMusic} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  trackTitle: {
    fontSize: 18,
    marginBottom: 40,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});


