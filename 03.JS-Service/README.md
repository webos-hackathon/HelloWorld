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
webOS TV supports the different versions of Node.js core modules depending on the webOS TV platform version as below.
| webOS TV platform version	| Node.js version |
| ------ | ------ |
| webOS TV 23	| v12.22.2 |
| webOS TV 22 | v12.21.0 |
| webOS TV 6.0 |	v12.14.1 |
| webOS TV 5.0 |	v8.12.0 |
| webOS TV 4.x |	v0.12.2 |
| webOS TV 3.x |	v0.12.2 |
| webOS TV 2.x |	v0.10.25 |
| webOS TV 1.x |	v0.10.15 |

If your node/npm needs to be updated to a later version, you could use the n package from npm.
https://www.npmjs.com/package/n

## What is JS-Service
JavaScript services (JS services) on webOS provide the way for apps to do work, even when the app isn't running. They also provide access to platform features that aren't usually available to web apps.
<br/>JS service on webOS TV has the following characteristics:
* It is written in JavaScript and created using Node.js.
* It runs in the background on webOS TV.
* It provides additional access to platform features such as low-level networking, file system access, and binary data processing.
* It performs tasks for one or more apps.

Typically you will use a service either to perform tasks that a webOS app can't do or to do work by service in the background. <br/>Some examples of how services have been used in webOS apps in the past include:
* Downloading attachments in the background for an email reader
* Uploading images to a picture-sharing website from an app
* Performing a long-running computation or file operation

## Building your first JS Service

We can create a new JS Service with the ares-generate command. In this example, We are going to create a JS service with the service id "com.sample.helloworldservice"
```
ares-generate -t js_service -s com.sample.helloworldservice HelloWorldService
```
We will use this JS Service in the later section, "04.WebOS-TV-Sample-Apps"
