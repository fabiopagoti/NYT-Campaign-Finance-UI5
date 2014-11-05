var NYT;


NYT = { };


// QUnit does:

(function() {
	function F() {}
	F.prototype = NYT;
	NYT = new F();

	// Make F NYT's constructor so that we can add to the prototype later
	NYT.constructor = F;
}());