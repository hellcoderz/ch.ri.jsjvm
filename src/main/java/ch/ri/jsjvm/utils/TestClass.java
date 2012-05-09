package ch.ri.jsjvm.utils;

import java.util.Date;
import java.util.Vector;

public class TestClass
{
	static
	{
		Date d = new Date();
		d.getTime();
		
		Vector<String> x = new Vector<String>();
		x.clear();
		
		System.out.println("Loaded");
	}

	/**
	 * @param args
	 */
	public static void main(String[] args)
	{
		System.out.println("main");
		date = new Date();
	}

	public static Date date;
}
