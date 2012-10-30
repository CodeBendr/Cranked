<?php

include("iDataManager.php");

class MongoDataManager implements iDataManager{
	
	public function save(){
		
		}
		
	public function delete(){
		
		}
		
	public function insert(){
		
		}
		
	public function update(){
		
		
		}
		
	public function connect($host = "localhost",$database = "", $collection = ""){
		
		$db = new Mongo($host);

       return $db->selectCollection($database,$collection);

	  }
	  
	public function printAll($collection){
		
	   $cursor = $collection->find();
	   
	   $result;
     
      // For each document it finds within the collection, print its contents
      foreach ($cursor as $doc){

      $result[] = $doc;
   
         }
		 
		 return $result;
	 }
	
	//format code into json	
	public function prettyPrint($key,$value){
	
	$json = array($key => $value,"accessCode" => "valid");
	
	$en =  json_encode($json);
	
	$de = json_decode($en);
	
	return $de->{$key};
		
		}
	
}

?>