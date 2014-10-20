/*!
 * live state observer
 *
 * @author Robert Kummer
 * Licensed under MIT (https://github.com/rokde/livestate/blob/master/LICENSE)
 */

/**
 * live state observer class
 * @param win
 * @param elem
 * @constructor
 */
function LiveState(win, elem) {
	this.window = win || window;
	this.element = elem || document.getElementsByTagName('html').item(0);

	this.init();
}
LiveState.prototype = {
	constructor: LiveState,

	/**
	 * initialize the observer
	 */
	init: function () {
		/* javascript is on :) */
		this.set('js').unset('no-js');
	},

	/**
	 * register event handler for one or more events, can be initialized optionally
	 *
	 * @param events
	 * @param handler
	 * @param init
	 * @returns {LiveState}
	 */
	on: function (events, handler, init) {
		var evts = (typeof events === 'string') ? new Array(events) : events;
		evts.forEach(function (event) {
			this.window.addEventListener(event, handler);
		}, liveState);

		var initialize = init || false;
		if (initialize) {
			evts.forEach(function (event) {
				this.window.dispatchEvent(new Event(event));
			}, liveState);
		}

		return this;
	},

	/**
	 * sets one or more classes to an optional element
	 *
	 * @param classes
	 * @param elem
	 * @returns {LiveState}
	 */
	set: function (classes, elem) {
		var cls = (typeof classes === 'string') ? new Array(classes) : classes;
		var element = elem || this.element;

		cls.forEach(function (className) {
			if (! element.classList.contains(className))
				element.classList.add(className);
		}, liveState);

		return this;
	},

	/**
	 * unset one or more classes to an optional element
	 *
	 * @param classes
	 * @param elem
	 * @returns {LiveState}
	 */
	unset: function (classes, elem) {
		var cls = (typeof classes === 'string') ? new Array(classes) : classes;
		var element = elem || this.element;

		cls.forEach(function (className) {
			if (element.classList.contains(className))
				element.classList.remove(className);
		}, liveState);

		return this;
	},

	/**
	 * add a sensor and execute the sensor
	 *
	 * @param {Sensor} sensor
	 */
	sensor: function (sensor)
	{
		if (sensor.constructor instanceof Sensor.constructor)
			sensor.execute(this);
	},

	/**
	 * will be called when sensor changed its signal
	 *
	 * @param {Sensor} sensor
	 * @returns {LiveState}
	 */
	sensorChanged: function (sensor)
	{
		if (sensor.constructor instanceof Sensor.constructor) {
			if (this.element.dataset['livestate'] !== undefined
				&& this.element.dataset['livestate'] === 'true') {
				this.element.dataset = sensor.dataset(this.element.dataset);
			}
		}

		return this;
	}
};

var liveState = liveState || new LiveState();