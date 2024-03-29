package com.rnpipexample

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.rnpip.RnPipModule

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "RnPipExample"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onPictureInPictureModeChanged(isInPictureInPictureMode: Boolean) {
    RnPipModule.pipModeChanged(isInPictureInPictureMode)
  }

  override fun onUserLeaveHint() {
    if (RnPipModule.ENABLE_AUTO_PIP_MODE) {
      RnPipModule.enterPipMode()
    }
  }
}
