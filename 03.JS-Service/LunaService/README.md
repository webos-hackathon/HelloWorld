# Luna Service
This sample shows how to call luna service APIs using [service.request()](https://webostv.developer.lge.com/develop/references/webostvjs-webos#request) method in webOSTV.js library. This sample calls the following luna service APIs.
- [TV Device Information](https://webostv.developer.lge.com/develop/references/tv-device-information)
- [Settings Service](https://webostv.developer.lge.com/develop/references/settings-service)
- [System Service](https://webostv.developer.lge.com/develop/references/system-service)

## Calling luna service
Here is the sample code for how to call luna service using webOSTV.js library.
```javascript
function getWebOSSystemTime(handleFunc, subscribe) {
  return webOS.service.request("luna://com.palm.systemservice", {
    method: "time/getSystemTime",
    parameters: { subscribe: subscribe },
    onSuccess: function (inResponse) {
      if (!inResponse.subscribed) {
        console.log("Failed to subscribe the system time information");
        return;
      }
      console.log("Result: " + JSON.stringify(inResponse));
      handleFunc(inResponse);
    },
    onFailure: function (inError) {
      console.log("Failed to get system time information");
      console.log("[" + inError.errorCode + "]: " + inError.errorText);
      // To-Do something
      return;
    },
  });
}
```