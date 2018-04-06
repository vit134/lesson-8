/* eslint-disable no-console */

class Store {
	constructor() {
		this._emmiters = [];
	}

	subscribe(event, handler) {
		console.log(`event ${event} was ON`);
		this._emmiters.push({event, handler});
	}

	dispatch(eventName, handler) {
		console.log(`event ${eventName} was OFF`);

		for (let i = 0; i <= this._emmiters.length; i++) {
			if (this._emmiters[i].event === eventName) {
				this._emmiters.splice(i, 1);
				handler();
				break;
			}
		}
	}
	
	emit(eventName) {
		this._emmiters.forEach(event => {
			if (event.event === eventName) {
				console.log(`event ${eventName} emit`);
				event.handler();
			}
		})
	}
}

const store = new Store();

const emitter = {
	on: function(event, handler) {
		store.subscribe(event, handler);
	},

	off: function(event, handler) {
		// TODO: отписать
		store.dispatch(event, handler);
	},

	emit: function(event) {
		// TODO: обработка события
		store.emit(event);
	}
}

const handlerOn = function () {
	// что-то делаем
	console.log('что то делаем');
};

const handlerOff = function () {
	// что-то делаем

	console.log('off callback');
};

// подписали
emitter.on('one', handlerOn);
emitter.on('two', handlerOn);
emitter.on('three', handlerOn);


// обработали событие
emitter.emit('one');
emitter.emit('two');
emitter.off('three', handlerOff);
emitter.emit('three');

// отписали
emitter.off('one', handlerOff);
