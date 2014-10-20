/**
 * window focus sensor
 *
 * to signal the current window focus
 */

/**
 * @constructor
 */
function WindowFocusSensor() {
	Sensor.call(this, 'windowfocus');
	this.focus = 'focus';
}
WindowFocusSensor.prototype = Object.create(Sensor.prototype);
WindowFocusSensor.prototype.constructor = WindowFocusSensor;

/**
 * executes the sensor
 *
 * @param {LiveState} liveState
 */
WindowFocusSensor.prototype.execute = function (liveState) {
	var self = this;

	liveState.on('blur', function () {
		self.focus = 'blur';
		liveState
			.set('blur')
			.unset('focus')
			.sensorChanged(self);
	});

	liveState.on('focus', function () {
		self.focus = 'focus';
		liveState
			.set('focus')
			.unset('blur')
			.sensorChanged(self);
	}, true);
};

/**
 * assembles the dataset
 *
 * @param {*} dataset
 * @returns {*}
 */
WindowFocusSensor.prototype.dataset = function (dataset) {
	dataset[this.name] = this.focus;
	return dataset;
};

var liveState = liveState || new LiveState();
liveState.sensor(new WindowFocusSensor());