


  
 /*(function($){
     $( '.menu-btn' ).click(function(){
     $('.responsive-menu').addClass('expand')
     $('.menu-btn').addClass('btn-none')
     })
     
     $( '.close-btn' ).click(function(){
     $('.responsive-menu').removeClass('expand')
     $('.menu-btn').removeClass('btn-none')
     })
   })
   
   jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand')
    	     })
        }) */
		
			
			
		$(document).ready(function(){
		/*Saving the api and the time in a variable */
			function previewFile() {
				  var preview = document.document.getElementById()('img.preview');
				  var file    = document.querySelector('input[type=file]').files[0];
				  var reader  = new FileReader();

				  reader.addEventListener("load", function () {
					preview.src = reader.result;
				  }, false);

				  if (file) {
					reader.readAsDataURL(file);
				  }
				  }
				  
			function adjustHeight(el){
				el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "20px";
			}
		
			var reweyou = 'https://www.reweyou.in/chauhan.php' ;
			var time = Date.now();
			
		/* Making the ajax request to the Api */	
		
			$.ajax({
				type: 'GET',
				dataType: "json",
				cache: false,
				url: reweyou,
				
				success: function(data) {
					console.log(data.length);
					   for(var i = 0; i < data.length; i++) {
						var title = data[i].name;
						var project = 'project'+ '' + [i];
						var target = '#project'+ '' + [i];
						var description = data[i].headline;
						var category = '#'+ '' + data[i].category;
						
						var imageSrc = data[i].image;
						/*
						 Calculating the time time difference between the present and the published time in mins */
						/*
						var timeDifferenceInMins = Math.round((time - data.data.feed[i].publishDate)/(1000*60));
						
						 Calculating the time time difference between the present and the published time in hours */
					/*	
						var timeDifferenceInHours = Math.round((time - data.data.feed[i].publishDate)/(1000*60*60));
						
						 Calculating the time time difference between the present and the published time in days 
						
						var timeDifferenceInDays = Math.round((time - data.data.feed[i].publishDate)/(1000*60*60*24));
						
						var timelapse;
						
					 This function is checking if the timedifference is in mins or in hours or in days and applying accordingly 
					
						function timeNow () {
							if (timeDifferenceInMins < 60) {
								timelapse = timeDifferenceInMins + ' mins ago';
								return timelapse; 
							}  else if(timeDifferenceInMins > 60 & timeDifferenceInMins <1440 ) {
								timelapse = timeDifferenceInHours + ' hours ago';
								return timelapse;
							}  else {
								timelapse = timeDifferenceInDays + ' days ago';
								return timelapse;
							}
							return timelapse
						}
						timeNow(); */
							
							
					/* Appending the data received from the Api into the main feed */
					
					$('body').append('<div class="modal fade" id="'+project+'" tabindex="1000" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
					  '<div class="modal-dialog">' +
						'<div class="modal-content">' +
						  '<div class="modal-header">' +
							'<h4 class="modal-title" id="myModalLabel">Read and Report. Reweyou!!</h4>' +
						 '</div>' + 
						  '<div class="modal-body">' +
							'<img class="img-responsive" src="'+imageSrc+'">' + 
								description +
						  '</div>' + 
						  '<div class="modal-footer">' + 
							'<button type="button" class="btn btn-default" data-dismiss="modal">X</button>' +
						  '</div>' + 
						'</div>' + 
					  '</div>' +
					'</div>');
					
						$('#newsfeed').append('<div class = "feed-card">' + '<div class = "author-name-time">' + '<div class = "author">' +
									'<img src="images/logo_tansparent.png" class="author-img">' + '</div>' + '<div class = "author-name">' + 
									'<strong> Reweyou </strong>' + '<br>' + '<span class = "feed-time">' + title + '</span>' + '</div>' + '</div>' + 
									'<div class ="feed-main-item" data-toggle="modal" data-target="'+target+'"> ' + '<div class = "feed-image" > ' +  '<img src="'+imageSrc+'">' + '</div>' +
									'<div class = "feed-supporting-text">' +  '<h5 class = "feed-title">' + category + '</h5>' +  
									'<span class = "feed-description">' + description + '</span>' + '</div>' +  '</div>'+ '</div>');
					
					/* Checking the feed data if it's sponsored or not and then appending to the feed */
					
					/*	if(data.data.feed[i].sponsored == true)	{		
						$('#featured-entity').append('<div class = "feed-card-right">' + 
						'<a href = "https://www.facebook.com" class ="feed-main-item"> ' + '<div class = "feed-image-title"> ' + 
						'<img src="'+imageSrc+'">' + '<div class = "feed-supporting-text">' +  '<span class = "feed-title">' + title + '</span>' + '</div>' + '</div>' + '</a>' + '</div>');
						} */
					};
			
				
		
				}
				});
			
				
		});