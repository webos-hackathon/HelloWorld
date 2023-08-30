# First-app
This guide will go through the procedures necessary to build your first TV app

## Prerequisite
follow the instructions of the guide below to install the necessary tools
* CLI(command line interface) https://webostv.developer.lge.com/develop/tools/cli-installation : Interface providing collection of commands used for creating, packaging, installing, and launching web apps
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
![](http://mod.lge.com/hub/youngheon.cho/webos-hackerthon/-/raw/main/01.first-web-app/images/hello_world.png)

### 3. Package, install, and launch the app on a TV device

1. Package the app in the sampleApp directory with the 
```
ares-package command.
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
![](http://mod.lge.com/hub/youngheon.cho/webos-hackerthon/-/raw/main/01.first-web-app/images/hello_world.png)

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
* https://webostv.developer.lge.com/develop/getting-started/build-your-first-web-app
* https://webostv.developer.lge.com/develop/getting-started/web-app-types
