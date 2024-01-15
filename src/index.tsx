import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-pip' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RnPip = NativeModules.RnPip
  ? NativeModules.RnPip
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return RnPip.multiply(a, b);
}

export function enterPictureInPictureMode(width?: number, height?: number) {
  if (Platform.OS !== 'android') {
    return;
  }

  return RnPip.enterPictureInPictureMode(
    width ? Math.floor(width) : 0,
    height ? Math.floor(height) : 0
  );
}
