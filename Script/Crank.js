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

	//animate logo
   Crank.AnimateTopMargin = function(opt){
	   
	//create defaults
	defaults = {speed: 1000,value:90,callback:function(){console.log("Complete");}}
	
	//handle jQuery animation method with options
	$("#"+opt.id).animate({marginTop:opt.value},opt.speed,function(){opt.callback()});
	
	//check for default options
	opt = typeof opt == 'object' ? $.extend(defaults, opt) : opt = defaults;
	
	}
	
	var latitude;
	var longitude;
	
	  function getCountry(results)
    {
        for (var i = 0; i < results[0].address_components.length; i++)
        {
        var shortname = results[0].address_components[i].short_name;
        var longname = results[0].address_components[i].long_name;
        var type = results[0].address_components[i].types;
        if (type.indexOf("country") != -1)
        {
            if (!isNullOrWhitespace(shortname))
            {
                alert(shortname);
            }
            else
            {
                alert(longname);
            }
        }
    }

}

function isNullOrWhitespace(text) {
    if (text == null) {
        return true;
    }
    return text.replace(/\s/gi, '').length < 1;
}
	
	//get the user country
	 Crank.UserCountry = function(){
		 
		 if (navigator.geolocation) {
			 
       console.log('Geolocation is supported!');
	   
	   var startPos;
       navigator.geolocation.getCurrentPosition(function(position) {
		   
       startPos = position;
       latitude =  startPos.coords.latitude;
      longitude = startPos.coords.longitude;
	  url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=false";
	  alert(longitude);
	  $.getJSON(url,
        function(data){
			
			alert(data);
			
          $.each(data.items, function(i,item){
			  
            $("<img/>").attr("src", item.media.m).appendTo("#images");
			
            if ( i == 3 ) return false;
			
           });
        });
	  
	  /* geocoder = new google.maps.Geocoder();
	  country = geocoder.getLocations(latitude+","+longitude, function(results,status){
		  
		  if (status == google.maps.GeocoderStatus.OK) {
			  
                if (results[0]) {
					
                    var loc = getCountry(results);
                }
		     }
			 
		  });*/
	
	   }, function(error) {
		   
		   
		   
		   })
         
		 }else{
			 
        console.log('Geolocation is not supported for this Browser/OS version yet.');
  
      }
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

