


// /* RESPONSE FORMATS */
// NYT.campaign.response_format = {};
// NYT.campaign.response_format.JSON = "json";
// NYT.campaign.response_format.XML = "xml";
// NYT.campaign.response_format.JSON = "jsonp";
// NYT.campaign.response_format.default = NYT.campaign.response_format.XML;

// /* CALLBACK */
// NYT.campaign.callback = function(callback_function){
// 	callback_function();
// };




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
	this.mandatory_parameters = ["api-key", "campaign-url", "response-format", "version"];

};

/**
 * Returns a base URL of a generic CampaignURL
 * @return {String} base URL
 */
NYT.CampaignURL.prototype.getBaseURL = function(){
	return "//api.nytimes.com/svc/elections/us/{version}/finances?";
};

NYT.CampaignURL.prototype.generateURL = function(){
	var url = 	this.generateBaseURL() + "?" +
				this.createQueryParamString("api-key", this.getApiKey()) +
				this.createQueryParamString("callback", this.getCallback()); // callback should be a string or a function? Seems to be a string

	return url;
};

NYT.CampaignURL.prototype.generateBaseURL = function () {

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

NYT.CampaignURL.prototype.createQueryParamString = function(parameter_name, property_value){
	if (property_value) {
		return "&" + parameter_name + "=" + property_value;
	} else {
		return "";
	}
};

NYT.CampaignURL.prototype.createQueryParamArray = function(parameter_name, property_value){
	if (!property_value) {
		return "";
	}

	var url_param = "&" + parameter_name + "=";

	url_param += property_value[0]; // todo: implement concatenation logic
	// for (var i_property = 0; i_property < arrayProperty.length; i_property++) {
	// 	if (i_property == 0) {
	// 		url_param = url_param + arrayProperty[i_property];				
	// 	} else {
	// 		url_param = url_param + "," + arrayProperty[i_property];				
	// 	}
	// }
	return url_param;
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

NYT.CampaignURL.prototype.getMandatoryParameters = function(){
	return this.mandatory_parameters;
};

NYT.CampaignURL.prototype.setMandatoryParameters = function(mandatory_parameters){
	this.mandatory_parameters = mandatory_parameters;
};













// NYT.campaign = {};



