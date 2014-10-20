/**
 * user input sensor
 *
 * to signal the current user input method
 */

/**
 * @constructor
 */
function UserInputSensor() {
	Sensor.call(this, 'userinput');
	this.input = 'mouse';
}
UserInputSensor.prototype = Object.create(Sensor.prototype);
UserInputSensor.prototype.constructor = UserInputSensor;

/**
 * executes the sensor
 *
 * @param {LiveState} liveState
 */
UserInputSensor.prototype.execute = function (liveState) {
	var self = this;

	liveState.on(['click', 'mousemove'], function () {
		self.input = 'mouse';
		liveState
			.set('mouse')
			.unset('keyboard')
			.sensorChanged(self);
	}, true);

	liveState.on('keypress', function () {
		self.input = 'keyboard';
		liveState
			.set('keyboard')
			.unset('mouse')
			.sensorChanged(self);
	});
};

/**
 * assembles the dataset
 *
 * @param {*} dataset
 * @returns {*}
 */
UserInputSensor.prototype.dataset = function (dataset) {
	dataset[this.name] = this.input;
	return dataset;
};

var liveState = liveState || new LiveState();
liveState.sensor(new UserInputSensor());