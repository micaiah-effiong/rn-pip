---
sidebar_position: 1
---

# 💡 Introduction

Let's discover **Rn-pip in less than 5 minutes**.

Enhance the user experience of your React Native apps using **Rn-pip**'s Picture in Picture functionality.
Our package includes **seamless integration** and **simple deployment**, allowing your users to multitask while enjoying your app's content.

<!-- ## Motivation -->

## Enough of this chatter; show me some code!

```jsx title="/src/components/PipCode.jsx"
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

## So, now that you've talked me into it, what happens?

- Consider [Installing Rn-pip](/docs/getting-started/installation) in your project

<!-- - Learn more about Rn-pip by [Playing around](/docs/getting-started/playground) -->
