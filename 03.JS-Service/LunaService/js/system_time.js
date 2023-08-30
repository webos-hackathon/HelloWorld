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
