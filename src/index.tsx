import { useEffect, useState } from 'react';
import {
  NativeEventEmitter,
  NativeModules,
  Platform,
  type EmitterSubscription,
} from 'react-native';

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

const PipEventEmitter =
  Platform.OS === 'android' ? new NativeEventEmitter(RnPip) : null;

export function onPipModeChanged(listener: (isModeEnabled: Boolean) => void) {
  return PipEventEmitter?.addListener('PIP_MODE_CHANGE', listener);
}

export function usePipModeListener(): Boolean {
  const [isModeEnabled, setIsPipModeEnabled] = useState<Boolean>(false);

  useEffect(() => {
    let pipListener: EmitterSubscription | undefined;
    if (Platform.OS === 'android') {
      pipListener = onPipModeChanged(setIsPipModeEnabled);
    }

    return () => {
      pipListener?.remove();
    };
  }, []);

  return isModeEnabled;
}
