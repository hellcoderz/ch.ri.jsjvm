/*
 * @vm
 */


var VM = function(classLoader)
{
	this.classLoader = classLoader;

	/**
	 * Invokes a static method
	 */
	invokeStatic : function(className, method, args)
	{
		Logger.debug("invokeStatic: " + className + "." + method + "("+args+")");
	}

};