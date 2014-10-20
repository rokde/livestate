/**
 * user agent sensor
 *
 * retrieves the user agent name and version
 */

/**
 * @constructor
 */
function UserAgentSensor() {
	Sensor.call(this, 'useragent');
}
UserAgentSensor.prototype = Object.create(Sensor.prototype);
UserAgentSensor.prototype.constructor = UserAgentSensor;

/**
 * extracts useragent name
 *
 * extract the useragent and its version when necessary: e.g. mobile apps
 *
 * @param useragent
 */
UserAgentSensor.prototype.extractUserAgent = function (useragent) {
	var pattern = /(([\w\-]+)\/([\d\.]{1,}))$/i;
	/* 1: useragent/1.2.3 | 2: useragent | 3: 1.2.3 */
	var match = pattern.exec(useragent);
	if (match == null)
		return '';

	this.useragent = match[2];
	this.version = match[3];
};

/**
 * executes the sensor
 *
 * @param {LiveState} liveState
 */
UserAgentSensor.prototype.execute = function (liveState) {
	var self = this;

	this.extractUserAgent(navigator.userAgent);
	liveState
		.set(this.useragent.toLowerCase())
		.sensorChanged(self);
};

/**
 * assembles the dataset
 *
 * @param {*} dataset
 * @returns {*}
 */
UserAgentSensor.prototype.dataset = function (dataset) {
	dataset[this.name] = this.useragent;
	dataset[this.name + '.version'] = this.version;
	return dataset;
};

var liveState = liveState || new LiveState();
liveState.sensor(new UserAgentSensor());