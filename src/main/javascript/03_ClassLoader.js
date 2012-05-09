/*
 * @classloader
 */

var ClassLoader = {

	/**
	 * Array of classes [ {name: "java.lang.String", bytes: [0,1,2,3]}, {...} ]
	 */
	classes : new Array(),
	
	/**
	 * Url to load classes from
	 */
	url : "/classloaderUrlNotDefined",

	/**
	 * Load class as json representation via jquery
	 */
	load : function(className, callback)
	{
		Logger.debug("Loading: " + className + " from " + ClassLoader.url);
		callback(); //TODO
	}

};

