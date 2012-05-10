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
	
	/**
	 * Assign size
	 * TODO
	 */
	this.size = pos - offset;
	
	
}


