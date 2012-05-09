/*
 * @constantpool
 */

var ConstantPoolParser = function(classReader)
{
	/**
	 * Extract constant pool
	 */
	var constant_pool_size = classReader.getU2(8);
	
	//Logger.debug("Constant pool size: " + constant_pool_size);
	
	var pos = 10;
	/**
	 * Constants array
	 */
	this.constants = new Array();
	this.classConstants = new Array();
	
	while (this.constants.length < constant_pool_size-1)
	{
		var tag = classReader.getU1(pos++);

		
		if (tag == 1)
		{
			/*
			 * 2+x bytes (variable)
			 * 
			 * UTF-8 (Unicode) string: a character string prefixed by a 16-bit number (type u2) indicating the number of bytes in the 
			 * encoded string which immediately follows (which may be different than the number of characters). Note that the encoding
			 * used is not actually UTF-8, but involves a slight modification of the Unicode standard encoding form.
			 */
			var strlen = classReader.getU2(pos);
			
			pos += 2;
			
			var str = "";
			for (var i=0; i<strlen; i++)
			{
				str += String.fromCharCode(classReader.getU1(pos + i));
			}
			
			Logger.debug("String constant: " + str);
			
			this.constants.push(str);
			pos += strlen;
		}
		else if (tag == 3)
		{
			/*
			 * 4 bytes Integer: a signed 32-bit two's complement number in big-endian format
			 */
			this.constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 4)
		{
			/*
			 * 4 bytes Float: a 32-bit single-precision IEEE 754 floating-point number
			 */
			this.constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 5)
		{
			/*
			 * 8 bytes Long: a signed 64-bit two's complement number in big-endian format (takes two slots in the constant pool table)
			 */
			this.constants.push(0); //TODO
			pos += 8;
		}
		else if (tag == 6)
		{
			/*
			 * 8 bytes Double: a 64-bit double-precision IEEE 754 floating-point number (takes two slots in the constant pool table)
			 */
			this.constants.push(0); //TODO
			pos += 8;
		}
		else if (tag == 7)
		{
			/*
			 * 2 bytes Class reference: an index within the constant pool to a UTF-8 string containing the fully qualified class name (in internal format)
			 */
			var ref = classReader.getU2(pos);
			Logger.debug("Class reference: " + ref);
			this.classConstants.push(ref);
			this.constants.push(0);
			pos += 2;
		}
		else if (tag == 8)
		{
			/*
			 * 2 bytes String reference: an index within the constant pool to a UTF-8 string
			 */
			this.constants.push(0); //TODO
			pos += 2;
		}
		else if (tag == 9)
		{
			/*
			 * 4 bytes Field reference: two indexes within the constant pool, the first pointing to a Class reference, the second to a Name and Type descriptor.
			 */
			this.constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 10)
		{
			/*
			 * 4 bytes Method reference: two indexes within the constant pool, the first pointing to a Class reference, the second to a Name and Type descriptor.
			 */
			this.constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 11)
		{
			/*
			 * 4 bytes Interface method reference: two indexes within the constant pool, the first pointing to a Class reference, the second to a Name and Type descriptor.
			 */
			this.constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 12)
		{
			/*
			 * 4 bytes Name and type descriptor: two indexes to UTF-8 strings within the constant pool, the first representing a name (identifier) 
			 * and the second a specially encoded type descriptor.
			 */
			this.constants.push(0); //TODO
			pos += 4;
		}
		
		
	}
	
	/**
	 * Resolve class references
	 */
	for (var i=0; i<this.classConstants.length; i++)
	{
		var ref = this.classConstants[i];
		var resolved = this.constants[ref-1];
		this.classConstants[i] = resolved;
		Logger.debug("Resolved ref: " + ref + " = " + resolved);
	}

}
