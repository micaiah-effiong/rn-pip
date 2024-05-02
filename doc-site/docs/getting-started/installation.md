---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 👨‍💻 Installation
Installing the Rn-pip package is as simple as running a  single command, making it effortlessly accessible for all developers.

You can install Rn-pip via any of your favourite package managers; [NPM](https://www.npmjs.com/) , [Yarn](https://yarnpkg.com/) or [Pnpm](https://pnpm.io/)

<Tabs>
  <TabItem value="npm" label="npm" default>
    ```bash
   npm install rn-pip
    ```
  </TabItem>

  <TabItem value="yarn" label="yarn">
    ```bash
    yarn add rn-pip
    ```
  </TabItem>

  <TabItem value="pnpm" label="pnpm">
     ```bash
     pnpm add rn-pip
    ```
  </TabItem>
</Tabs>

<!-- :::tip -->
<!--  Do you want to try it out before you download? Try out a simple [Demo](/docs/getting-started/playground) -->
<!--  :::: -->

### Requirements
 Rn-pip is optimized for building mordern apps. To have a seemless integration, ensure to have the following ;

- [Nodejs](https://nodejs.org/en) version 16 or above (which can be checked by running `node -v`). With [nvm](https://github.com/nvm-sh/nvm),
 several Node versions installed on a single machine may be managed.

- [React Native](https://reactnative.dev/) version 0.70 or above

- Platform Support: The  PiP functionality of Rn-pip  is currently limited to Android due to native platform limitations.

- Android Version :  Android 8.0 (API level 26)

- AndroidManifest.xml Configuration:
    - Add `android:supportsPictureInPicture="true"` to the activity declaration for the video component.
    - Consider including `android:resizeableActivity="true"` for better PiP window resizing behavior (optional).

