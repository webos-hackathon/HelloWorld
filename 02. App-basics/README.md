# App-basics
In this guide, we will look into the basic structure of an WebOS TV app.<br/>
We will also look into how developers can debug the app.<br/>
This guide will cover the following materials:
* App-Templates
* App-Resources
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
The WebOS TV CLI provides the appinfo.json file template as below.

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

## App-Resources

## App Debugging

## Reference
https://webostv.developer.lge.com/develop/getting-started/app-template
https://webostv.developer.lge.com/develop/getting-started/app-resources
https://webostv.developer.lge.com/develop/getting-started/app-debugging
