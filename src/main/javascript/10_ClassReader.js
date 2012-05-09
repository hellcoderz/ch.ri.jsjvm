/*
 * @classreader
 */

var ClassReader = function(name, bytes)
{
	Logger.debug("Reading: " + name + " with length: " + bytes.length);
	
	var self = this;
	this.bytes = bytes;
	
	/**
	 * Returns a 16 bit value
	 */
	this.getU2 = function(pos)
	{
		return self.bytes[pos+1] + (self.bytes[pos] * 256);
	}
	
	/**
	 * Returns a 8 bit value
	 */
	this.getU1 = function(pos)
	{
		return self.bytes[pos];
	}
	
	/**
	 * Check signature
	 */
	if (bytes[0] != 0xCA)
		throw Error("Error at offset 0")
	if (bytes[1] != 0xFE)
		throw Error("Error at offset 1")
	if (bytes[2] != 0xBA)
		throw Error("Error at offset 2")
	if (bytes[3] != 0xBE)
		throw Error("Error at offset 3")
	
	/**
	 * Extract version
	 */
	var version_minor = this.getU2(4);
	var version_major = this.getU2(6);
	
	Logger.debug("Classfile version: " + version_major + ":" + version_minor);
	
	/**
	 * Extract constant pool
	 */
	var constant_pool_size = this.getU2(8);
	
	Logger.debug("Constant pool size: " + constant_pool_size);
	
	var pos = 10;
	/**
	 * Constants array
	 */
	var constants = new Array();
	
	while (constants.length < constant_pool_size-1)
	{
		var tag = this.getU1(pos++);
		Logger.debug("Tag: " + tag);

		
		if (tag == 1)
		{
			/*
			 * 2+x bytes (variable)
			 * 
			 * UTF-8 (Unicode) string: a character string prefixed by a 16-bit number (type u2) indicating the number of bytes in the 
			 * encoded string which immediately follows (which may be different than the number of characters). Note that the encoding
			 * used is not actually UTF-8, but involves a slight modification of the Unicode standard encoding form.
			 */
			var strlen = this.getU2(pos);
			
			pos += 2;
			
			Logger.debug("String constant: " + strlen);
			
			var str = "";
			for (var i=0; i<strlen; i++)
			{
				str += String.fromCharCode(this.getU1(pos + i));
			}
			
			Logger.debug("	String: " + str);
			
			constants.push(0); //TODO
			pos += strlen;
		}
		else if (tag == 3)
		{
			/*
			 * 4 bytes Integer: a signed 32-bit two's complement number in big-endian format
			 */
			constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 4)
		{
			/*
			 * 4 bytes Float: a 32-bit single-precision IEEE 754 floating-point number
			 */
			constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 5)
		{
			/*
			 * 8 bytes Long: a signed 64-bit two's complement number in big-endian format (takes two slots in the constant pool table)
			 */
			constants.push(0); //TODO
			pos += 8;
		}
		else if (tag == 6)
		{
			/*
			 * 8 bytes Double: a 64-bit double-precision IEEE 754 floating-point number (takes two slots in the constant pool table)
			 */
			constants.push(0); //TODO
			pos += 8;
		}
		else if (tag == 7)
		{
			/*
			 * 2 bytes Class reference: an index within the constant pool to a UTF-8 string containing the fully qualified class name (in internal format)
			 */
			var ref = this.getU2(pos);
			Logger.debug("Class reference: " + ref);
			constants.push(0); //TODO
			pos += 2;
		}
		else if (tag == 8)
		{
			/*
			 * 2 bytes String reference: an index within the constant pool to a UTF-8 string
			 */
			constants.push(0); //TODO
			pos += 2;
		}
		else if (tag == 9)
		{
			/*
			 * 4 bytes Field reference: two indexes within the constant pool, the first pointing to a Class reference, the second to a Name and Type descriptor.
			 */
			constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 10)
		{
			/*
			 * 4 bytes Method reference: two indexes within the constant pool, the first pointing to a Class reference, the second to a Name and Type descriptor.
			 */
			constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 11)
		{
			/*
			 * 4 bytes Interface method reference: two indexes within the constant pool, the first pointing to a Class reference, the second to a Name and Type descriptor.
			 */
			constants.push(0); //TODO
			pos += 4;
		}
		else if (tag == 12)
		{
			/*
			 * 4 bytes Name and type descriptor: two indexes to UTF-8 strings within the constant pool, the first representing a name (identifier) 
			 * and the second a specially encoded type descriptor.
			 */
			constants.push(0); //TODO
			pos += 4;
		}
		
		
	}
	
	Logger.debug("Poolsize: " + constants.length);
	
	
}

