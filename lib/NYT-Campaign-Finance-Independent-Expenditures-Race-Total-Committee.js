
/*
 * CANDIDATE SEARCH
 */

NYT.CampaignURL.CandidateSearch = function(campaign_cycle, api_key, response_format, callback, version, query){
	NYT.CampaignURL.call(this,campaign_cycle, api_key, response_format, callback, version);
	this.query = query || "";
};

NYT.CampaignURL.CandidateSearch.prototype = new NYT.CampaignURL();

NYT.CampaignURL.CandidateSearch.prototype.getBaseURL = function(){
	return "//api.nytimes.com/svc/elections/us/{version}/finances/{campaign_cycle}/candidates/search.{response_format}?";
};


NYT.CampaignURL.CandidateSearch.prototype.getQuery = function(){
	return this.query;
};

NYT.CampaignURL.CandidateSearch.prototype.setQuery = function(query){
	this.query = query;
};

NYT.CampaignURL.CandidateSearch.prototype.generateURL = function(){
	
	if (!this.getApiKey() || !this.getCampaignCycle() || !this.getResponseFormat()) {
		return false;	
	};
	
	var url = 	this.generateBaseURL() + 
				this.createQueryParamString("api-key", this.getApiKey()) +
				this.createQueryParamString("query", this.getQuery());

	return url;

};
