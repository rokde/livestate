/**
 * viewport sensor
 *
 * to signal the current viewport dimensions
 */

/**
 * @constructor
 */
function ViewportSensor() {
	Sensor.call(this, 'viewport');
	this.dimension = 'square';
}
ViewportSensor.prototype = Object.create(Sensor.prototype);
ViewportSensor.prototype.constructor = ViewportSensor;

/**
 * executes the sensor
 *
 * @param {LiveState} liveState
 */
ViewportSensor.prototype.execute = function (liveState) {
	var self = this;

	liveState.on('resize', function () {
		var dimension = 'square';
		if (this.window.innerWidth > this.window.innerHeight)
			dimension = 'landscape';
		else if (this.window.innerWidth < this.window.innerHeight)
			dimension = 'portrait';

		self.dimension = dimension;

		liveState
			.unset(['landscape', 'portrait', 'square'])
			.set(dimension)
			.sensorChanged(self);
	}, true);
};

/**
 * assembles the dataset
 *
 * @param {*} dataset
 * @returns {*}
 */
ViewportSensor.prototype.dataset = function (dataset) {
	dataset[this.name] = this.dimension;
	return dataset;
};

var liveState = liveState || new LiveState();
liveState.sensor(new ViewportSensor());