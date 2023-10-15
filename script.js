//your JS code here. If required.
  var browserName = navigator.appName;
        var version = navigator.appVersion;

        // Display the browser information in the div with id "browser-info"
        var browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = "You are using " + browserName + " version " + version;