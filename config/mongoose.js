// This is a config file that connects to MongoDB and loads all of the models
var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');
// connect to the database
mongoose.connect('mongodb://localhost/MEAN_Mini_Store');
// specify the path to all of the models
var models_path = __dirname + '/../server/models'
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file)
{
	if(file.indexOf('.js') > 0)
	{
		require(models_path + '/' + file);
	}
});