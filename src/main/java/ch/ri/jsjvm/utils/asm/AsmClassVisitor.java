package ch.ri.jsjvm.utils.asm;

import org.objectweb.asm.ClassVisitor;
import org.objectweb.asm.FieldVisitor;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;

import ch.ri.jsjvm.utils.asm.code.ByteCode;

public class AsmClassVisitor extends ClassVisitor
{

	public AsmClassVisitor()
	{
		super(Opcodes.ASM4);
	}
	
	private ByteCode code = new ByteCode();

	@Override
	public FieldVisitor visitField(int access, String name, String desc, String signature, Object value)
	{
		
		return super.visitField(access, name, desc, signature, value);
	}

	@Override
	public MethodVisitor visitMethod(int access, String name, String desc, String signature, String[] exceptions)
	{
		return new AsmMethodVisitor(api, code, access, name, desc, signature, exceptions);
	}

	public ByteCode getCode()
	{
		return code;
	}

	public void setCode(ByteCode code)
	{
		this.code = code;
	}

}
