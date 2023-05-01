# How to install @livekit/react-native on expo dev build

1. install react-native-webrtc first ```npx expo install react-native-webrtc @config-plugins/react-native-webrtc```
2. add config plugin for react-native-webrtc in app.json
```json
{
  "expo": {
    ...
    // add this
    "plugins": ["@config-plugins/react-native-webrtc"]
    ...
  }
}
```
3. setup expo dev client [here](https://docs.expo.dev/develop/development-builds/create-a-build/?redirected) 

4. run ```eas build --profile development --local``` to create dev build

5. install the build client to your mobile device 

6. update ```url``` and ```token``` with your livekit url and token ```App.tsx''' and then it should work.


Currently I only test IOS dev build and it works, for Android, I didn't test it yet. 
