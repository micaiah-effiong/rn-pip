---
sidebar_position: 3
---

# 🔌 Usage

Now that you must have configured Rn-pip in your project. Here is a simple use case.

```jsx  title="/src/components/PipCode.jsx"

import PipHandler, { usePipModeListener } from 'rn-pip';

export default function App() {
  // Use this boolean to show / hide ui when pip mode changes
  const inPipMode = usePipModeListener();

  if (inPipMode) {
    return (
      <View style={styles.container}>
        <Text>PIP Mode</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        These text components will be hidden in pip mode
      </Text>
      <TouchableOpacity
        onPress={() => PipHandler.enterPictureInPictureMode(300, 214)}
        style={styles.box}
      >
        <Text>Click to Enter Pip Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

```
