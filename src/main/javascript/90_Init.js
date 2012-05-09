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
}

/**
 * Starts the vm
 */
jsjvm.prototype.start = function(mainClass, args)
{
	var self = this;

	this.loader.load(mainClass, function()
	{
		self.vm.invokeStatic(mainClass, "main", args);
	});
}

