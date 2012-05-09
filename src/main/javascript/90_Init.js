/*
 * @init
 */

/**
 * Constructor
 */
jsjvm.prototype.init = function(classLoadingUrl)
{
	this.loader = new ClassLoader(classLoadingUrl);
	this.vm = new VM(this.loader);
	
	Logger.debug("Created new VM: " + classLoadingUrl);
}

/**
 * Starts the vm
 */
jsjvm.prototype.start = function(mainClass, args)
{
	var self = this;
	
	Logger.debug("Starting vm: " + mainClass + ".main(" + args + ")");

	this.loader.load(mainClass, function()
	{
		self.vm.invokeStatic(mainClass, "main", args);
	});
}

