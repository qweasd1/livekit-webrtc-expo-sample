import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Participant, Room, Track } from 'livekit-client';
import { useRoom, VideoView, registerGlobals, AudioSession } from '@livekit/react-native';

const url = "wss://<your-project>.livekit.cloud"
const token = "your token"

registerGlobals()

export default function App() {
  const [room] = useState(() => new Room());

  // Get the participants from the room
  const { participants } = useRoom(room);

  useEffect(() => {

    AudioSession.startAudioSession();
    room.connect(url, token, {})
    if (participants.length > 0) {

    }



    return () => {
      room.disconnect();
      AudioSession.stopAudioSession();
    };

  }, [url, token, room]);



  return (
    <View style={styles.container}>
      <Text>On react native expo</Text>
      {participants.length > 0 && <VideoView
        style={{ height: 200, width: 200 }}
        videoTrack={participants[0].getTrack(Track.Source.Camera)?.videoTrack}
      />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
