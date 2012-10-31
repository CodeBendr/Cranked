////////////////////////////////////////////////////////////////////////////////
//
//  Assignment Crank
//  Copyright 2009-2012 Assignment
//  http://www.digitalbenderz.com/codebender?id=skrizy
//  http://www.evansdomina.com/
//  All Rights Reserved.
//
//  NOTICE: digital benders permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////

/*package com.Assignment.Crank*/

(function(window,Assignment){
   
   function Crank(){}
   
    //use var to represent private vars or methods
  
    //public constants
    Crank.PACKAGE = "com.Assignment.Foundation.Crank";
	Crank.COUNTRY = "";
	Crank.NUMBER_LENGTH = 0;
	
	Crank.isNumber =  function(n) {
		
     return !isNaN(parseFloat(n)) && isFinite(n);
	 
    }
	
	Crank.Starter = function(opt){
		
		//create defaults
	    defaults = {speed:900}
		
		 $("#"+opt.container).animate({"marginTop":30},1200,function(){
		 
		  $("#"+opt.welcome).fadeIn(opt.speed);
		  $("#"+opt.line).fadeIn(opt.speed)
		  $("#"+opt.button).show();
		  $("#"+opt.button).animate({"marginTop":0},opt.speed);
		 
		 });
		 
		 //check for default options
	     opt = typeof opt == 'object' ? $.extend(defaults, opt) : opt = defaults;
		
		}
		
	Crank.StarterButton = function(){
		
		
		
		}
		
	function geocodingSettings(){
		
		
		 $("#crank_logo").animate({"marginLeft":0},700,function(){
			 
			  $("#crank_logo_container").animate({"marginTop":-260},700,function(){
				 
				 $("#crank_logo").hide();
				 $("#crank_logo_small").show(function(){
					 
					 $("#crank_logo_container").animate({"marginTop":-130})
					 $("#crank_logo_small").animate({"marginTop":140},function(){
						 
						 $("#crank_welcome").hide();
						  $("#crank_btnStarted").animate({"marginTop":-87});
						  
				$("#crank_btnStarted").animate({"marginTop":-90})
				$("#crank_txtFieldSet_country").fadeIn();
				$("#crank_txtFieldSet_zipcode").show();
				$("#crank_txtFieldSet_zipcode").animate({"marginTop":0})
				$("#crank_txtChooseCountry").hide();
				$("#crank_number").fadeIn();
				$("#number").focus();
				$("#crank_btnVerify").fadeIn();
					
						   
						 })
					 
					 });
				
				 
				 });
			 
			 })
		
		
		}
		
	function manualLocation(){
		
		Crank.zipCode();
		
		 $("#crank_logo").animate({"marginLeft":0},700,function(){
			 
			  $("#crank_logo_container").animate({"marginTop":-260},700,function(){
				 
				 $("#crank_logo").hide();
				 $("#crank_logo_small").show(function(){
					 
					 $("#crank_logo_container").animate({"marginTop":-130})
					 $("#crank_logo_small").animate({"marginTop":140},function(){
						 
						 $("#crank_welcome").hide();
						  $("#crank_txtChooseCountry").fadeIn(); 
						  $("#crank_btnStarted").animate({"marginTop":-87})
						   $(".crank_btnCountry").fadeIn();
						   
						 })
					 
					 });
				
				 
				 });
			 
			 })
		
		}
		
	Crank.zipCode = function(){
		
		countries = [{country:"GHANA",zipcode:233},{country:"NIGERIA",zipcode:2},{country:"UK",zipcode:44}];
		
		$(".crank_text_spacing").click(function(){
			
			    $("#crank_btnStarted").animate({"marginTop":-162})
				$("#crank_txtFieldSet_country").fadeIn();
				$("#crank_txtFieldSet_text").text($(this).text());
				if($(this).text() == "GHANA"){$("#crank_txtFieldSet_title_sub").text("+233"); Crank.NUMBER_LENGTH = 9;}
				if($(this).text() == "NIGERIA"){$("#crank_txtFieldSet_title_sub").text("+2"); Crank.NUMBER_LENGTH = 12;}
				if($(this).text() == "UK"){$("#crank_txtFieldSet_title_sub").text("+44"); Crank.NUMBER_LENGTH = 10}
				$("#crank_txtFieldSet_zipcode").show();
				$("#crank_txtFieldSet_zipcode").animate({"marginTop":0})
				$("#crank_txtChooseCountry").hide();
				$("#crank_number").fadeIn();
				$("#number").focus();
				$("#crank_btnVerify").fadeIn();
			
			
		})
	}
	
	var latitude;
	var longitude;
	
	 //get the user country
	 Crank.UserCountry = function(){
		 
		if (navigator.geolocation) {
			 
       console.log('Geolocation is supported!');
	   
	   var startPos;
       navigator.geolocation.getCurrentPosition(function(position) {
		   
       startPos = position;
       latitude =  startPos.coords.latitude;
      longitude = startPos.coords.longitude;
	//  url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=false";
	url  = "https://api.foursquare.com/v2/venues/search?ll="+latitude+","+longitude+"&oauth_token=3IYMA1D0J2OFDMORTCOIEWZMLUGW2HCRTMGWSXDQN5RQBGR2&v=20120407";

	$.ajax({
    type: "GET",
    url: url,
	async: false,
    dataType: "jsonp",
	jsonpCallback: 'jsonCallback',
 contentType: "application/json",
    success: function(json) {

 Crank.COUNTRY = String(json.response.venues[0].location.country).toUpperCase();
 
  if(Crank.COUNTRY == "GHANA"){
	  
	  $("#crank_txtFieldSet_title_sub").text("+233"); 
	  console.log(Crank.COUNTRY);
	  geocodingSettings();
	  $("#crank_txtFieldSet_text").text(Crank.COUNTRY);
	  
	  } else if(Crank.COUNTRY == "NIGERIA"){
		  
		  $("#crank_txtFieldSet_title_sub").text("+2")
		  
		  }else if(Crank.COUNTRY == "UK"){
			  
			  $("#crank_txtFieldSet_title_sub").text("+44")
			  
			  
			  }else{
			  
			  manualLocation();}
 // if(Crank.COUNTRY == "UK"){$("#crank_txtFieldSet_title_sub").text("+44")}else{manualLocation();}
 


    },
    error: function(e) {
		
       console.log("error");
	   manualLocation();
    
		}
})
	
	   }, function(error) {
		   
		   console.log('Error Getting location');
		   manualLocation();
		   
		   })
         
		 }else{
			 
        console.log('Geolocation is not supported for this Browser/OS version yet.');
	    manualLocation();
  
      }
 }
 
 
 Crank.CoverBox = function(opt){
	
     var coverbox = new com.lasagna.iComp.CoverBox();
 
     coverbox.buttonStyle("#415762","#415762","#fff");
	coverbox.CoverBoxStyles("url('Assets/coverBox.png')");
	coverbox.closeButtonStyle("none","#fff","13px");
	coverbox.titleStyle("#415762","#fff","16px");

	coverbox.useCloseButton = true;
	coverbox.useModalClose  = false;
	coverbox.jQuery         = true;
	coverbox.useButtons     = true;
			
	coverbox.Text = opt.text;//"Surname or First Name Not Found; Please Check Before Proceeding";
	
	coverbox.Title = opt.title//"Empty Fields Detected";
	coverbox.Buttons("OK");
    coverbox.add();
	$("#body").css({"overflow":"hidden"});
	//$(coverbox.jQueryID.box).hide();
    coverbox.jQueryEvent("click",function(){
		
	$(coverbox.jQueryID.box).fadeOut("fast",function(){coverbox.destroy()});
	$("#body").css({"overflow":"auto"});
	$("#number").focus();
		
	}); 
	
}
	
	//return an object by using the document.getElementById native function   
	Crank.o = function(id){
	
	  return document.getElementById(id);
	
    };
	
	Crank.target = function(evnt){
	
	  var e = evnt ? evnt : window.event;
	  var _target = e.target ? evnt.target : e.srcElement;  
	
	  return _target;
	
     };
	 
	//private methods
    var sprite = function(e){
	
    return document.createElementNS ? document.createElementNS( 'http://www.w3.org/1999/xhtml', e) : document.createElement(e);

    };
	
	var createID = function(name){
	
	return name +  Math.floor(Math.random() * 15000);
	   
    };
	 
	//expose the class to the windows object ; this makes it public
	window.Crank = Crank;
	
	}(window))

