/*
 * @vm
 */


var VM = {

	/**
	 * Invokes a static method
	 */
	invokeStatic : function(className, method, args)
	{
		Logger.debug("invokeStatic: " + className + "." + method + "("+args+")");
	}

};