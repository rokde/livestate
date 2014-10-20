/**
 * drag drop sensor
 *
 * to signal the current drag and drop state
 */

/**
 * @constructor
 */
function DragDropSensor() {
	Sensor.call(this, 'cookies');
}
DragDropSensor.prototype = Object.create(Sensor.prototype);
DragDropSensor.prototype.constructor = DragDropSensor;

/**
 * executes the sensor
 *
 * @param {LiveState} liveState
 */
DragDropSensor.prototype.execute = function (liveState) {
	var self = this;

	/* dragging */
	liveState.on('dragstart', function () {
		liveState
			.set('dragging')
			.sensorChanged(self);
	});
	liveState.on('dragend', function () {
		liveState
			.unset('dragging')
			.sensorChanged(self);
	});

	/* dropping */
	liveState.on(['dragenter', 'dragover', 'dragleave'], function () {
		liveState
			.set('dropping')
			.sensorChanged(self);
	});
	liveState.on(['drop'], function () {
		liveState
			.unset('dropping')
			.sensorChanged(self);
	});
};

/**
 * assembles the dataset
 *
 * @param {*} dataset
 * @returns {*}
 */
DragDropSensor.prototype.dataset = function (dataset) {
	return dataset;
};

var liveState = liveState || new LiveState();
liveState.sensor(new DragDropSensor());