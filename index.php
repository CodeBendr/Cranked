<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Let's Get Cranky</title>

<link rel="stylesheet" type="text/css" href="Style/style.css">

</head>

<body>

<!--MasterLayer-->
  <div class="MasterLayer">

  <!--Background-->
  <img id="bckGrnd" src="Assets/bckGrnd.jpg" class="crank_bckgrnd" width="1800" height="1200">
  <!--Background-->
  
  <!--Logo-->
  <div class="crank_logo" id="crank_logo"></div>
  <!--Logo-->
  
  <!--Main-->
  <div class="crank_main" id="crank_main">
  
  <!--welcome text-->
  <div class="crank_welcome" id="crank_welcome"></div>
  <div class="crank_welcome_line" id="crank_welcome_line"></div>
  <!--welcome text-->
  
  <!--Button Started-->
  <div class="crank_btnStarted" id="crank_btnStarted"></div>
  <!--Button Started-->
   
  </div>
  <!--Main-->
  
  </div>
<!--MasterLayer-->
  
<script type="text/javascript" src="Script/jquery-1.4.3.min.js"></script>
<script type="text/javascript" src="Script/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="Script/Crank.js"></script>


<script type="text/javascript">

   $(document).ready(function(e) {
	  
	 jQuery.easing.def = "easeInOutQuart";
	 
	 Crank.AnimateTopMargin({id:"crank_logo",
	                         value:30,
							 speed:900,
							 callback:function(){
								 
								 $("#crank_welcome").fadeIn(1000);
								 $("#crank_welcome_line").fadeIn(1000)
									 
									 $("#crank_btnStarted").show();
									 Crank.AnimateTopMargin({id:"crank_btnStarted",value:0});
									 
									}
	                         })
	
	$("#crank_btnStarted").click(function(){
		
		Crank.UserCountry();
		
		});
    
});

</script>
</body>
</html>