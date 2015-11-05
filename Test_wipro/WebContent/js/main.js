$(document).ready(function() {
	var sliderArr = [100, 100, 100];
	var index=0;
		var newVal = 100;
		$("input").click(function() {
			var btnVal = $(this).val();
			var offSet = parseInt(btnVal);
			var id = '#slider' + $("#bar").val();
			if(newVal<0){
				newVal=0;
			}
			newVal = newVal + offSet;
			var newValId = "#sliderSize"+$("#bar").val();
			var newOffSet = newVal + "%";
			if(newVal>100){
				$(id).css("background-color", "red");
				$(id).animate({
					width : "100%"
				}, 50);
				$(newValId).text(newVal+"%");
			}else if(newVal<=0){
				$(id).animate({
					width : "0%"
				}, 50);
				$(newValId).text("0%");
			}else{
				$(id).css("background-color", "green");
				$(id).animate({
					width : newOffSet
				}, 50);
				$(newValId).text(newVal+"%");
			}
			
		});
		$("#bar").change(function() {
			sliderArr[index]=newVal;
			var newIndex=$(this).val()-1;
			newVal=sliderArr[newIndex];
			index=newIndex;
			
		});
	});