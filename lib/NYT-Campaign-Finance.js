
/**
 * @class NYT.CampaignURL
 * A generic campaign URL
 * @extends Object
 */
NYT.CampaignURL = function(campaign_cycle, api_key, response_format, callback, version){
	
	this.campaign_cycle = campaign_cycle || "2000-present";
	this.api_key = api_key || "2aa53ca167a919c9be93fe68919698ee:11:68901588";
	this.response_format = response_format || "json";
	this.callback = callback || function(){};
	this.version = version || "v3";

};

/**
 * Returns a base URL of a generic CampaignURL
 * @return {String} base URL
 */
NYT.CampaignURL.prototype.getBaseURL = function(){
	return "//api.nytimes.com/svc/elections/us/v3/finances";
};

/**
 * Returns the campaignCycle of of a CampaignURL
 * @return {String} campaignCycle
 */
NYT.CampaignURL.prototype.getCampaignCycle = function(){
	return this.campaign_cycle;
};

/**
 * Returns a base URL of a generic CampaignURL
 * @param {String/Number} a year of YYYY format representing the campaign cycle
 */
NYT.CampaignURL.prototype.setCampaignCycle = function(campaign_cycle){
	this.campaign_cycle = campaign_cycle;
};

NYT.CampaignURL.prototype.getApiKey = function(){
	return this.api_key;
};

NYT.CampaignURL.prototype.setApiKey = function(api_key){
	this.api_key = api_key;
};	

NYT.CampaignURL.prototype.getResponseFormat = function(){
	return this.response_format;
};

NYT.CampaignURL.prototype.setResponseFormat = function(response_format){
	this.response_format = response_format;
};

NYT.CampaignURL.prototype.getCallback = function(){
	return this.callback;
};

NYT.CampaignURL.prototype.setCallback = function(callback){
	this.callback = callback;
};

NYT.CampaignURL.prototype.getVersion = function(){
	return this.version;
};

NYT.CampaignURL.prototype.setVersion = function(version){
	this.version = version;
};

/*
 * CANDIDATE SEARCH
 */

NYT.CampaignURL.CandidateSearch = function(new_campaign_cycle, new_last_name){
	this.campaign_cycle = new_campaign_cycle;
	this.last_name = new_last_name;
};

NYT.CampaignURL.CandidateSearch.prototype = new NYT.CampaignURL;

NYT.CampaignURL.CandidateSearch.prototype.getBaseURL = function(){
	return "//api.nytimes.com/svc/elections/us/v3/finances/{campaign_cycle}/candidates/search.{response_format}";
};









NYT.campaign = {};

NYT.campaign.base_url = "http://api.nytimes.com/svc/elections/us/v3/finances";


/* COMMON PARAMETERS */
NYT.campaign.version = "v3";
NYT.campaign.campaign_cycle = function(new_campaign_cycle){
	if (this.campaign_cycle == undefined ){
		return "2008-present";
	} else {
		return this.campaign_cycle;
	}
	
}

/* API KEY */
NYT.campaign.api_key = "2aa53ca167a919c9be93fe68919698ee:11:68901588";

/* RESPONSE FORMATS */
NYT.campaign.response_format = {};
NYT.campaign.response_format.JSON = "json";
NYT.campaign.response_format.XML = "xml";
NYT.campaign.response_format.JSON = "jsonp";
NYT.campaign.response_format.default = NYT.campaign.response_format.XML;

/* CALLBACK */
NYT.campaign.callback = function(callback_function){
	callback_function();
};


/* UTIL */

NYT.campaign.createQueryParam = function(property, param){
		if (property != "" && property !== undefined) {
			return "&" + param + "=" + property;
		} else {
			return "";
		}
	};
	
NYT.campaign.createQueryURL = function(query, filter, max){

	var url = NYT.campaign.base_url + 
		NYT.campaign.createQueryParam(query, "query") + 
		NYT.campaign.createQueryParam(filter, "filter") + 
		NYT.campaign.createQueryParam(max, "max") +
		NYT.campaign.createQueryParam(NYT.campaign.api_key, "api-key");

	return url;

};

/* Candidate Search */
NYT.campaign.candidate = {};
NYT.campaign.candidate.search = {};
NYT.campaign.candidate.search.setLastName = function(new_last_name){
	this.lname = new_last_name
};

NYT.campaign.candidate.search.getLastName = function(){
	return this.lname;
};

/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */

