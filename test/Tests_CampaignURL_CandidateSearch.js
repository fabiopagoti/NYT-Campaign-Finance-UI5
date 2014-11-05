QUnit.module("CampaignURL.CandidateSearch");

/*
 * CANDIDATE SEARCH
 */
QUnit.test( "Creation of a CampaignURL.CandidateSearch object", function(assert){	
	var actual = new NYT.CampaignURL.CandidateSearch();
	assert.ok(actual instanceof NYT.CampaignURL);
	assert.ok(actual instanceof NYT.CampaignURL.CandidateSearch);
});

QUnit.test( "Base URL", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	var expected = "//api.nytimes.com/svc/elections/us/v3/finances/{campaign_cycle}/candidates/search.{response_format}";
	assert.ok(actual.getBaseURL() == expected);
});

QUnit.test( "Base URL is not CampaignURL Base URL", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	var expected = "//api.nytimes.com/svc/elections/us/v3/finances";
	assert.ok(actual.getBaseURL() != expected);
});


QUnit.test( "Independent response formats between objects", function(assert){
	var url1 = new NYT.CampaignURL.CandidateSearch();
	var url2 = new NYT.CampaignURL.CandidateSearch();

	url1.setResponseFormat("json");
	url2.setResponseFormat("xml");

	assert.ok(url2.getResponseFormat() != url1.getResponseFormat());
});

QUnit.test( "Generate Callable URL", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	actual.setApiKey("123");
	actual.setResponseFormat("json");
	actual.setCampaignCycle("2008-present");
	actual.setLastName("Obama");

	var expected = "http://api.nytimes.com/svc/elections/us/v3/finances/2008-present/candidates/search.json?api-key123=&lname=Obama&response-format=json";

	assert.ok(actual == expected);

});

/* GETTERS AND SETTERS */


QUnit.test( "setCampainCycle", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	actual.setCampaignCycle("2000-present");
	
	var expected = "2000-present";
	
	assert.ok(actual.getCampaignCycle() == expected);
});

QUnit.test( "setApiKey", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	actual.setApiKey("ABC");

	var expected = "ABC";

	assert.ok(actual.getApiKey() == expected);
});

QUnit.test( "setResponseFormat", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	actual.setResponseFormat("xml");
	
	var expected = "xml";
	
	assert.ok(actual.getResponseFormat() == expected);
});


QUnit.test( "setCallback", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	
	var a = function(){
		return 1;
	};
	
	actual.setCallback(a);
	var expected = a;

	assert.ok(actual.getCallback() == expected);

});


QUnit.test( "setVersion", function(assert){
	var actual = new NYT.CampaignURL.CandidateSearch();
	actual.setVersion("v3");
	var expected = "v3";

	assert.ok(actual.getVersion() == expected);

});
