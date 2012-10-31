<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Crank</title>

<link rel="stylesheet" type="text/css" href="Style/style.css">
<link rel="stylesheet" type="text/css" href="Style/CoverBoxStyle.css">

</head>

<body>

<!--MasterLayer-->
  <div class="MasterLayer">

  <!--Background-->
  <img id="bckGrnd" src="Assets/bckGrnd.jpg" class="crank_bckgrnd" width="1800" height="1200">
  <!--Background-->
  
  <!--Logo-->
  <div class="crank_logo_container" id="crank_logo_container">
  <div class="crank_logo" id="crank_logo"></div>
  <div class="crank_logo_small" id="crank_logo_small"></div>
  </div>
  <!--Logo-->
  
  <!--clear-->
  <div class="crank_clear"></div>
  <!--clear-->
  
  <!--Main-->
  <div class="crank_main" id="crank_main">
  
  <!--welcome text-->
  <div class="crank_welcome" id="crank_welcome"></div>
  <div class="crank_txtChooseCountry" id="crank_txtChooseCountry"></div>
  <div class="crank_number" id="crank_number"></div>
  <div class="crank_txtCranked" id="crank_txtCranked"></div>
  <div class="crank_welcome_line" id="crank_welcome_line"></div>
  <!--welcome text-->
  
  <!--Button Domain-->
  <div class="crank_button_domain" id="crank_button_domain">
  
  <!--Button Started-->
  <div class="crank_btnStarted" id="crank_btnStarted"></div>
  <!--Button Started-->
  
  <!--Countries-->
  <div style="margin-left:50px;">
  
  <div class="crank_btnCountry">
  <div class="crank_text_spacing">GHANA</div>
  <div class="crank_number" style="display:none">0</div>
  </div>
  
   <div class="crank_btnCountry">
  <div class="crank_text_spacing">NIGERIA</div>
  <div class="crank_number" style="display:none">2</div>
  </div>
  
  <div class="crank_btnCountry">
  <div class="crank_text_spacing">UK</div>
  <div class="crank_number" style="display:none">3</div>
  </div>
  
  </div>
  <!--Countries-->  
  
  <!--clear-->
  <div class="crank_clear"></div>
  <!--clear-->
  
  <!--Field Set-->
  <div class="crank_txtFieldSet" id="crank_txtFieldSet_country">
  
  <div style="float:left">
  <div class="crank_check"></div>
  <div class="crank_txtFieldSet_title">country</div>
  </div>

  <div class="crank_txtFieldSet_text" id="crank_txtFieldSet_text">
  </div>
  
  </div>
  <!--Field Set-->
  
   <!--Field Set-->
  <div class="crank_txtFieldSet" style="margin-top:20" id="crank_txtFieldSet_zipcode">
  
  <div style="float:left">
  <div class="crank_txtFieldSet_title">zipcode</div>
  <div class="crank_txtFieldSet_title_sub" id="crank_txtFieldSet_title_sub"></div>
  </div>

  <input type="text" name="number" id="number" value=""/>
   <div class="crank_txtFieldSet_text" id="crank_txtFieldSet_number">
  </div>
  </div>
  <!--Field Set-->
  
  
   <!--button verify-->
  <div class="crank_btnVerify" id="crank_btnVerify">
  </div>
  <!--button verify-->
  
  <!--Field Set-->
  <div class="crank_txtFieldSet" style="margin-top:20px" id="crank_txtFieldSet_password">
  
  <div style="float:left">
  <div class="crank_password"></div>
  <div class="crank_txtFieldSet_title">password</div>
  </div>

  <input type="password" name="password" id="password" value=""/>
  
  </div>
  <!--Field Set-->
  
  <!--Field Set-->
  <div class="crank_txtFieldSet" id="crank_txtFieldSet_passwordMatch">
  
  <div style="float:left">
  <div class="crank_password" style="margin-top:2px;"></div>
  <div class="crank_txtFieldSet_title" style="margin-top:0px">password <br> [retype]</div>
  </div>

   <input type="password" name="passwordMatch" id="passwordMatch" value=""/>
  
  </div>
  <!--Field Set-->
  
  <!--Button Proceed-->
  <div class="crank_btnProceed" id="crank_btnProceed"></div>
   <!--Button Proceed-->
  
  </div>
    <!--Button Domain-->
  
 
  
 

   
  </div>
  <!--Main-->
  
  </div>
<!--MasterLayer-->
  
<script type="text/javascript" src="Script/jquery-1.8.2.js"></script>
<script type="text/javascript" src="Script/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="Script/Crank.js"></script>
<script type="text/javascript" src="Script/CoverBox.js"></script>


<script type="text/javascript">

   $(document).ready(function(e) {
	  
	 jQuery.easing.def = "easeInOutQuart";
	 
	Crank.Starter({container:"crank_logo_container",
	               welcome:"crank_welcome",
				   line:"crank_welcome_line",
				   button:"crank_btnStarted"});
				  
	
	$("#crank_btnProceed").click(function(){
		
		var password = $("#password").val();
        var passwordMatch = $("#passwordMatch").val();
		
        if ((password.length < 6 ) && (password.length < 6) || (password.length > 6 ) && (password.length > 6)) {
			
         Crank.CoverBox({title:"Password Length",text:"Please make sure your password is 6 characters"});
		  
       }else if(password == passwordMatch){
		   
		    Crank.CoverBox({title:"Welcome To Crank",text:"You Are Officially Cranked"});
			$("#crank_number").hide();
			$("#crank_txtCranked").fadeIn();
		   
		   }else{
			   
			 Crank.CoverBox({title:"Password Mismatch",text:"Your passwords don't match"});  
			   
			   }
		   
		})
	
	$("#crank_btnVerify").click(function(){
		
		if($("#number").val().length == 0 ){
			
		 Crank.CoverBox({title:"Number Field Empty",text:"Please enter your number"});
			
			}else if($("#number").val().charAt(0) == 0 ){
			
		 Crank.CoverBox({title:"Number With Leading Zero",text:"Please enter number without the leading zero"});
			
			}else if($("#number").val().length < Crank.NUMBER_LENGTH){
		
		 Crank.CoverBox({title:"Number Length Too Short",text:"Please Check the length of the number, make sure its " + Crank.NUMBER_LENGTH});
						
		  }else if($('#number').val() != ""){
			  
		var value = $('#number').val().replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        var intRegex = /^\d+$/;
        if(!intRegex.test(value)) {
		Crank.CoverBox({title:"Invalid Number",text:"This is not a valid number"});
         
		}else{
			
			  
			   $("#crank_btnVerify").fadeOut(function(){
			  
			  $("#password").focus();
			  $("#crank_txtFieldSet_password").show();
			  $("#crank_txtFieldSet_passwordMatch").show();
			  $("#crank_txtFieldSet_password").animate({"marginTop":0});
			  $("#crank_btnProceed").fadeIn();
			  $("#number").hide();
			  $("#crank_txtFieldSet_number").text($("#number").val());
			  
			  });
			
			
			}
		
			  
			  }
		})
	
	$("#crank_btnStarted").click(function(){
		
		Crank.UserCountry();
		
		
		  });
    });

</script>
</body>
</html>