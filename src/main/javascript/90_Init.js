/*
 * @init
 */

jsjvm.prototype.init = function(mainClass, classLoadingUrl)
{
	ClassLoader.url = classLoadingUrl;
	ClassLoader.load(mainClass, function(){});
}

