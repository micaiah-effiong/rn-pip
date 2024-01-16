package com.rnpip;

import android.app.PictureInPictureParams;
import android.content.pm.PackageManager;
import android.util.Log;
import android.util.Rational;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;

@ReactModule(name = RnPipModule.NAME)
public class RnPipModule extends ReactContextBaseJavaModule {
  public static final String NAME = "RnPip";
  public static final String PIP_MODE_CHANGE = "PIP_MODE_CHANGE";
  private static DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter = null;

  ReactApplicationContext reactApplicationContext;

  public static void pipModeChanged(Boolean isInPictureInPictureMode) {
    Log.d("RN_PIP", "PIP Mode changed");
    Log.d("RN_PIP", "is in pip ".concat( isInPictureInPictureMode ? "true" : "false"));
    eventEmitter.emit(PIP_MODE_CHANGE, isInPictureInPictureMode);
  }

  public RnPipModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactApplicationContext = reactContext;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  @Override
  public void initialize() {
    super.initialize();

    eventEmitter = getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void enterPictureInPictureMode(int width, int height) {
     if(isInPipMode()){
       return;
     }

    PackageManager pm = reactApplicationContext.getPackageManager();
    if(!pm.hasSystemFeature(PackageManager.FEATURE_PICTURE_IN_PICTURE)){
      return;
    }

    if (android.os.Build.VERSION.SDK_INT < android.os.Build.VERSION_CODES.O) {
      return;
    }

   // 300, 214
    int ratWidth = width > 0 ? width : 380;
    int ratHeight = height > 0 ? height : 214;

    PictureInPictureParams.Builder pipBuilder = new PictureInPictureParams.Builder();
    Rational ratio = new Rational(ratWidth, ratHeight);
    pipBuilder.setAspectRatio(ratio);
    PictureInPictureParams params = pipBuilder.build();

    reactApplicationContext.getCurrentActivity().enterPictureInPictureMode(params);
  }


  @ReactMethod
  public boolean isInPipMode() {
    return reactApplicationContext.getCurrentActivity() != null && reactApplicationContext.getCurrentActivity().isInPictureInPictureMode();
  }
}
