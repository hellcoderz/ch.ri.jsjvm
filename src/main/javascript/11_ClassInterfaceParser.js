/*
 * @classinterfaceparser
 */


var ClassInterfaceParser = function(constantPool, classReader, offset)
{
	/**
	 * Current position
	 */
	var pos = offset;
	
	var ifaceCount = classReader.getU2(pos);
	pos += 2;
	
	Logger.debug("Interface count: " + ifaceCount);
	
	/**
	 * Assign size
	 * TODO
	 */
	this.size = pos - offset;
	
	
}


