/**
 * connection sensor
 *
 * to signal the current connection state
 */

/**
 * @constructor
 */
function ConnectionSensor() {
	Sensor.call(this, 'connection');
	this.state = 'offline;'
}
ConnectionSensor.prototype = Object.create(Sensor.prototype);
ConnectionSensor.prototype.constructor = ConnectionSensor;

/**
 * executes the sensor
 *
 * @param {LiveState} liveState
 */
ConnectionSensor.prototype.execute = function (liveState) {
	var self = this;

	liveState.on(['online', 'offline'], function () {
		if (navigator.onLine) {
			self.state = 'online';
			liveState
				.set('online')
				.unset('offline')
				.sensorChanged(self);
		}
		else {
			self.state = 'offline';
			liveState
				.set('offline')
				.unset('online')
				.sensorChanged(self);
		}
	}, true);
};

/**
 * assembles the dataset
 *
 * @param {*} dataset
 * @returns {*}
 */
ConnectionSensor.prototype.dataset = function (dataset) {
	dataset[this.name] = this.state;
	return dataset;
};

var liveState = liveState || new LiveState();
liveState.sensor(new ConnectionSensor());