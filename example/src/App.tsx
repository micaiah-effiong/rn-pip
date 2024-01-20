import * as React from 'react';

import { StyleSheet, View, Text, Button, type ViewStyle } from 'react-native';
import RnPipHandler, {
  enterPictureInPictureMode,
  enableAutoPipMode,
} from 'rn-pip';

export default function App() {
  const inPipMode = RnPipHandler.usePipModeListener();

  React.useEffect(() => {
    enableAutoPipMode(true);
  }, []);

  if (inPipMode) {
    return (
      <View style={styles.container}>
        <Text>Pip Mode {inPipMode.toString()}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={() => enterPictureInPictureMode()}
          title="Enter pip Mode"
        />
      </View>
      <Text>Pip Mode {inPipMode.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
