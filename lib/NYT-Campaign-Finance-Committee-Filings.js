
/*
 * CANDIDATE NEW 
 */

NYT.CampaignURL.CandidateState = function(campaign_cycle, api_key, response_format, callback, version){
	NYT.CampaignURL.call(this,campaign_cycle, api_key, response_format, callback, version);
};

NYT.CampaignURL.CandidateState.prototype = new NYT.CampaignURL();

NYT.CampaignURL.CandidateState.prototype.getBaseURL = function(){
	return "//api.nytimes.com/svc/elections/us/{version}/finances/{campaign_cycle}/seats/{state}/{chamber}{district}.{response_format}";
};

NYT.CampaignURL.CandidateState.prototype.generateURL = function(){
	
	if (!this.getApiKey() || !this.getCampaignCycle() || !this.getResponseFormat() || !this.getState()) {
		return false;	
	};
	
	var url = 	this.generateBaseURL() + 
				this.createQueryParamString("api-key", this.getApiKey());

	return url;

};

NYT.CampaignURL.CandidateState.prototype.generateBaseURL = function () {

	var base_url = this.getBaseURL();

	if (this.getVersion()) {
		base_url = base_url.replace("{version}", this.getVersion());	
	};

	if (this.getCampaignCycle()) {
		base_url = base_url.replace("{campaign_cycle}", this.getCampaignCycle());	
	};
	
	if (this.getResponseFormat()) {
		base_url = base_url.replace("{response_format}", this.getResponseFormat());	
	};

	return base_url;
};