
/*
 * CANDIDATE LEADERS
 */

NYT.CampaignURL.CandidateLeaders = function(campaign_cycle, api_key, response_format, callback, version, category){
	NYT.CampaignURL.call(this,campaign_cycle, api_key, response_format, callback, version);
	this.category = category || "";
};

NYT.CampaignURL.CandidateLeaders.prototype = new NYT.CampaignURL();

NYT.CampaignURL.CandidateLeaders.prototype.getBaseURL = function(){
	return "//api.nytimes.com/svc/elections/us/{version}/finances/{campaign_cycle}/candidates/leaders/{category}.{response_format}?";
};

/*
	Candidate Loan candidate-loan
	Contribution Total contribution-total
	Debts Owed debts-owed
	Disbursements Total disbursements-total
	End Cash end-cash
	Individual Total individual-total
	PAC Total pac-total
	Receipts Total receipts-total
	Refund Total refund-total
*/

NYT.CampaignURL.CandidateLeaders.prototype.getValidCategories = function(){
	var valid_categories = 
		new Array(	"candidate-loan",
					"contribution-total", 
					"debts-owed", 
					"disbursements-total", 
					"end-cash", 
					"pac-total", 
					"receipts-total", 	
					"refund-total");

	return valid_categories;

};

NYT.CampaignURL.CandidateLeaders.prototype.getCategory = function(){
	return this.category;
};

NYT.CampaignURL.CandidateLeaders.prototype.setCategory = function(category){
	var valid_categories = this.getValidCategories();
	for (var i = 0; i < valid_categories.length; i++) {
		if (category.toString() === valid_categories[i]) {
			this.category = category;
			return;
		};
	};

};

NYT.CampaignURL.CandidateLeaders.prototype.generateURL = function(){
	
	if (!this.getApiKey() || !this.getCampaignCycle() || !this.getResponseFormat() || !this.getCategory()) {
		return false;	
	};
	
	var url = 	this.generateBaseURL() + 
				this.createQueryParamString("api-key", this.getApiKey());

	return url;

};

NYT.CampaignURL.CandidateLeaders.prototype.generateBaseURL = function () {

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

	if (this.getCategory()) {
		base_url = base_url.replace("{category}", this.getCategory());	
	};

	return base_url;
};