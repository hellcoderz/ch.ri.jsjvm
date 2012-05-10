package ch.ri.jsjvm.utils.asm.code;

import org.objectweb.asm.Label;

public class ByteCodeEntry
{
	public Integer opcode;
	
	public Integer operand, var, increment;
	
	public String type, desc;
	
	public Object load;
	
	//jumpInsn
	public Label label;
	
	//methodInsns
	public String owner, name;
}
