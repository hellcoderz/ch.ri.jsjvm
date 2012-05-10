package ch.ri.jsjvm.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.PrintStream;
import java.util.TreeSet;

public class MergeJSFiles
{
	
	public static void main(String[] args) throws Exception
	{
		
		File jsDir = new File("src/main/javascript");
		File outputFile = new File("target/jsjvm.js");
		
		if (outputFile.exists())
			outputFile.delete();
		
		PrintStream printer = new PrintStream(outputFile);
		
		TreeSet<File> set = new TreeSet<File>();
		
		for (File f: jsDir.listFiles())
		{
			if (f.isFile())
				set.add(f);
		}
		
		for (File f: set)
		{
			BufferedReader reader = new BufferedReader( new FileReader(f) );

			printer.println("//Begin of file: " + f.getName());
			
			while (reader.ready())
			{
				String line = reader.readLine();
				printer.println( line );
				System.out.println( line );
			}
			
			printer.println("//End of file: " + f.getName());

		}
		
		printer.flush();
		printer.close();
		
	}

}
