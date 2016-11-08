$(function(){
	$('#search').on('click',function(){
		var searchTerm = $('#searchTerm').val();
		var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm+'&format=json&callback=?';
		$.ajax({
			url: url,
			type:'GET',
			dataType:'json',
			success: function(data,status,jqxhr){
				console.log(data);
				$('#output').html();
				for(var i=0;i<data[1].length;i++) {
					$('#output').prepend("<div><div class='well'><a href="+data[3][i]+"><h2>"+data[1][i]+"</h2><p>"+data[2][i]+"</p></a></div></div>");
				}
			}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	});
});