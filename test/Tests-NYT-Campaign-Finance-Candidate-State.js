QUnit.module("CandidateState");

/*
 * CANDIDATE LEADERS
 */
QUnit.test( "Creation of a CampaignURL.CandidateState object", function(assert){	
	var actual_obj = new NYT.CampaignURL.CandidateState();
	assert.expect(2);
	assert.ok(actual_obj instanceof NYT.CampaignURL);
	assert.ok(actual_obj instanceof NYT.CampaignURL.CandidateState);
});

QUnit.test( "Base URL", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	var expected = "//api.nytimes.com/svc/elections/us/{version}/finances/{campaign_cycle}/candidates/leaders/{state}.{response_format}?";
	assert.equal(actual_obj.getBaseURL(), expected);
});

QUnit.test( "Base URL is not CampaignURL Base URL", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	var expected = new NYT.CampaignURL().getBaseURL();
	assert.notEqual(actual_obj.getBaseURL(), expected);
});


QUnit.test( "Independent response formats between objects", function(assert){
	var url1 = new NYT.CampaignURL.CandidateState();
	var url2 = new NYT.CampaignURL.CandidateState();

	url1.setResponseFormat("json");
	url2.setResponseFormat("xml");

	assert.notEqual(url1.getResponseFormat(), url2.getResponseFormat());
});


/* GETTERS AND SETTERS */

QUnit.test( "setCampainCycle", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	actual_obj.setCampaignCycle("2000-present");
	
	var expected = "2000-present";
	
	assert.equal(actual_obj.getCampaignCycle() , expected);
});

QUnit.test( "setApiKey", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	actual_obj.setApiKey("ABC");

	var expected = "ABC";

	assert.equal(actual_obj.getApiKey() , expected);
});

QUnit.test( "setResponseFormat", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	actual_obj.setResponseFormat("xml");
	
	var expected = "xml";
	
	assert.equal(actual_obj.getResponseFormat() , expected);
});


QUnit.test( "setCallback", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	
	var a = function(){
		return 1;
	};
	
	actual_obj.setCallback(a);
	var expected = a;

	assert.equal(actual_obj.getCallback() , expected);

});

QUnit.test( "setVersion", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	actual_obj.setVersion("v3");
	var expected = "v3";

	assert.equal(actual_obj.getVersion() , expected);

});


QUnit.test( "setCategory", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();
	actual_obj.setCategory("candidate-loan");
	var expected = "candidate-loan";

	assert.equal(actual_obj.getCategory() , expected);

});


/*
 * CALLABLE URLS
 */

// No parameters
QUnit.test( "Generate Callable URL: NO PARAMS", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "";
	var response_format = "";
	var campaign_cycle = "";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	var act = actual_obj.generateURL();
	assert.equal(act , false);

});

// 1 parameter

QUnit.test( "Generate Callable URL: API-KEY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "ABC";
	var response_format = "";
	var campaign_cycle = "";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});


QUnit.test( "Generate Callable URL: FORMAT", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "";
	var response_format = "json";
	var campaign_cycle = "";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});

QUnit.test( "Generate Callable URL: CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "";
	var response_format = "";
	var campaign_cycle = "2000-present";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});


// 2 parameters

QUnit.test( "Generate Callable URL: API-KEY + FORMAT", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "ABC";
	var response_format = "json";
	var campaign_cycle = "";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});

QUnit.test( "Generate Callable URL: API-KEY + CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "ABC";
	var response_format = "";
	var campaign_cycle = "2000-present";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});

QUnit.test( "Generate Callable URL: FORMAT + CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "";
	var response_format = "json";
	var campaign_cycle = "2000-present";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , false);

});


// 3 parameters
QUnit.test( "Generate Callable URL: API-KEY + FORMAT + CAMPAIGN", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "ABC";
	var response_format = "json";
	var campaign_cycle = "2000-present";
	var state = "";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	var actual = actual_obj.generateURL();
	
	assert.equal(actual, expected);

});

QUnit.test( "Generate Callable URL: API-KEY + FORMAT + CATEGORY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "ABC";
	var response_format = "json";
	var campaign_cycle = "";
	var state = "candidate-loan";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , expected);

});


QUnit.test( "Generate Callable URL: API-KEY + CAMPAIGN + CATEGORY ", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "ABC";
	var response_format = "";
	var campaign_cycle = "2000-present";
	var state = "candidate-loan";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , expected);

});

QUnit.test( "Generate Callable URL:  FORMAT + CAMPAIGN + CATEGORY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "";
	var response_format = "json";
	var campaign_cycle = "2000-present";
	var state = "candidate-loan";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = false;

	assert.equal(actual_obj.generateURL() , expected);

});

// 4 parameters
QUnit.test( "Generate Callable URL: API-KEY + FORMAT + CAMPAIGN CYCLE + CATEGORY", function(assert){
	var actual_obj = new NYT.CampaignURL.CandidateState();

	var api_key = "123";
	var response_format = "json";
	var campaign_cycle = "2008-present";
	var state = "candidate-loan";

	actual_obj.setApiKey(api_key);
	actual_obj.setResponseFormat(response_format);
	actual_obj.setCampaignCycle(campaign_cycle);
	actual_obj.setCategory(state);

	var expected = ( 	"//api.nytimes.com/svc/elections/us/v3/finances/" +
						campaign_cycle + "/" +
						"candidates/leaders/" +
						state + 
						"." + response_format +  "?" +
						"&api-key=" + api_key );

	var actual = actual_obj.generateURL();
	assert.equal(actual.toString(), expected.toString());

});