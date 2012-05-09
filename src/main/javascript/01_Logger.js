/*
 * @logger
 */

(function(global)
{
	var Logger = {};
	
	/**
	 * Log a message
	 */
	Logger.log = function(msg)
	{
		alert(msg); //TODO
	}
	
	global.jsjvm.Logger = Logger;
	
})(this);

