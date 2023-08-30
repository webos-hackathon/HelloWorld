(function () {
  var subscriptionHandle = [];

  window.addEventListener("load", function (event) {
    console.log("OnLoad");
    getWebOSDeviceInfo(
      ["modelName", "boardType", "firmwareVersion", "UHD", "sdkVersion"],
      handleDeviceInfo
    );
    subscriptionHandle[0] = getWebOSSystemTime(handleSystemTime, true);
    subscriptionHandle[1] = monitorSettingsChange(
      null,
      ["localeInfo"],
      handleLocaleInfo
    );
    subscriptionHandle[2] = monitorSettingsChange(
      "option",
      ["country", "smartServiceCountryCode2", "audioGuidance", "highContrast"],
      handleOptions
    );
    subscriptionHandle[3] = monitorSettingsChange(
      "caption",
      ["captionEnable"],
      handleCaption
    );
  });

  window.addEventListener("unload", function (event) {
    console.log("OnUnload");
    subscriptionHandle.forEach(function (elm) {
      elm.cancel();
    });
  });

  function findCssRule(ruleName) {
    var rules =
      document.styleSheets[0].cssRules || document.styleSheets[0].rules;

    for (var i = 0; i < rules.length; i++) {
      if (rules[i].selectorText === ruleName) {
        return rules[i];
      }
    }

    return null;
  }

  function handleDeviceInfo(res) {
    console.log("handleDeviceInfo");
    var deviceInfo = document.getElementById("devinfo");
    deviceInfo.innerHTML = "<pre>" + JSON.stringify(res, null, 2);
    +"</pre>";
  }

  function handleSystemTime(res) {
    console.log("handleSystemTime");
    var systemTime = document.getElementById("systime");
    systemTime.innerHTML = "<pre>" + JSON.stringify(res, null, 2);
    +"</pre>";
  }

  function handleLocaleInfo(res) {
    console.log("handleLocaleInfo");
    var localeInfo = document.getElementById("localeinfo");
    localeInfo.innerHTML =
      "<pre>" + JSON.stringify(res.settings.localeInfo, null, 2);
    +"</pre>";
  }

  function handleOptions(res) {
    console.log("handleOptions");
    var options = document.getElementById("options");
    options.innerHTML = "<pre>" + JSON.stringify(res.settings, null, 2);
    +"</pre>";
  }

  function handleCaption(res) {
    console.log("handleCaption");
    var caption = document.getElementById("caption");
    caption.innerHTML = "<pre>" + JSON.stringify(res.settings, null, 2);
    +"</pre>";
  }
})();
