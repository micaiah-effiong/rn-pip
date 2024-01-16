import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import {
  multiply,
  enterPictureInPictureMode,
  usePipModeListener,
  enableAutoPipMode,
} from 'rn-pip';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  // const appState = useRef(AppState.currentState);
  const inPipMode = usePipModeListener();

  React.useEffect(() => {
    multiply(3, 6).then(setResult);
  }, []);

  React.useEffect(() => {
    enableAutoPipMode(true);
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
      <Text>Pip Mode {inPipMode.toString()}</Text>
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
