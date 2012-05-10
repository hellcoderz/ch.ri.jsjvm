package ch.ri.jsjvm.utils.asm;

import org.objectweb.asm.Label;
import org.objectweb.asm.MethodVisitor;
import org.objectweb.asm.Opcodes;

import ch.ri.jsjvm.utils.asm.code.ByteCode;
import ch.ri.jsjvm.utils.asm.code.ByteCodeEntry;
import ch.ri.jsjvm.utils.asm.code.MethodCode;

public class AsmMethodVisitor extends MethodVisitor
{

	public AsmMethodVisitor(int api, ByteCode code, int access, String name, String desc, String signature, String[] exceptions)
	{
		super(api);
		
		this.code = new MethodCode();
		this.code.name = name;
		
		code.methods.add(this.code);
	}
	
	private MethodCode code;
	
	@Override
	public void visitInsn(int opcode)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = opcode;
		code.code.add(bc);
	}

	@Override
	public void visitLabel(Label label)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.label = label;
		code.code.add(bc);
	}

	@Override
	public void visitFieldInsn(int opcode, String owner, String name,
			String desc)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = opcode;
		bc.owner = owner;
		bc.name = name;
		code.code.add(bc);
	}

	@Override
	public void visitLdcInsn(Object cst)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.load = cst;
		code.code.add(bc);
	}

	@Override
	public void visitTypeInsn(int opcode, String type)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = opcode;
		bc.type = type;
		code.code.add(bc);
	}

	@Override
	public void visitMethodInsn(int opcode, String owner, String name,
			String desc)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = opcode;
		bc.owner = owner;
		bc.name = name;
		bc.desc = desc;
		code.code.add(bc);
	}

	@Override
	public void visitIntInsn(int opcode, int operand)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = opcode;
		bc.operand = operand;
		code.code.add(bc);
	}

	@Override
	public void visitVarInsn(int opcode, int var)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = opcode;
		bc.var = var;
		code.code.add(bc);
	}

	@Override
	public void visitJumpInsn(int opcode, Label label)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = opcode;
		bc.label = label;
		code.code.add(bc);
	}

	@Override
	public void visitIincInsn(int var, int increment)
	{
		ByteCodeEntry bc = new ByteCodeEntry();
		bc.opcode = Opcodes.IINC;
		bc.var = var;
		bc.increment = increment;
		code.code.add(bc);
	}



}
