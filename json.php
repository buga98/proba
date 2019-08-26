<?php 

header('Content-type: text/json');
header('Content-type: application/json; charset=utf-8');
ini_set('memory_limit', '2048M');

include 'connection.php';

$sJsonID="";

if(isset($_GET['json_id']))   
{
	$sJsonID=$_GET['json_id'];
}

$oJson=array();

switch($sJsonID)
{
	case 'get_all_users':
	$sQuery="SELECT * FROM registration.users";
	$oRecord=$oConnection->query($sQuery);
	while($oRow=$oRecord->fetch(PDO::FETCH_BOTH))
	{
		$oUser=new User
		(
			$oRow['id'],
			$oRow['username'],
			$oRow['password'],
			$oRow['email'],
			$oRow['ime'],
			$oRow['prezime']

		);
		array_push($oJson, $oUser); 
	}
	break;

	case 'get_all_klijenti':
	$sQuery2="SELECT * FROM registration.klijenti";
	$oRecord=$oConnection->query($sQuery2);
	while($oRow=$oRecord->fetch(PDO::FETCH_BOTH))
	{
		$oKlijent=new Klijenti
		(
			$oRow['ime'],
			$oRow['prezime'],
			$oRow['OIB'],
			$oRow['Broj_telefona'],
			$oRow['godina_rodenja'],
			$oRow['tippolice'],
			$oRow['trajanjepolice']

		);
		array_push($oJson, $oKlijent); 
	}
	break;

		case 'get_all_admini':
	$sQuery="SELECT * FROM registration.admin";
	$oRecord=$oConnection->query($sQuery);
	while($oRow=$oRecord->fetch(PDO::FETCH_BOTH))
	{
		$oAdmin=new Admin
		(
			
			$oRow['username'],
			$oRow['password']
		

		);
		array_push($oJson, $oAdmin); 
	}
	break;

	case 'get_all_agenti':
	$sQuery="SELECT * FROM registration.users";
	$oRecord=$oConnection->query($sQuery);
	while($oRow=$oRecord->fetch(PDO::FETCH_BOTH))
	{
		$oAgent=new Agent
		(
			
			$oRow['username'],
			$oRow['password']
		

		);
		array_push($oJson, $oAgent); 
	}
	break;
}
echo json_encode($oJson);

?>