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

/*package com.lasagna.iComp*/

//init
var com;
if(!com) com = {};
if(!com.lasagna) com.lasagna = {};
if(!com.lasagna.iComp) com.lasagna.iComp = {};

//constructor
com.lasagna.iComp.CoverBox = function(){
	
	 this.OK  = "ok";
     this.YES = "yes";
     this.NO  = "no";
	
	this.useIcon        = false;
	this.jQuery         = false;
	this.jQueryEvent    = [];
	this.jQueryID       = [];
	this.instance       = [];
	this.length         = [];
	this.useCloseButton = false;
	this.useTitle       = true;
	this.useButtons     = false;
	this.useModal       = true;
	this.useModalClose  = false;
	this.contentType    = "idm/text";
	this.Text           = "&nbsp;";
	this.update         = function(){};
	this.windowSize     = function(){};
	
	this.Style                 = "CoverBox";
	this.ButtonStyle           = "CoverBoxButton";
	this.ButtonBackgroundColor = "#c51313";
    this.ButtonBorderColor     = "#ffffff";  
    this.TextColor             = "#ffffff";     
    this.ButtonWidth           = "50px";
    this.ButtonHeight          = "15px";
    this.ButtonFontSize        = "10px";
	this.Icon                  = "../com/lasagna/iStyle/UI/CoverBoxHeart.png";
	this.flag                  = [];
	
	this.TextStyle               = "CoverBoxText";
	this.TextAlign               = "left";
	this.BackgroundColor         = "#fb4f51";
	this.BackgroundBorderColor   = "#c51313";
	this.MainTextColor           = "#FFFFFF";
	this.Width                   = "400px";
	
	this.TitleStyle      = "TitleBox"; 
	this.TitleBackground = "#c51313";
	this.TitleTextColor  = "#FFFFFF";
	this.TitleFontSize   = "30px";
	this.Title           = "";
	
    this.CloseButtonStyle           = "CoverBoxClose";
	this.CloseButtonBackgroundColor = "#fb4f51";
	this.CloseButtonTextColor       = "#FFFFFF";
    this.CloseButtonFontSize        = "14px";
	
	this.ModalStyle      = "CoverBoxModal";
	this.ModalPosition   = "fixed";
	this.ModalCon        = "url('Assets/CoverBoxBackgroundImage.png')";
	
	};

