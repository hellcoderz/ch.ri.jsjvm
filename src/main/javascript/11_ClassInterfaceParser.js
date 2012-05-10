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
	
	for(var i=0; i<ifaceCount; i++)
	{
		
		var iface = classReader.getU2(pos);
		
		Logger.debug("Interface: " + i + " = " + iface);
		
		pos += 2;
		
	}

	
	/**
	 * Assign size
	 * TODO
	 */
	this.size = pos - offset;
	
	
}


