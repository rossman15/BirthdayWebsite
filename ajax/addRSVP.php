<?php
	$link = mysql_connect('localhost', 'sfrichjr', 'RossMcKay49');
	if (!$link) {
	    die('Could not connect: ' . mysql_error());
	}
	@mysql_select_db('Invitations', $link) or die('Could not connect: ' . mysql_error());

	$friday = 'false';
	$saturday = 'false';
	$sunday = 'false';

	if($_GET["friday"] != "undefined") {
		if($_GET["friday"] == "true")
			$friday = 'true';
	}
	if($_GET["saturday"] != "undefined") {
		if($_GET["saturday"] == "true")
			$saturday = 'true';
	}
	if($_GET["sunday"] != "undefined") {
		if($_GET["sunday"] == "true")
			$sunday = 'true';
	}
	
	if($_GET["extraUser"] != "undefined") {
		if($_GET["extraUser"] == "true") {
			$query = "INSERT INTO RSVPs(name, friday, saturday, sunday, accomodations) VALUES ('".$_GET['extraUserName']."', ".$friday.", ".$saturday.", ".$sunday.", '".$_GET['accomodations']."')";
	 		$result = mysql_query($query, $link) or die(mysql_error());
	 	}
	}
	
 	$query = "INSERT INTO RSVPs(name, friday, saturday, sunday, accomodations) VALUES ('".$_GET['name']."', ".$friday.", ".$saturday.", ".$sunday.", '".$_GET['accomodations']."')";
 	$result = mysql_query($query, $link) or die(mysql_error());

	echo "php success!";

?>