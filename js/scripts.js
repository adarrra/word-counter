jQuery(document).ready(function	(){
/////////////

	$('.for-result').hide();

	$('#sentence-form').submit(function(e){
		$(".col-md-2").empty();
		var string = $("#sentence").val();

		function wordCounter(string) {
			string = string.toLowerCase();
			string = string.replace(/[,.?!-";:]/g, ''); 
			var sortedWords = string.split(" ");
			sortedWords = sortedWords.sort();
			var previous = "";
			var frequency = 0;
			var wordFrequency = [];
			for(var i= 0; i < sortedWords.length; i++){
				if(previous == sortedWords[i]){
					frequency += 1;
				}else{
					if(previous != ""){
						wordFrequency.push([previous, frequency]);
					}
					previous = sortedWords[i];
					frequency = 1
				}
			}
			wordFrequency.push([previous, frequency]);
			return wordFrequency;
		}

		function selectionSort(array){      //сортировка выбором
			var n =array.length;
			for (var i =0; i < n-1; i++){
				var max = i;
				for(var j= i+1; j<n; j++){
					if(array[j][1]> array[max][1])
						max = j
				}
				var temp = array[max];
				array[max]= array[i];
				array[i]= temp;
			}
			return array;
		}

		var wordSortAndFrequency = selectionSort( wordCounter(string));


		$('.for-result').show();

		wordSortAndFrequency.forEach(function(element){
			$(".word").append(element[0]+ "<br>");
			$(".frequency").append(element[1]+ "<br>");
		});


		e.preventDefault();
	});






//////////////
});