/*
 * @init
 */

jsjvm.prototype.init = function(mainClass, args, classLoadingUrl)
{
	var self = this;

	this.loader = new ClassLoader(classLoadingUrl);
	this.vm = new VM(this.loader);
	
	this.loader.load(mainClass, function()
	{
		self.vm.invokeStatic(mainClass, "main", args);
	});
}