com.lasagna.iComp.CoverBox.prototype.add = function (CloseEvent){
    
    this.boxModal                  = document.createElement("div");
	this.boxModal.id               = "com_iDesignMedia_iComp_CoverBox_modal" + Math.ceil(Math.random() * 19000);
	this.instance["modal"]         = this.boxModal.id;
	this.jQueryID["modal"]         = "#"+this.boxModal.id;
	this.boxModal.detail           = "modal";
    this.boxModal.className        = this.ModalStyle;
	this.boxModal.style.background = this.ModalCon; 
	
	document.body.appendChild(this.boxModal);
	
	if(this.useModalClose){
	
	if(!this.jQuery){	
		
	this.boxModal.onclick = CloseEvent;
	
	  }else{
		  
	this.length.push("#"+this.boxModal.id);	  
	
		  };
    };
	
	if(!this.useModal){
		
	this.boxModal.style.background = "none";
		
	};

	  this.box                   = document.createElement("div");
	  this.box.id                = "com_iDesignMedia_iComp_CoverBox_Box" + Math.ceil(Math.random() * 12000);
	  this.jQueryID["box"]       = "#"+this.box.id;
	  this.instance["box"]       = this.box.id;
	  this.box.className         = this.Style;
      this.box.style.background  = this.BackgroundColor;
	  this.box.style.borderColor = this.BackgroundBorderColor;
	  this.box.style.width       = this.Width;
      
	 // this.boxModal.appendChild(this.box);
	  document.body.appendChild(this.box);
	   
	   this.boxTitle                    = document.createElement("div");
	   this.boxTitle.className          = this.TitleStyle;
       this.boxTitle.style.background   = this.TitleBackground;
	   this.boxTitle.style.color        = this.TitleTextColor;
	   this.boxTitle.style.fontSize     = this.TitleFontSize;
  
	   this.box.appendChild(this.boxTitle);
	   
	   if(this.useTitle){
	   
	    this.boxTitleText             = document.createElement("div");
		this.boxTitleText.className   = "CoverBoxTitleText";
	    this.boxTitleText.innerHTML   = this.Title;
	   
	   this.boxTitle.appendChild(this.boxTitleText);
	   
	   };
	   
	   if(this.useCloseButton){
	   
	   this.boxClose                    = document.createElement("div");
	   this.boxClose.id                 = "com_iDesignMedia_iComp_CoverBox_btnClose" + Math.ceil(Math.random() * 9000);
	   this.length.push("#"+this.boxClose.id);
	   this.jQueryID["close"]           = "#"+this.box.id;
	   this.instance["close"]           = this.box.id;
	   this.boxClose.className          = this.CloseButtonStyle;
       this.boxClose.style.background   = this.CloseButtonBackgroundColor;
	   this.boxClose.style.color        = this.CloseButtonTextColor;
	   this.boxClose.style.fontSize     = this.CloseButtonFontSize;
	   this.boxClose.innerHTML          = "X";
	   this.boxClose.detail             = "X";
	   
	   if(!this.jQuery){
	   
	   this.boxClose.onclick = CloseEvent; 
	   
	   };
	   
       this.boxTitle.appendChild(this.boxClose);
	   
	   };
	   
	   this.boxTitleClear = document.createElement("div");
	   this.boxTitleClear.className = "CoverBoxClear";
	   this.boxTitle.appendChild(this.boxTitleClear);
	   
	  if(this.useIcon){
		   
	  this.boxIcon            = new Image();
	  this.boxIcon.id         = "com_iDesignMedia_iComp_CoverBox_icon" + Math.ceil(Math.random() * 9000);
	  this.jQueryID["icon"]   = "#"+this.boxIcon.id;
	  this.instance["icon"]   = this.boxIcon.id;
	  this.boxIcon.className  = "CoverBoxIcon";
	  this.boxIcon.src        = this.Icon;
	   
	   this.box.appendChild(this.boxIcon);
	   
	   };
	   
	   this.boxText              = document.createElement("div");
	   this.boxText.id           = "com_iDesignMedia_iComp_CoverBox_text" + Math.ceil(Math.random() * 9000);
	   this.jQueryID["text"]     = "#"+this.boxText.id;
	   this.instance["text"]     = this.boxText.id;
	   this.boxText.className    = this.TextStyle;
	   this.boxText.innerHTML    = this.Text;
	   this.boxText.style.color  = this.MainTextColor;
	   this.boxText.style.fontSize  = "24px";
	   this.box.appendChild(this.boxText);
	
      if(this.contentType == "idm/images"){
		   
		this.boxText.style.padding = "0px";
		   
	  };
	   
	   if(this.useButtons){
		   
		   if(this.flag == undefined || this.flag == null || this.flag == ""){
			   
			   this.Buttons("OK"); 
			   
		};
	   
	   if(this.flag.indexOf("|") != -1 || this.flag != undefined || this.flag != null || this.flag != ""){
		   
		   for(var i = 0; i< this.flag.length; i++){
			   
          this.boxButton           = document.createElement("div");
		  this.boxButton.id        = "com_iDesignMedia_iComp_CoverBox_boxButton" + Math.ceil(Math.random() * 9000);
		  this.length.push("#"+this.boxButton.id);
          this.boxButton.className = this.ButtonStyle; 
			   
           this.boxButton.style.background    = this.ButtonBackgroundColor;
		   this.boxButton.style.borderColor   = this.ButtonBorderColor;  
		   this.boxButton.style.color         = this.TextColor;
		   this.boxButton.style.width         = this.ButtonWidth;
		   this.boxButton.style.height        = this.ButtonHeight;
		   this.boxButton.style.fontSize      = this.ButtonFontSize;
			   
			   this.instance[this.flag[i]] = this.boxButton.id;
			   this.jQueryID[this.flag[i]] = "#"+this.box.id;
               this.boxButton.innerHTML    = this.flag[i];
	           this.boxButton.detail       = this.flag[i];
			   
			   if(!this.jQuery){
			   
			   this.boxButton.onclick  = CloseEvent;
			   
			   };
			   
           this.jQueryEvent = function(type,handler){
			
			var allE = String(this.length).split(",")
	    
		   for(var z =0; z < allE.length; z++){
			
			$(allE[z])[type](function(evnt){
				
				handler(evnt);
				
               })
              };
            };
			   this.boxButton.defaults = function(){};
	           this.boxButton.destroy  = function(){
		   
		       try{
		   
                document.body.removeChild(this.boxModal);
		        document.body.removeChild(this.box);
				
		        }catch(e){};
		   
		       };
			   
           this.box.appendChild(this.boxButton);
			
             };
		    };
		  };
		   
	  this.destroy = function(){
           
		   try{
		   
          document.body.removeChild(this.boxModal);
		   document.body.removeChild(this.box);
		   
		   }catch(e){};

         };

	     this.update = function(text){
		  
           this.boxText.innerHTML = text;
		   
		  };
		  
		};
		
