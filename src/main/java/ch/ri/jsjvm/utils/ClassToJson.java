package ch.ri.jsjvm.utils;

import java.io.File;
import java.io.IOException;
import java.io.PrintStream;

import org.objectweb.asm.ClassReader;

import ch.ri.jsjvm.utils.asm.AsmClassVisitor;
import ch.ri.jsjvm.utils.asm.code.ByteCode;
import ch.ri.jsjvm.utils.asm.code.MethodCode;


public class ClassToJson
{
	
	/**
	 * List of classes to convert
	 */
	private static final Class<?>[] classList =
		{
		TestClass.class,
		Object.class,
		String.class
		};
	
	public static void main(String[] args) throws Exception
	{
		for (Class<?> c: classList)
			convert( c.getName() );
	}
	
	private static final String outputDir = "test/classes/";
	
	private static void convert(String className) throws IOException
	{
		File outputFile = new File(outputDir + className + ".json");
		
		if (outputFile.exists())
			outputFile.delete();
			
		PrintStream printer = new PrintStream(outputFile);

		ClassReader cReader = new ClassReader(className);
		
		AsmClassVisitor asm = new AsmClassVisitor();
		cReader.accept(asm, 0);
		
		printer.print("{\"name\":\""+className+"\",");
		
		
		printer.print("\"methods\":[");

		ByteCode code = asm.getCode();
		for (MethodCode method: code.methods)
		{
			
			printer.print("\"name\":\"");
			printer.print(method.name);
			printer.print("\",");
		
			//TODO

			
		}
		
		
		
		
		printer.print("]");
		
		printer.print("}");
		
		printer.flush();
		printer.close();
		
	}

}
