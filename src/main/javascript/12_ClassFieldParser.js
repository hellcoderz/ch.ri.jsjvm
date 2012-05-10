/*
 * @classfieldparser
 */


var ClassFieldParser = function(constantPool, classReader, offset)
{
	/**
	 * Current position
	 */
	var pos = offset;
	
	var fieldCount = classReader.getU2(pos);
	pos += 2;
	
	Logger.debug("Field count: " + fieldCount);
	
	/**
	 * Assign size
	 * TODO
	 */
	this.size = pos - offset;
	
	
}


