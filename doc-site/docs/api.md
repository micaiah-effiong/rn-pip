---
sidebar_position: 3
---

# 🤝 API Reference

## Hooks

### `usePipModeListener`

A React hook to indicate the Picture-in-Picture state of the application. It Returns a boolean value

#### Usage Example

```tsx
function MyApp() {
  const inPipMode = RnPipHandler.usePipModeListener();

  if (inPipMode) {
    return (
      <View>
        <Text>Pip Mode Active</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Pip Mode not active</Text>
    </View>
  );
}
```

## Functions

### `enterPictureInPictureMode`

This function activates Pip-mode

#### Usage Example

```tsx
function MyButton() {
  const handleEnterPipMode = () => {
    RnPipHandler.enterPictureInPictureMode();
  };

  return (
    <View>
      <Button onPress={handleEnterPipMode} title="Enter pip Mode" />
    </View>
  );
}
```

### `enableAutoPipMode`

When enabled `rn-pip` listens for android [`userLeaveHint`](<https://developer.android.com/reference/android/app/Activity#onUserLeaveHint()>)

For this to work make sure you have configured `onUserLeaveHint` in your `MainActivity.java` or `MainActivity.kt`

[@see configuration](/docs/getting-started/configuration)

#### Signature

```ts
function enableAutoPipMode(enable: boolean): void;
```

#### Usage Example

```tsx
function MyButton() {
  const handleAutoPipMode = () => {
    RnPipHandler.enableAutoPipMode(true);
  };

  return (
    <View>
      <Button onPress={handleAutoPipMode} title="Enable auto pip Mode" />
    </View>
  );
}
```
