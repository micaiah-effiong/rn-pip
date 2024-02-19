---
sidebar_position: 2
---

# Configuration

To get Rn-pip working properly, the below code snippets demonstrates how to configure Rn-pip for various settings.
The first snippet is a basic setup , while the second snippet allows you to subscribe to changes in the pip(picture in picture)  mode

Add the following attrs in `/android/app/src/main/AndroidManifest.xml` file



```xml title="/android/app/src/main/AndroidManifest.xml"

  <activity
    ...
      android:supportsPictureInPicture="true"
      android:configChanges=
        "screenSize|smallestScreenSize|screenLayout|orientation"
        ...

```

To subscribe to changes(ie recieve updates) in the pip mode , add the following code to  your `MainActivity.java` file.

```java title="MainActivity.java"

...
import com.rnpip.RnPipModule;


public class MainActivity extends ReactActivity {

...

  @Override
  public void onPictureInPictureModeChanged (boolean isInPictureInPictureMode, Configuration newConfig) {
    RnPipModule.pipModeChanged(isInPictureInPictureMode);
  }


  @Override
  public void onUserLeaveHint() {
    if (RnPipModule.ENABLE_AUTO_PIP_MODE) {
      RnPipModule.enterPipMode()
    }
  }

```
