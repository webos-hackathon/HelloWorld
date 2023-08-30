function monitorSettingsChange(category, keys, handleFunc) {
  var parameters;
  if (category) {
    parameters = {
      category: category,
      keys: keys,
      subscribe: true,
    };
  } else {
    parameters = {
      keys: keys,
      subscribe: true,
    };
  }
  return webOS.service.request("luna://com.webos.settingsservice", {
    method: "getSystemSettings",
    parameters: parameters,
    onSuccess: function (inResponse) {
      if (typeof inResponse.subscribed != "undefined") {
        if (!inResponse.subscribed) {
          console.log("Failed to subscribe settings' value");
          return;
        }
      }
      console.log("Result: " + JSON.stringify(inResponse));
      handleFunc(inResponse);
    },
    onFailure: function (inError) {
      console.log("Failed to get settings' value");
      console.log("[" + inError.errorCode + "]: " + inError.errorText);
      // To-Do something
      return;
    },
  });
}
