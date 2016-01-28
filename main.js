window.onload = function () {
	function Submition(){
		alert("subm")
		var regex = document.getElementById("regexp").value;
		var flag = document.getElementById("flag").value;
		var string = document.getElementById("string").value;

		document.getElementById("result").text = regex + "\n" + flag + "\n" + string;
	}
};