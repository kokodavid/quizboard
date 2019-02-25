$(document).ready(function() {
	$('#quiz').submit(function(event){
		event.preventDefault();
		var value1 = parseInt($("[name=question1]:checked").val());
		var value2 = parseInt($("[name=question2]:checked").val());
		var value3 = parseInt($("[name=question3]:checked").val());
    var value4 = parseInt($("[name=question4]:checked").val());
		var value5 = parseInt($("[name=question5]:checked").val());
		var value6 = parseInt($("[name=question6]:checked").val());
		var value7 = parseInt($("[name=question7]:checked").val());
		var value8 = parseInt($("[name=question8]:checked").val());
		var value9 = parseInt($("[name=question9]:checked").val());
		var value10 = parseInt($("[name=question10]:checked").val());
    var result = parseInt(value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10);
    if (result >50) {
      $("outout").text("CONGTATULATIONS" + "Your score is:" + result);
    }else{
      		$("#output").text("Your score is : " + result + " Retake the test");
    }
	});
});