com.lasagna.iComp.CoverBox.prototype.Buttons = function(btn){
	 
	 this.flag = btn.split(",");
	 
};

com.lasagna.iComp.CoverBox.prototype.CoverBoxStyles = function(BackgroundColor,BackgroundBorderColor,
                                                              MainTextColor,Width,TextAlign){
																
    this.BackgroundColor         = BackgroundColor         ? BackgroundColor       : "#fb4f51";
	this.BackgroundBorderColor   = BackgroundBorderColor   ? BackgroundBorderColor : "#333333";
	this.MainTextColor           = MainTextColor           ? MainTextColor         : "#FFFFFF";
	this.Width                   = Width                   ? Width                 : "500px";
	this.TextAlign               = TextAlign               ? TextAlign             : "left";
};
	
com.lasagna.iComp.CoverBox.prototype.titleStyle = function(TitleBackground,TitleTextColor,TitleFontSize){
	
	this.TitleBackground = TitleBackground  ? TitleBackground : "#c51313";
	this.TitleTextColor  = TitleTextColor   ? TitleTextColor  : "#FFFFFF";
	this.TitleFontSize   = TitleFontSize    ? TitleFontSize   : "30px";
 
 };

com.lasagna.iComp.CoverBox.prototype.closeButtonStyle = function(CloseButtonBackgroundColor,CloseButtonTextColor,                                                                 CloseButtonFontSize){
	
	this.CloseButtonBackgroundColor = CloseButtonBackgroundColor ? CloseButtonBackgroundColor : "#fb4f51";
	this.CloseButtonTextColor       = CloseButtonTextColor       ? CloseButtonTextColor       : "#FFFFFF";
    this.CloseButtonFontSize        = CloseButtonFontSize        ? CloseButtonFontSize        : "16px";
	
};
	
com.lasagna.iComp.CoverBox.prototype.buttonStyle = function(ButtonBackgroundColor,ButtonBorderColor,
															TextColor,ButtonFontSize,
															ButtonWidth,ButtonHeight){
	
	this.ButtonBackgroundColor = ButtonBackgroundColor  ? ButtonBackgroundColor : "#c51313";
    this.TextColor             = TextColor              ? TextColor             : "#ffffff";
	this.fontSize              = ButtonFontSize         ? ButtonFontSize        : "15px";
    this.ButtonWidth           = ButtonWidth            ? ButtonWidth           : "50px";
    this.ButtonHeight          = ButtonHeight           ? ButtonHeight          : "17px";
    this.ButtonBorderColor     = ButtonBorderColor 	    ? ButtonBorderColor     : "#ffffff"; 
	
 };
