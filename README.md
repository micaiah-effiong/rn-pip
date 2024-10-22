# React Native Android Picture in Picture

Add picture in picture support to react native android application.
Also has a listener to notify the pip state change.

> **Note:** This package only works on android.

## Installation

Using npm

```sh
npm install rn-pip
```

or using yarn

```sh
yarn add rn-pip
```

## Setup

Add the following attrs in `/android/app/src/main/AndroidManifest.xml` file

```xml
  <activity
    ...
      android:supportsPictureInPicture="true"
      android:configChanges=
        "screenSize|smallestScreenSize|screenLayout|orientation"
        ...
```

If you don't have to recieve updates when the pip mode is entered or exited,
you are good to go. In order to subscribe to the changes in the pip mode, add the following code to `MainActivity.java`.

Add this import to the activity

JAVA

```java
...
import com.rnpip.RnPipModule;


public class MainActivity extends ReactActivity {

...

@Override
  public void onPictureInPictureModeChanged (boolean isInPictureInPictureMode, Configuration newConfig) {
    RnPipModule.pipModeChanged(isInPictureInPictureMode);
  }

  public void onUserLeaveHint() {
    RnPipModule.onUserLeaveHint()
  }
```

KOTLIN

```kotline
...
import com.rnpip.RnPipModule;


class MainActivity : ReactActivity() {

...

  override fun onPictureInPictureModeChanged(isInPictureInPictureMode: Boolean) {
    RnPipModule.pipModeChanged(isInPictureInPictureMode)
  }

  override fun onUserLeaveHint() {
    RnPipModule.onUserLeaveHint()
  }
```

## Usage

```js
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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
