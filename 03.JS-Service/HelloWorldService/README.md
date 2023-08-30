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


### Running the app & service in WebOS TV
