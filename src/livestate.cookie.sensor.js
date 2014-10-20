/**
 * cookie sensor
 *
 * to signal the current cookie state
 */

/**
 * @constructor
 */
function CookieSensor() {
	Sensor.call(this, 'cookies');
}
CookieSensor.prototype = Object.create(Sensor.prototype);
CookieSensor.prototype.constructor = CookieSensor;

/**
 * executes the sensor
 *
 * @param {LiveState} liveState
 */
CookieSensor.prototype.execute = function (liveState) {
	var self = this;

	liveState
		.set(navigator.cookieEnabled ? 'cookies' : 'no-cookies')
		.unset(navigator.cookieEnabled ? 'no-cookies' : 'cookies')
		.sensorChanged(self);
};

var liveState = liveState || new LiveState();
liveState.sensor(new CookieSensor());