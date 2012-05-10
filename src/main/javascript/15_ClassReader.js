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
	 * Constant pool
	 */
	var pos = 10;
	
	var cpoolParser = new ConstantPoolParser(this, pos);
	pos += cpoolParser.size;
	
	/**
	 * Access flag
	 */
	
	var accessFlag = this.getU2(pos);
	Logger.debug("Access flag: " + accessFlag);
	
	pos += 2;
	
	
	/**
	 * Class reference to this class
	 */
	
	var className = cpoolParser.classes[ this.getU2(pos) ];
	Logger.debug("Classname: pos("+pos+") " + className);
	
	pos += 2
	
	/**
	 * Super Class reference to this class
	 */
	
	var superClassName = cpoolParser.classes[ this.getU2(pos) ];
	Logger.debug("superClassName: pos("+pos+") " + superClassName);
	
	pos += 2
	
	/**
	 * Interfaces
	 */
	
	var interfaces = new ClassInterfaceParser(cpoolParser, this, pos);
	pos += interfaces.size;
	
	/**
	 * Fields
	 */
	
	var fields = new ClassFieldParser(cpoolParser, this, pos);
	pos += fields.size;
	
	/**
	 * Methods
	 */
	
	var methods = new ClassMethodParser(cpoolParser, this, pos);
	pos += methods.size;
	
}

