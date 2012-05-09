/*
 * @classloader
 */

var ClassLoader = function(url)
{

	/**
	 * Array of classes ( classes["x.y.z"] = [1,2,3] )
	 */
	this.classes = new Array();
	
	/**
	 * Url to load classes from
	 */
	this.url = url;

	/**
	 * Load class as json representation via jquery
	 */
	this.load = function(className, callback)
	{
		Logger.debug("Loading class: " + className + " from " + this.url);
		callback(); //TODO
	}
	
	this.save = function(className, bytes)
	{
		Logger.debug("Saving class: " + className + " size: " + bytes.length);
		this.classes[className] = bytes;
	}

};

