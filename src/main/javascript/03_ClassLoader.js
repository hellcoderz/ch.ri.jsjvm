/*
 * @classloader
 */

var ClassLoader = function(url)
{
	var self = this;

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
		var classUrl = this.url + className;
			
		var bytes = this.classes[className];
		
		if (bytes != undefined)
		{
			Logger.debug("Cached class: " + className);
			if (typeof(callback) == "function")
				callback(bytes);
		}
		else
		{
			Logger.debug("Loading from remote: " + classUrl);
		
			$.getJSON(classUrl, function(data)
			{
				Logger.debug("Loaded: " + className);
				//Returns: { name: "", bytes: []}
				self.classes[data.name] = data.bytes;
				
				if (typeof(callback) == "function")
					callback(data.bytes);
			});
		}
	}
	
	this.save = function(className, bytes)
	{
		Logger.debug("Saving class: " + className + " size: " + bytes.length);
		this.classes[className] = bytes;
	}

};

