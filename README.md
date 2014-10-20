livestate
=========

A webpage live state observer.


[Source](https://raw.githubusercontent.com/rokde/livestate/master/README.html "Permalink to ")


## Available Sensors

You get a bunch of already built sensors. They all try to set css classes to represent their current state. By default they use the `<html>` tag, but can be set to every single tag you want.

Some of the sensors can also be more explicit. They use the `data-` attribute on the tag. To activate this behaviour just add the `data-livestate="true"` attribute to your tag.

By default your html template starts like this `<html class="no-js" data-livestate="true">`. And livestate does the rest.


### JavascriptSensor

Built-in sensor for checking javascript availability.



| Represented State       | CSS Classes | Data Attribute |
| ----------------------- | ----------- | -------------- |
| No javascript available | no-js       | —              |
| Javascript available    | js          | —              |



### ConnectionSensor

The connection sensor observes the internet connection.



| Represented State | CSS Classes | Data Attribute            |
| ----------------- | ----------- | ------------------------- |
| Offline           | offline     | data-connection="offline" |
| Online            | online      | data-connection="online"  |



### CookieSensor

The cookie sensor observes the cookie availability.



| Represented State    | CSS Classes | Data Attribute |
| -------------------- | ----------- | -------------- |
| Cookies available    | cookies     | —              |
| No cookies available | no-cookies  | —              |



### Drag 'n Drop Sensor

The dnd sensor monitors all drag and drop operations.



| Represented State | CSS Classes | Data Attribute |
| ----------------- | ----------- | -------------- |
| Dragging          | dragging    | —              |
| Dropping          | dropping    | —              |



### UserAgentSensor

The user agent sensor determines the current useragent name and version. Interesting for mobile webapps to control behaviour and visibility of elements by the used browser control.



| Represented State  | CSS Classes | Data Attribute                  |
| ------------------ | ----------- | ------------------------------- |
| User agent         | safari      | data-useragent="Safari"         |
| User agent version | —           | data-useragent.version="537.36" |



### UserInputSensor

The user input sensor toggles the user input when user switches between mouse and keyboard.



| Represented State | CSS Classes | Data Attribute            |
| ----------------- | ----------- | ------------------------- |
| Mouse             | mouse       | data-userinput="mouse"    |
| Keyboard          | keyboard    | data-userinput="keyboard" |



### ViewportSensor

The viewport sensor represents the current view port dimensions.



| Represented State | CSS Classes | Data Attribute            |
| ----------------- | ----------- | ------------------------- |
| Square            | square      | data-viewport="square"    |
| Landscape         | landscape   | data-viewport="landscape" |
| Portrait          | protrait    | data-viewport="protrait"  |



### WindowFocusSensor

The window focus sensor toggles when window blurs.



| Represented State | CSS Classes | Data Attribute           |
| ----------------- | ----------- | ------------------------ |
| Focus win         | focus       | data-windowfocus="focus" |
| Window focus list | blur        | data-viewport="blur"     |



## Possible HTML Template

	<html class="no-js" data-livestate="true">
	<head>
		<title>livestate</title>
	</head>
	<body>
	
	<!-- Do your stuff... -->
	
	
	<!-- load the livestate and all of its sensors -->
	<script src="js/livestate.js"></script>
	<script src="js/livestate.sensor.js"></script>
	<script src="js/livestate.useragent.sensor.js"></script>
	<script src="js/livestate.userinput.sensor.js"></script>
	<script src="js/livestate.viewport.sensor.js"></script>
	<script src="js/livestate.windowfocus.sensor.js"></script>
	<script src="js/livestate.dragdrop.sensor.js"></script>
	<script src="js/livestate.connection.sensor.js"></script>
	<script src="js/livestate.cookie.sensor.js"></script>
	
	<!-- or just load the minified version -->
	<script src="dist/livestate.min.js"></script>
	</body></html>
