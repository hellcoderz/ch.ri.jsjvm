/*
 * @vm
 */


var VM = function(classLoader)
{
	this.classLoader = classLoader;

	/**
	 * Invokes a static method
	 */
	this.invokeStatic = function(className, method, args)
	{
		Logger.debug("invokeStatic: " + className + "." + method + "("+args+")");
	}

};
