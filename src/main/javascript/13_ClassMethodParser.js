/*
 * @classmethodparser
 */


var ClassMethodParser = function(constantPool, classReader, offset)
{
	/**
	 * Current position
	 */
	var pos = offset;
	
	var methodCount = classReader.getU2(pos);
	pos += 2;
	
	Logger.debug("Method count: " + methodCount);
	
	for(var i=0; i<methodCount; i++)
	{
		
		var method = classReader.getU2(pos);
		
		Logger.debug("Method: " + i + " = " + method);
		
		pos += 2;
		
	}
	
	/**
	 * Assign size
	 * TODO
	 */
	this.size = pos - offset;
	
	
}


