QUnit.module("CampaignURL");

QUnit.test( "_test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Lib loaded", function(assert){

	assert.ok( NYT.campaign != undefined , "Lib was loaded");
});

QUnit.test( "Creation of a CampaignURL object", function(assert){	
	var actual = new NYT.CampaignURL();
	assert.ok(actual instanceof NYT.CampaignURL);
});


QUnit.test( "Get Base URL", function(assert){
	var actual = new NYT.CampaignURL();
	var expected = "//api.nytimes.com/svc/elections/us/v3/finances";
	
	assert.ok(actual.getBaseURL() == expected);

});

/* GETTERS AND SETTERS */

QUnit.test( "setCampainCycle", function(assert){
	var actual = new NYT.CampaignURL();
	actual.setCampaignCycle("2000-present");
	
	var expected = "2000-present";
	
	assert.ok(actual.getCampaignCycle() == expected);
});

QUnit.test( "setApiKey", function(assert){
	var actual = new NYT.CampaignURL();
	actual.setApiKey("ABC");

	var expected = "ABC";

	assert.ok(actual.getApiKey() == expected);
});

QUnit.test( "setResponseFormat", function(assert){
	var actual = new NYT.CampaignURL();
	actual.setResponseFormat("xml");
	
	var expected = "xml";
	
	assert.ok(actual.getResponseFormat() == expected);
});


QUnit.test( "setCallback", function(assert){
	var actual = new NYT.CampaignURL();
	
	var a = function(){
		return 1;
	};
	
	actual.setCallback(a);
	var expected = a;

	assert.ok(actual.getCallback() == expected);

});


QUnit.test( "setVersion", function(assert){
	var actual = new NYT.CampaignURL();
	actual.setVersion("v3");
	var expected = "v3";

	assert.ok(actual.getVersion() == expected);

});



/* SETTES VIA CONSTRUCTOS */
// NYT.CampaignURL = function(campaign_cycle, api_key, response_format, callback, version){

	
QUnit.test( "setCampaignCycle via Constructor", function(assert){
	var actual = new NYT.CampaignURL("2000-present");

	var expected = "2000-present";

	assert.ok(actual.getCampaignCycle() == expected);
});


QUnit.test( "setApiKey via Constructor", function(assert){
	var actual = new NYT.CampaignURL("", "ABC");

	var expected = "ABC";

	assert.ok(actual.getApiKey() == expected);
});

QUnit.test( "setResponseFormat via Constructor", function(assert){
	var actual = new NYT.CampaignURL("", "", "json");

	var expected = "json";

	assert.ok(actual.getResponseFormat() == expected);
});

QUnit.test( "setCallback via Constructor", function(assert){
	a = function(){return 1;};

	var actual = new NYT.CampaignURL("", "", "", a);

	var expected = a;

	assert.ok(actual.getCallback() == expected);
});


//////////////////////

QUnit.test( "Two independent CampaignURLs", function(assert){
	var campaign1 = new NYT.CampaignURL();
	var campaign2 = new NYT.CampaignURL();

	// campaign1.setApiKey("API1");
	// campaign2.setApiKey("API2");

	assert.ok(campaign1 != campaign2);

});

QUnit.test( "Two independent CampaignURLs' API Keys", function(assert){
	var campaign1 = new NYT.CampaignURL();
	var campaign2 = new NYT.CampaignURL();

	campaign1.setApiKey("API1");
	campaign2.setApiKey("API2");

	assert.ok(campaign1.getApiKey() != campaign2.getApiKey());

});




