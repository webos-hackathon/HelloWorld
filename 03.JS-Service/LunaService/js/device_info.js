function getWebOSDeviceInfo(keys, handleFunc) {
  return webOS.service.request("luna://com.webos.service.tv.systemproperty", {
    method: "getSystemInfo",
    parameters: {
      keys: keys, // ["modelName", "firmwareVersion", "UHD", "sdkVersion"],
    },
    onComplete: function (inResponse) {
      var isSucceeded = inResponse.returnValue;

      if (isSucceeded) {
        console.log("Result: " + JSON.stringify(inResponse));
        handleFunc(inResponse);
      } else {
        console.log("Failed to get TV device information");
        // To-Do something
        return;
      }
    },
  });
}
