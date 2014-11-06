QUnit.module("CandidateSearch");

/*
 * CANDIDATE SEARCH
 */
QUnit.test( "Creation of a CampaignURL.CandidateSearch object", function(assert){	
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	assert.ok(actual_obj instanceof NYT.CampaignURL);
	assert.ok(actual_obj instanceof NYT.CampaignURL.CandidateSearch);
});

QUnit.test( "Base URL", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	var expected = "//api.nytimes.com/svc/elections/us/{version}/finances/{campaign_cycle}/candidates/search.{response_format}?";
	assert.equal(actual_obj.getBaseURL(), expected);
});

QUnit.test( "Base URL is not CampaignURL Base URL", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	var expected = "//api.nytimes.com/svc/elections/us/{version}/finances";
	assert.notEqual(actual_obj.getBaseURL(), expected);
});


QUnit.test( "Independent response formats between objects", function(assert){
	var url1 = new NYT.CampaignURL.CandidateSearch();
	var url2 = new NYT.CampaignURL.CandidateSearch();

	url1.setResponseFormat("json");
	url2.setResponseFormat("xml");

	assert.notEqual(url2.getResponseFormat(), url1.getResponseFormat());
});


/* GETTERS AND SETTERS */


QUnit.test( "setCampainCycle", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	actual_obj.setCampaignCycle("2000-present");
	
	var expected = "2000-present";
	
	assert.equal(actual_obj.getCampaignCycle() , expected);
});

QUnit.test( "setApiKey", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	actual_obj.setApiKey("ABC");

	var expected = "ABC";

	assert.equal(actual_obj.getApiKey() , expected);
});

QUnit.test( "setResponseFormat", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	actual_obj.setResponseFormat("xml");
	
	var expected = "xml";
	
	assert.equal(actual_obj.getResponseFormat() , expected);
});


QUnit.test( "setCallback", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	
	var a = function(){
		return 1;
	};
	
	actual_obj.setCallback(a);
	var expected = a;

	assert.equal(actual_obj.getCallback() , expected);

});

QUnit.test( "setVersion", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	actual_obj.setVersion("v3");
	var expected = "v3";

	assert.equal(actual_obj.getVersion() , expected);

});


QUnit.test( "setQuery", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();
	actual_obj.setQuery("Obama");
	var expected = "Obama";

	assert.equal(actual_obj.getQuery() , expected);

});


/*
 * CALLABLE URLS
 */

// No parameters
QUnit.test( "Generate Callable URL: NO PARAMS", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "";
	var response_format = "";
	var campaign_cycle = "";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	var act = actual_obj.generateURL();
	assert.equal(act , false);

});

// 1 parameter

QUnit.test( "Generate Callable URL: API-KEY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "ABC";
	var response_format = "";
	var campaign_cycle = "";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});


QUnit.test( "Generate Callable URL: FORMAT", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "";
	var response_format = "json";
	var campaign_cycle = "";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});

QUnit.test( "Generate Callable URL: CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "";
	var response_format = "";
	var campaign_cycle = "2000-present";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});


// 2 parameters

QUnit.test( "Generate Callable URL: API-KEY + FORMAT", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "ABC";
	var response_format = "json";
	var campaign_cycle = "";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});

QUnit.test( "Generate Callable URL: API-KEY + CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "ABC";
	var response_format = "";
	var campaign_cycle = "2000-present";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});

QUnit.test( "Generate Callable URL: FORMAT + CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "";
	var response_format = "json";
	var campaign_cycle = "2000-present";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});


// 3 parameters
QUnit.test( "Generate Callable URL: API-KEY + FORMAT + CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "ABC";
	var response_format = "json";
	var campaign_cycle = "2000-present";
	var query = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected =  "//api.nytimes.com/svc/elections/us/v3/finances/" +
					campaign_cycle + "/" +
					"candidates/search." +
					response_format +  "?" +
					"&api-key=" + api_key;

	var actual = actual_obj.generateURL();
	assert.equal(actual, expected);

});

QUnit.test( "Generate Callable URL: API-KEY + FORMAT + QUERY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "ABC";
	var response_format = "json";
	var campaign_cycle = "";
	var query = "Obama";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , expected);

});


QUnit.test( "Generate Callable URL: API-KEY + CAMPAIGN + QUERY ", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "ABC";
	var response_format = "";
	var campaign_cycle = "2000-present";
	var query = "Obama";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , expected);

});

QUnit.test( "Generate Callable URL:  FORMAT + CAMPAIGN + QUERY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "";
	var response_format = "json";
	var campaign_cycle = "2000-present";
	var query = "Obama";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = false;

	assert.equal(actual_obj.generateURL() , expected);

});

// 4 parameters
QUnit.test( "Generate Callable URL: API-KEY + FORMAT + CAMPAIGN CYCLE + QUERY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateSearch();

	var api_key = "123";
	var response_format = "json";
	var campaign_cycle = "2008-present";
	var query = "Obama";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setQuery(query);

	var expected = "//api.nytimes.com/svc/elections/us/v3/finances/" +
					"2008-present" + "/" +
					"candidates/search." +
					response_format +  "?" +
					"&api-key=" + api_key +
					"&query=" + query;

	var actual = actual_obj.generateURL();
	assert.equal(actual.toString(), expected.toString());

});