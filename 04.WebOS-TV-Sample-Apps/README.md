# WebOS-TV-Sample-Apps
In this section, we will observe a few sample WebOS-TV apps to see what kind of features we can implement in our apps. The apps we will cover are given as bellow.
* AppLifeCycle https://github.com/webOS-TV-app-samples/AppLifecycle
* Remote Control https://github.com/webOS-TV-app-samples/RemoteControl
* Back Button Control https://github.com/webOS-TV-app-samples/BackButtonControl
* Hello World Service(webOS TV service) https://github.com/webOS-TV-app-samples/HelloWorldService
* Luna Service https://github.com/webOS-TV-app-samples/LunaService
* Database https://github.com/webOS-TV-app-samples/DB8
* Web Storage https://github.com/webOS-TV-app-samples/WebStorage

We will focus on how the WebOS feature is implemented, rather than the entire structure of the sample app.

## AppLifeCycle
The app lifecycle for WebOS TV app can be explained based on the possible states of an app and transitions between them.
![image](https://github.com/youngheoncho/webos-hackathon/assets/111717000/2536801c-1563-47d0-95be-2c65841956bc)
<br/>The sample app shows how we can handle these events.

### webOSLaunch Event
Shows a message when the app is launched.
```javascript
document.addEventListener(
  "webOSLaunch",
  function (inData) {
    var launchElement = document.getElementById("launch");
    launchElement.innerHTML = "App Launched";
  },
  true
);
```
### webOSRelaunch Event
Shows a message when the app is launched.
```javascript
document.addEventListener(
  "webOSRelaunch",
  function (inData) {
    var launchElement = document.getElementById("reLaunch");
    launchElement.innerHTML = "App Relaunched";
  },
  true
);
```
### visibilityChange Event
The `visibilityChange` event is fired when the app changes from visible to hidden or vice versa. The webOS TV sends the `onwebkitvisibilitychange` event to the app, and the app can have an event handler to manage the actions for its visible or hidden state.

```javascript
var hidden, visibilityChange;

if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
```

To handle the `visibilityChange` event, you have to add the event listener to the document object. This sample app shows
a message when the visibility of the app is changed.

```javascript
document.addEventListener(
  visibilityChange,
  function () {
    if (document[hidden]) {
      var visibilityElement = document.getElementById("visibility");
      visibilityElement.innerHTML = "App Hidden";
    } else {
      var visibilityElement = document.getElementById("visibility");
      visibilityElement.innerHTML = "App Shown";
    }
  },
  true
);
```

## Remote Control

## Back Button Control
## Hello World Service(WebOS TV service)
## Luna Service
## Database
## Web Storage
