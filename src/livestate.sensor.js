/**
 * base sensor class
 *
 * @param name
 *
 * @constructor
 */
function Sensor(name)
{
	this.name = name;
}
Sensor.prototype = {
	constructor: Sensor,

	/**
	 * executes the sensor
	 *
	 * @param {LiveState} liveState
	 */
	execute: function (liveState) {
		console.log('executing sensor "' + this.name + '"');
	},

	/**
	 * assembles the dataset
	 *
	 * @param {*} dataset
	 * @returns {*}
	 */
	dataset: function (dataset) {
		dataset[this.name] = true;
		return dataset;
	}
};