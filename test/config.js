// http://api.qunitjs.com/QUnit.config

QUnit.config.altertitle = true;

QUnit.config.autostart = true;

// QUnit.config.current

QUnit.config.hidepassed = false;

QUnit.config.reorder = true;

QUnit.config.requireExpects = false;

QUnit.config.testNumber = [];

QUnit.config.testTimeout = 1000; // 1 second

QUnit.config.scrolltop = false;

QUnit.config.urlConfig.push(
	{
		id: "chk_1",
		label: "Checkbox 1",
		value: undefined,
		tooltip: "Checkbox 1 tooltip",
	},
	{
		id: "chk_2",
		label: "Checkbox 2",
		value: 'chk2',
		tooltip: "Checkbox 2 tooltip",
	},
	{
		id: "select_1",
		label: "Select 1",
		value: ["option 1", "option 2", "option 3"],
		tooltip: "Select 1 tooltip",
	},
	{
		id: "select_2",
		label: "Select 2",
		tooltip: "Select 2 tooltip",
		value: {
			optionA: "Option A",
			optionB: "Option B",
			optionC: "option C",
		},
	}


	);