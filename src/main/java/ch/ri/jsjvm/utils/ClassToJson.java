package ch.ri.jsjvm.utils;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;


public class ClassToJson
{
	
	public static void main(String[] args) throws Exception
	{
		convert( TestClass.class.getName() );
	}
	
	private static final String outputDir = "test/classes/";
	
	private static void convert(String className) throws IOException
	{
		File outputFile = new File(outputDir + className + ".json");
		
		if (outputFile.exists())
			outputFile.delete();
			
		PrintStream printer = new PrintStream(outputFile);
		printer.print("{\"name\":\"" + className + "\",\"bytes\":[");
		
		InputStream stream = ClassToJson.class.getResourceAsStream( "/" + className.replace(".", "/") + ".class" );
		
		ByteArrayOutputStream output = new ByteArrayOutputStream(4096);
		
		byte[] buffer = new byte[4096];
		int offset = 0;
		
		while(true)
		{
			int count = stream.read(buffer);
			
			if (count <= 0)
				break;
			
			output.write(buffer, offset, count);
			offset += count;
		}
		
		byte[] bytes = output.toByteArray();
		for (int i=0; i<bytes.length; i++)
		{
			printer.print( bytes[i] & 0xFF );
			
			if (i<bytes.length-1)
				printer.print(",");
		}
		
		printer.print("]}");
		
		printer.flush();
		printer.close();
		
	}

}
