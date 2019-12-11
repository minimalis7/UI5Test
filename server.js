/*
	** 
	**	UI5 test - lightweight NodeJS server
	** 	server.js
	** 	Author: Daniel Grewe, 2019
	** 
*/

const express 		= require('express');
const bodyParser 	= require('body-parser');
const winston 		= require('winston');

const app 			= express();
const port			= process.env.PORT || 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});

logger.info('Packages loaded.');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

logger.info('App and middlewares configured.');

app.get('/helloworld', function (req, res) {
	logger.info('--- New GET request /helloworld');
	res.send('Hello World!')
});

app.get('/coins', function (req, res) {
	logger.info('--- New GET request /coins');
	var mock = [
		{	"id": "bitcoin",
			"symbol": "btc",
			"name": "Bitcoin",
			"current_price": 6529.95,
			"market_cap": 118162658687,
			"total_volume": 17396473746,
			"high_24h": 6642.05,
			"low_24h": 6485.69,
			"price_change_24h": -112.09926627,
			"price_change_percentage_24h": -1.68772,
			"market_cap_change_24h": -1841652822.72008,
			"market_cap_change_percentage_24h": -1.53466,
			"circulating_supply": 18095487,
			"total_supply": 21000000  },
		{	"id": "litecoin",
			"symbol": "ltc",
			"name": "Litecoin",
			"current_price": 39.87,
			"market_cap": 2544415310,
			"market_cap_rank": 6,
			"total_volume": 1598351258,
			"high_24h": 40.15,
			"low_24h": 39.33,
			"price_change_24h": -0.27766888,
			"price_change_percentage_24h": -0.69166,
			"market_cap_change_24h": -16035509.3896294,
			"market_cap_change_percentage_24h": -0.62628,
			"circulating_supply": 63816996.4848931,
			"total_supply": 84000000  }
		];
	res.send(mock)
});

app.listen(port, function () {
	logger.info('Express server started.');
	logger.info('Listening on port ' + port + '.');
	logger.info('Server in ' + app.get('env') + ' mode.');
});

