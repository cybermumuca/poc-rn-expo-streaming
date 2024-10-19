import TrackPlayer, {RepeatMode} from "react-native-track-player";

export async function setupPlayer() {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10,
  })

  await TrackPlayer.add({
    id: 'trackId',
    url: 'https://localhost:8080/music/stream',
    title: 'My Favorite Music',
    artist: 'Artist',
  });

  await TrackPlayer.setVolume(0.03)
  await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}