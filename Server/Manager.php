<?php

include("MongoDataManager.php");

Class Manager{
	
	private $mongoManager; 
	
	function __construct() {
      
	  $this->mongoManager = new MongoDataManager();
	  
   }
   
   function counter($count){
		
		if($count <= 9){
		$numDigits = 2;
		return sprintf("%0".$numDigits."d",$count + 1);	
			
			}else{
		
		return $count + 1;
		
			}
		
		}
		
		function removeLastIndex($str){
			
	   return substr_replace($str ,"",-1);
			
    }
		
	function createButtonIDs($db){
		
	$result = $this->mongoManager->printAll($db);
		$ids;
		
	 foreach($result as $user){
		 
		 $ids  .= '"edit_' . $user["_id"] . '_number_",';
	 }
	 
	 	print "var ids = [". $this->removeLastIndex($ids) ."];";
		
		}
		
	function request(){
		
		try {
			
    // connect to MongoHQ assuming your MONGOHQ_URL environment
    // variable contains the connection string
	
	 //putenv("INVENT_URL=mongodb://codebender:domedy@alex.mongohq.com:10036/inventory");
	
	
    // $connection_url = getenv("INVENT_URL");
    // $mongo_url = parse_url(getenv("INVENT_URL"));
    // $dbname = str_replace("/", "", $mongo_url["path"]);

		// $db  = $this->mongoManager->connect($connection_url,$dbname,"Gadgets");
		$db  = $this->mongoManager->connect("localhost","Gadgets","inventory");
		 
		 return $db;
		 
		}catch ( MongoConnectionException $e ) {
			
    die('Error connecting to MongoDB server');
	
  } catch ( MongoException $e ) {
	  
    die('Mongo Error: ' . $e->getMessage());
	
  } catch ( Exception $e ) {
	  
    die('Error: ' . $e->getMessage());
	
  }
		
		}
	
	function inventory($db){
		
	$result = $this->mongoManager->printAll($db);
	 //$i      = $this->mongoManager->prettyPrint("profile",$result);
	
	$count = 0;
		
	foreach($result as $user){
   
  print '<div class="mongo_listView" id="edit_' . $user["_id"] . '_list_">
<div class="mongo_number" id="edit_' . $user["_id"] . '_number_">'. $this->counter($count++) .'</div>
<div class="mongo_item"  id="edit_' . $user["_id"] . '_invent_">' . $user["name"] . " [ " . $user["color"] . " ] " . '</div>
<div class="mongo_edit_btn"><span class="mongo_edit" id="edit_' . $user["_id"] . '">Edit</span>
                            <span style="display:none" id="edit_' . $user["_id"] . '_save_">Save</span>
							<span class="mongo_delete" id="edit_' . $user["_id"] . '_delete_">Delete</span>
                            <span style="display:none" id="edit_' . $user["_id"] . '_cancel_">Cancel</span></div>
</div>';

	    }
      }
	}


?>