import * as React from 'react';

import { StyleSheet, View, Text, Button, type ViewStyle } from 'react-native';
import RnPipHandler, {
  enterPictureInPictureMode,
  enableAutoPipMode,
} from 'rn-pip';

export default function App() {
  const inPipMode = RnPipHandler.usePipModeListener();
  const [autoPipMode, setAutoPipMode] = React.useState(true);

  const handleEnterPipMode = () => {
    RnPipHandler.setDisplay(214, 380);

    // RnPipHandler.enterPictureInPictureMode(); // or
    enterPictureInPictureMode();
  };

  React.useEffect(() => {
    enableAutoPipMode(autoPipMode);
  }, [autoPipMode]);

  if (inPipMode) {
    return (
      <View style={styles.container}>
        <Text>Pip Mode {inPipMode.toString()}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button onPress={handleEnterPipMode} title="Enter pip Mode" />
        <Text>Pip Mode {inPipMode.toString()}</Text>
      </View>

      <View style={styles.box}>
        <Button
          onPress={() => setAutoPipMode((prev) => !prev)}
          title={`${autoPipMode ? 'Disable' : 'Enable'} auto pip modes`}
        />
        <Text>Auto Pip Mode {autoPipMode.toString()}</Text>
      </View>
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
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});
