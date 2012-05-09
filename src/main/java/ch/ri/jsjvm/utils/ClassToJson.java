package ch.ri.jsjvm.utils;

import java.io.IOException;
import java.lang.reflect.Method;
import java.net.URL;
import java.util.Enumeration;

public class ClassToJson
{
	
	public static void main(String[] args) throws Exception
	{
		
		ClassConverterLoader loader = new ClassConverterLoader();
		Class<?> class1 = loader.loadClass( TestClass.class.getName() );
		Method method = class1.getMethod("main", String[].class);
		method.invoke(null, new Object[]{null});
	}
	
	
	public static class ClassConverterLoader extends ClassLoader
	{


		@Override
		public Enumeration<URL> getResources(String name) throws IOException
		{
			System.out.println("getResources: " + name);
			return super.getResources(name);
		}

		@Override
		public Class<?> findClass(String name) throws ClassNotFoundException
		{
			System.out.println("findClass: " + name);
			return super.findClass(name);
		}

		@Override
		public Class<?> loadClass(String name) throws ClassNotFoundException
		{
			System.out.println("loadClass: " + name);
			return super.loadClass(name);
		}

		@Override
		protected URL findResource(String name)
		{
			System.out.println("findResource: " + name);
			return super.findResource(name);
		}

		@Override
		protected String findLibrary(String libname)
		{
			System.out.println("findLibrary: " + libname);
			return super.findLibrary(libname);
		}

		@Override
		protected Class<?> loadClass(String name, boolean resolve)
				throws ClassNotFoundException
		{
			System.out.println("loadClass: " + name + "," + resolve);
			return super.loadClass(name, resolve);
		}

		@Override
		public URL getResource(String name)
		{
			System.out.println("getResource" + name);
			return super.getResource(name);
		}
		
	}

}
