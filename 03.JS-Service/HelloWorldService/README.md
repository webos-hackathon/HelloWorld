# HelloWorldService
This sample shows how to implement your Javascript service in your WebOS app.
<br/>This sample consists of a basic web app(refer to app directory) and Javascript service(refer to service directory)

## Calling Javascript Service
Here is the sample code for how to call your Javascript service using webOSTV.js library.
```javascript
  webOS.service.request("luna://com.sample.helloworld.service/", {
    method: "hello",
    parameters: { name: value },
    onFailure: showFailure,
    onSuccess: showSuccess,
  });
```
### Running the app & service in a simulator
To run the app & service in the simulator, execute the following procedure.
1. Run the web-app in the simulator
```
ares-launch -s 23 ./app
```
2. In the simulator, go to Tools - Service List.
in the JS Service popup, click the '+' icon and then choose your JS service directory('service' in this example).
3. JS service will be added, and it can now be called from your app.

### Running the app & service in WebOS TV
To run the app & service in the simulator, execute the following procedure.
1. Package your app and service file into an .IPK file using WebOS-CLI command.
```
ares-package app service
```
2. Install the package to your TV device
```
ares-install -d myTV com.sample.helloworld_0.0.1_all.ipk
```
3. Launch the app in your TV device
```
ares-launch -d myTV com.sample.helloworld
```
