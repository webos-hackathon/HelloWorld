# JS-Service
In this section, we will cover JavaScript services (JS services) for WebOS TV apps.

## Prerequisite
JS-Service is created using Node.js. Download and install NodeJS from the official link. 
http://www.nodejs.org/
npm(node package manager) will also be installed.
<br/>To check if node and npm is successfully installed in your environment, use the following command
```
node -v // check node version
npm -v // check npm version
```
WebOS TV supports the different versions of Node.js core modules depending on the WebOS TV platform version as below.
| WebOS TV platform version	| Node.js version |
| ------ | ------ |
| WebOS TV 23	| v12.22.2 |
| WebOS TV 22 | v12.21.0 |
| WebOS TV 6.0 |	v12.14.1 |
| WebOS TV 5.0 |	v8.12.0 |
| WebOS TV 4.x |	v0.12.2 |
| WebOS TV 3.x |	v0.12.2 |
| WebOS TV 2.x |	v0.10.25 |
| WebOS TV 1.x |	v0.10.15 |

If your node/npm needs to be updated to a later version, you could use the n package from npm.
https://www.npmjs.com/package/n

## What is JS-Service
JavaScript services (JS services) on WebOS provide the way for apps to do work, even when the app isn't running. They also provide access to platform features that aren't usually available to web apps.
<br/>JS service on WebOS TV has the following characteristics:
* It is written in JavaScript and created using Node.js.
* It runs in the background on WebOS TV.
* It provides additional access to platform features such as low-level networking, file system access, and binary data processing.
* It performs tasks for one or more apps.

Typically you will use a service either to perform tasks that a WebOS app can't do or to do work by service in the background. <br/>Some examples of how services have been used in WebOS apps in the past include:
* Downloading attachments in the background for an email reader
* Uploading images to a picture-sharing website from an app
* Performing a long-running computation or file operation

## Building your first JS Service

We can create a new JS Service with the ares-generate command. In this example, We are going to create a JS service with the service id "com.sample.helloworldservice"
```
ares-generate -t js_service -s com.sample.helloworldservice service
```

## JS Service Template
The WebOS TV platform provides templates for JS service.
<br/>HelloWorldService follows this template.
| Directory / File | Description |
| ------ | ------ |
|helloworld_service.js|The sample JS service code that provides several simple commands. These commands are specified in the services.json file to use them.|
|package.json|The configuration file of NPM.|
|services.json|The configuration file defines what commands the service provides on the WebOS bus.|

## Calling JavaScript service
### Importing JS service
You can call webOS services using the webOSTV.js library on the webOS TV platform. The webOSTV.js library is basically included in the basic template of the CLI.
<br/>In our basic web app from "01.First-app", you can see that the webOSTV.js library is imported in the index.html file.
```hmtl
<script src="webOSTVjs-1.2.4/webOSTV-dev.js" charset="utf-8"></script>
```
### Calling services from web app
Any application can include webOSTV.js and make webOS service calls using the webOS.service.request method.
```javascript
var subscribeStatus = true; //change this to false to disable subscription
var resubscribeStatus = true; //change this to false to disable resubscription

var request = webOS.service.request("luna://com.mycom.helloworld/", {
    method:"someMethod",
    parameters: {
        foo:"bar"
    },
    onSuccess: function(inResponse) {
        //....
    },
    onFailure: function(inError) {
        //....
    },
    onComplete: function(inResponse) {
        //....
    },
    subscribe: subscribeStatus,
    resubscribe: resubscribeStatus
});
```
### Calling services from another service
Any service can include webOSTV.js and make webOS service calls using the service.call method as the following example.
```javascript
var Service = require('webos-service');
var service = new Service("com.palm.service.helloworld");
service.register("hello", function(message) {
    service.call("luna://com.palm.connectionmanager/getstatus", {}, function(response) {
        console.log(response.payload);
        if(response.payload.isInternetConnectionAvailable == true) {
            // ...
            message.respond({
                "returnValue": true
            });
        }
    });
});
```
## Luna Service
There are also predefined services called Luna Service. 
<br/>WebOS TV provides the Luna Service that consists of essential services and features for WebOS TV. Each service and feature provide application programming interface (API) and its methods for you. The following APIs are supported on WebOS TV simulator.
* [Activity Manager](https://webostv.developer.lge.com/develop/references/activity-manager)
Monitors various parts of the system, and launches services when the corresponding events happen. Activities can also be used to schedule work, periodically, or at particular times.
* [Application Manager](https://webostv.developer.lge.com/develop/references/application-manager)
The Application Manager provides the launch method to launch a specified application. You can launch an app directly by using the launch method with the specified app ID and appropriate arguments.
* [Connection Manager](https://webostv.developer.lge.com/develop/references/connection-manager)
Provides the status of available Internet connections.
Connection manager provides methods for managing Internet connections. It enables apps to get the status of connections.
* [Database](https://webostv.developer.lge.com/develop/references/database)
Enables apps to store persistent data.
* [Device Unique ID](https://webostv.developer.lge.com/develop/references/device-unique-id)
Provides app security and authentications services such as app signature verification.
* [Media Database](https://webostv.developer.lge.com/develop/references/media-database)
Enables apps to store large media-related datasets persistently.
* [Magic Remote](https://webostv.developer.lge.com/develop/references/magic-remote) - Only getSensorData method is supported.
Provides methods related to the magic remote sensor.
* [Settings Service](https://webostv.developer.lge.com/develop/references/settings-service)
Provides a method for retrieving system setting value.
* [System Service](https://webostv.developer.lge.com/develop/references/system-service)
Provides information about the system time. Apps can subscribe to this method to get system time updates.
* [TV Device Information](https://webostv.developer.lge.com/develop/references/tv-device-information)
Provides a method for retrieving TV system information. This API is used to check the version of webOS TV and its features.

## Examples of implementing services in your app
Please refer to the HelloWorldService & LunaService app.

## Reference
* https://webostv.developer.lge.com/develop/guides/js-service-basics
* https://webostv.developer.lge.com/develop/references/luna-service-introduction

