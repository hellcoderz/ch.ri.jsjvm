/*
 * @init
 */

jsjvm.prototype.init = function(mainClass, args, classLoadingUrl)
{
	ClassLoader.url = classLoadingUrl;
	ClassLoader.load(mainClass, function(){ VM.invokeStatic(mainClass, "main", args); });
}

