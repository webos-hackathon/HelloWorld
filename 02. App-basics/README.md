# App-basics
In this guide, we will look into the basic structure of an WebOS TV app.<br/>
We will also look into how developers can debug the app.<br/>
This guide will cover the following materials:
* App-Templates
* App Debugging

## App-Templates
To help accelerate app development, the WebOS TV platform provides templates for web apps, both basic (packaged) and hosted web app.<br/>
The basic web app and hosted web app created using CLI in "01.First-app" follows this template.

### Basic web app
The basic web app created in "01.First-app" consists of the following directory/files.
| Directory / File | Description |
| ------ | ------ |
|WebOSTVjs-x.x.x|The WebOS TV library directory. The WebOSTV.js is a portable library to access TV-specific features and functionality for WebOS TV. The WebOS TV-specific library uses Luna Service API which consists of essential services and features for WebOS TV. |
|appinfo.json|The web app configuration file. The appinfo.json file includes metadata of the web app. This file must exist for packaging the web app.|
|icon.png|The icon image file. This image is displayed on system notifications|
|largeicon.png|The large icon image file. This image is displayed on the top left corner of the screen, when the user hovers over an app tile on the Launcher|
|index.html|The web app's main page. This page only shows "Hello World" text on a screen.|

### Hosted web app
The hosted web app created in "01.First-app" consists of the following directory/files.
| Directory / File | Description |
| ------ | ------ |
|appinfo.json|The web app configuration file. The appinfo.json file includes metadata of the web app. This file must exist for packaging the web app.|
|icon.png|The icon image file. This image is displayed on system notifications|
|largeicon.png|The large icon image file. This image is displayed on the top left corner of the screen, when the user hovers over an app tile on the Launcher|
|index.html|The web app's main page that contains the redirect URL.|

### Web app info
The web app info template provides an appinfo.json file with sample values. The appinfo.json file holds the app's name, ID, app type, icon image, and the main page information to the file.<br/>
appinfo.json for the WebOS-TV apps created with CLI follow this template. Here is an example.

    {
        "id": "com.domain.app",
        "version": "0.0.1",
        "vendor": "My Company",
        "type": "web",
        "main": "index.html",
        "title": "new app",
        "icon": "icon.png",
        "largeIcon": "largeIcon.png"
    }
The following properties are mandatory for appinfo.json
| property | Description |
| ------ | ------ |
|id|String type. Specify your app ID.|
|title|Specify the app title to be shown on the Launcher and the app window.|
|type|Specify your app type. Only web is allowed currently.|
|main|Specify the launch point for your app. The file path must be relative to the appinfo.json file and needs to point to an HTML file.|
|icon|Specify the small icon file of your app, 80x80 pixels in PNG format.The file path must be relative to the appinfo.json file.|
|version|Specify your app version number, comprised of three non-negative integers separated by period.|

The following properties are optional for appinfo.json
| property | Description |
| ------ | ------ |
|vendor|Specify your app owner to be used in the launcher and deviceinfo dialogs.|
|largeIcon|Specify your large icon file of your app, 130x130 pixels in PNG format. The file path must be relative to the appinfo.json file.|

## App Debugging
### Debugging with simulator
Simulator is provided with an inspector, which is launched automatically when the app is run.
<br/>In the simulator, go to Tools - Inspector.
### Debugging app on TV
The webOS TV platform supports Web Inspector for debugging web apps. Web Inspector monitors your app running on a target device with the execution information. Web Inspector uses the Chromium browser as a default browser.

To run web inspector for your app, use the ares-inspect command. For example,
```
ares-inspect --device tv1 com.domain.app
```
App will start running on your TV and you will recieve a address where the inspector is run.

## Reference
* https://webostv.developer.lge.com/develop/getting-started/app-template
* https://webostv.developer.lge.com/develop/getting-started/app-resources
* https://webostv.developer.lge.com/develop/references/appinfo-json
