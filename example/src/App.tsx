import * as React from 'react';
import { useRef } from 'react';

import { StyleSheet, View, Text, Button, AppState } from 'react-native';
import { multiply, enterPictureInPictureMode } from 'rn-pip';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const appState = useRef(AppState.currentState);

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App came forward');
      } else {
        console.log('App went back');
        /** activate pip */
        enterPictureInPictureMode(300, 400);
      }

      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={() => enterPictureInPictureMode()}
          title="Enter pip Mode"
        />
      </View>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
