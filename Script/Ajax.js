////////////////////////////////////////////////////////////////////////////////
//
//  LASAGNA
//  Copyright 2009-2011 lasagna
//  http://www.idmgh.com
//  All Rights Reserved.
//
//  NOTICE: lasagna permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////

/*package com.lasagna.iConnect*/

//init
var com;
if(!com) com = {};
if(!com.lasagna) com.lasagna = {};
if(!com.lasagna.iConnect) com.lasagna.iConnect = {};

com.lasagna.iConnect.Ajax = function(){
	
	this.lastResult = "";
	this.onComplete = function(){};
	this.onError    = function(){ alert("Error Loading Resource");};
	this.data       = null;
	this.url        = "";
	this.method     = "post";
	
	};

com.lasagna.iConnect.Ajax.prototype.getHttpRequest = function(){
	
   this.xmlhttp = null;
     if (window.XMLHttpRequest) {
      this.xmlhttp = new XMLHttpRequest();

      // XML MIME type
      if (this.xmlhttp.overrideMimeType) {
         this.xmlhttp.overrideMimeType('text/xml');
      };
   }  else {
      try
        {
            this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try
            {
                this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
               return null;
            };
        };
   };
   return this.xmlhttp;
};

com.lasagna.iConnect.Ajax.prototype.send = function () {
	
	this.http = new XMLHttpRequest();
	this.http.onComplete = this.onComplete;
	this.http.onError    = this.onError;
    
     if(!this.http){
		
      this.http = com.lasagna.iConnect.Ajax.prototype.getHttpRequest();
	  
      };
	  
   if(!this.http){ 
   
     return;
	 
      };
	  
	  if(this.method == "post"){
		  
		  this.http.open("POST", this.url, true);

               //Send the proper header information along with the request
			   try{
				   
              this.http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              this.http.setRequestHeader("Content-length", encodeURIComponent(data.length));
              this.http.setRequestHeader("Connection", "close");
			  
			   }catch(e){};
			   
		      this.http.send(data);
		  
		  }else if(this.method == "get"){
			  
			  this.http.open("GET", this.url, true);
			  this.http.send(null);
			  
			  };
			  
		  this.http.onreadystatechange = function(evnt){
			  
	if(this.readyState == 4){
		  
		if(this.status == 200){
           
		   this.onComplete();
		   
           }else{
		  
		  this.onError();
		  
	      };
		};
	  };
	  
	  this.defaults = function(){
			
			this.lastResult = this.http.responseText;
			return this.lastResult;
			
			};
			
	  this.json = function(){
			
			this.lastResult = eval(this.http.responseText);
			return this.lastResult;
			
			};
	     };
		
com.lasagna.iConnect.Ajax.prototype.settings = function(url,method,data,onComplete,onError){
	
	this.onComplete = onComplete;
	this.onError    = onError;
	this.data       = data;
	this.url        = url;
	this.method     = method;
	
	
	};
