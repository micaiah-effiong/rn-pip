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

export function enterPictureInPictureMode() {
  if (!isAndroid()) {
    return;
  }

  return RnPip.enterPictureInPictureMode();
}

const PipEventEmitter = isAndroid() ? new NativeEventEmitter(RnPip) : null;

export function onPipModeChanged(listener: (isModeEnabled: boolean) => void) {
  if (!isAndroid()) {
    return;
  }
  return PipEventEmitter?.addListener('PIP_MODE_CHANGE', listener);
}

export function enableAutoPipMode(enable: boolean) {
  if (!isAndroid()) {
    return;
  }
  RnPip.enableAutoPipMode(enable);
}

export function usePipModeListener(): boolean {
  const [isModeEnabled, setIsPipModeEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (!isAndroid()) {
      return;
    }

    let pipListener: EmitterSubscription | undefined =
      onPipModeChanged(setIsPipModeEnabled);

    return () => {
      pipListener?.remove();
    };
  }, []);

  return isModeEnabled;
}

function isAndroid() {
  return Platform.OS === 'android';
}

export default {
  enterPictureInPictureMode,
  usePipModeListener,
  enableAutoPipMode,
};
