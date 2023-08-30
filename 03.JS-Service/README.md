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

## Luna Service
There are also predefined services called Luna Service. 
<br/>WebOS TV provides the Luna Service that consists of essential services and features for WebOS TV. Each service and feature provide application programming interface (API) and its methods for you.

## How to implement services in your app
Please refer to the HelloWorldService & LunaService app.
