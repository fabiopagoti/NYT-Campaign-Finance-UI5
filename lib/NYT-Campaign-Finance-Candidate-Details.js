
/*
 * CANDIDATE DETAILS
 */

NYT.CampaignURL.CandidateDetails = function(campaign_cycle, api_key, response_format, callback, version, fec_id){
	NYT.CampaignURL.call(this,campaign_cycle, api_key, response_format, callback, version);
	this.fec_id = fec_id || "";
};

NYT.CampaignURL.CandidateDetails.prototype = new NYT.CampaignURL();

NYT.CampaignURL.CandidateDetails.prototype.getBaseURL = function(){
	return "//api.nytimes.com/svc/elections/us/{version}/finances/{campaign_cycle}/candidates/{fec_id}.{response_format}?";
};


NYT.CampaignURL.CandidateDetails.prototype.getFecId = function(){
	return this.fec_id;
};

NYT.CampaignURL.CandidateDetails.prototype.setFecId = function(fec_id){
	this.fec_id = fec_id;
};

NYT.CampaignURL.CandidateDetails.prototype.generateURL = function(){
	
	if (!this.getApiKey() || !this.getCampaignCycle() || !this.getResponseFormat() || !this.getFecId()) {
		return false;	
	};
	
	var url = 	this.generateBaseURL() + 
				this.createQueryParamString("api-key", this.getApiKey());

	return url;

};

NYT.CampaignURL.CandidateDetails.prototype.generateBaseURL = function () {

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

	if (this.getFecId()) {
		base_url = base_url.replace("{fec_id}", this.getFecId());	
	};

	return base_url;
};