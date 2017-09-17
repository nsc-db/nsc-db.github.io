
$( document ).ready(function() {
	
	$('#toggleRarity').click(function(){
	  if ( $('#six-star').css('opacity') == '0' )
	    $('#six-star').addClass('six-star-active');
	  else
	    $('#six-star').removeClass('six-star-active');
	});

	$('#toggleRarity').click(function(){
	    $('#toggleRarity').toggleClass('toggle-six');
	});

	window.lastPanel = "";

	window.onSelectPanel = function(panel) {
		var _lastPanel = "";

		if (panel == "ability-btn" || panel == "ability-six-btn")
			_lastPanel = "ability";
		else if (panel == "skills-btn" || panel == "skills-six-btn")
			_lastPanel = "skills";
		else if (panel == "status-btn" || panel == "status-six-btn")
			_lastPanel = "status";
		else if (panel == "gear-btn" || panel == "gear-six-btn")
			_lastPanel = "gear";

		if (window.lastPanel == _lastPanel)
			return null;

		window.lastPanel = _lastPanel;

		if (_lastPanel == "ability")
		{ $("#ability-btn").click(); $("#ability-six-btn").click(); }
		if (_lastPanel == "skills")
		{ $("#skills-btn").click(); $("#skills-six-btn").click(); }
		if (_lastPanel == "status")
		{ $("#status-btn").click(); $("#status-six-btn").click(); }
		if (_lastPanel == "gear")
		{ $("#gear-btn").click(); $("#gear-six-btn").click(); }

	};

	$("#ability-btn").on("click", function() { window.onSelectPanel("ability-btn"); });
	$("#ability-six-btn").on("click", function() { window.onSelectPanel("ability-six-btn"); });
	$("#skills-btn").on("click", function() { window.onSelectPanel("skills-btn"); });
	$("#skills-six-btn").on("click", function() { window.onSelectPanel("skills-six-btn"); });
	$("#status-btn").on("click", function() { window.onSelectPanel("status-btn"); });
	$("#status-six-btn").on("click", function() { window.onSelectPanel("status-six-btn"); });
	$("#gear-btn").on("click", function() { window.onSelectPanel("gear-btn"); });
	$("#gear-six-btn").on("click", function() { window.onSelectPanel("gear-six-btn"); });

});