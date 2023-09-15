# First-app
This guide will go through the procedures necessary to build your first TV app

## WebOS-TV-App
We will create a basic web app(packaged web app) & hosted web app
### Basic web app
It is the most basic type of an app for webOS TV, and it can be referred to as a packaged web app as it is provided as a package.

You sumbit the package of your app where all the resources are included, and when a user downloads the package and installs the app, the resources will also be installed in their device. So when there is a change to the package, code or resources, you need to submit a new package with the change.

![image](https://github.com/youngheoncho/webos-hackathon/assets/111717000/0bee5961-cc9e-4385-9be7-a9a6a9e7637a)


### Hosted web app
In a hosted web app, the actual content of the app is hosted on a remote web server. So, it is composed of a local dummy app that a user will download and install on their device and a web app that actually hosts the content on the remote web server.

When a user launches the local app on their device, the URL of the app is redirected to the web app on the web server, and the resources are downloaded from the server to the device.

![image](https://github.com/youngheoncho/webos-hackathon/assets/111717000/56d15eea-182a-4ae9-ac14-23a724458d57)

Since the actual content of a hosted web app resides in the remote web server, you can update the content, of course, including code for new features, at any time without having to worry about pushing updates to devices. So if your app is expected to go through a lot of changes, you may need to consider a hosted web app. However, its performance depends on the quality of connection to the server to download the content from the server, and operating and maintaining the remote server costs. Therefore, considering the characteristics of your app, select the right type.

## Prerequisite
follow the instructions of the guide below to install the necessary tools
* CLI(command line interface) https://webostv.developer.lge.com/develop/tools/cli-installation : Interface providing collection of commands used for creating, packaging, installing, and launching web apps
<br> Here is an example of the commands provided by CLI.

| CLI Command | Feature |
| ------ | ------ |
|ares-generate|Creating an app from templates|
||Creating JS service files|
||Creating an appinfo.json file|
|ares-package|Packaging an app in minify or non-minify mode|
||Packaging an app and js service into a pakage file (.ipk)|
||Analyzing an app package file|

* WebOS TV Simulator https://webostv.developer.lge.com/develop/tools/simulator-installation : Simulator for launching app in PC
* Developer Mode App https://webostv.developer.lge.com/develop/getting-started/developer-mode-app : TV app to help install your app. Requires LG account.

follow the guide below to prepare an LG account.
https://webostv.developer.lge.com/develop/getting-started/preparing-lg-account

## Building your first app

### 1. Create an app with CLI
1. Download and install WebOS TV CLI.
2. Create a new app with the ares-generate command. With this example, you will use a template named basic to generate a new app.
```
ares-generate -t basic ./sampleApp
```
3. Type in app id, title, and version.
If the app is successfully generated, you will see Success.

### 2. Launch app on the simulator
1. Download and install the WebOS TV Simulator.
2. Launch your app on the simulator with the area-launch command.
```
ares-launch -s 23 ./sampleApp
```
If the app is successfully launched, you will see Hello, World! on the simulator.
![](https://github.com/youngheoncho/webos-hackathon/blob/main/01.First-app/images/hello_world.png?raw=true)

### 3. Package, install, and launch the app on a TV device

1. Package the app in the sampleApp directory with the ares-package command.

```
ares-package ./sampleApp
```
If packaging is successful, you can see the created package (.ipk) file in the current working directory.
2. Install the package file to the TV device with the ares-install command. Be sure to type correctly the file name of your package.
```
ares-install -d myTV com.domain.app_0.0.1_all.ipk
```
Launch the app on the TV device with the area-launch command.
```
ares-launch -d myTV com.domain.app
```
If the app is successfully launched, you will see Hello, World! on the TV device.
![](https://github.com/youngheoncho/webos-hackathon/blob/main/01.First-app/images/hello_world.png?raw=true)

### 4. Create an hosted web app
A basic web app(or packaged webapp) like the one we created in section 1."Create an app with CLI" is provided as a complete package.
In a hosted web app, the actual content of the app is hosted on a remote web server.
We can create a hosted web app with the following command.
```
ares-generate -t hosted_webapp ./sampleHostedApp
```
The address of the remote web server is set in the index.html file created. We can redirect to a new address by modifying the index.html file.
```
<!DOCTYPE html>
<html>
<head>
	<script>location.href='https://webostv.developer.lge.com/develop/getting-started/build-your-first-web-app';</script>
</head>
<body>
</body>
</html>
```
Procedures for launching the app on the simulator or TV device is identical to the procedures for the basic web app.

## Reference
* https://webostv.developer.lge.com/develop/getting-started/web-app-types#hosted-web-app
* https://webostv.developer.lge.com/develop/getting-started/build-your-first-web-app
* https://webostv.developer.lge.com/develop/getting-started/web-app-types
