<?php

include "connection.php";

$data = json_decode(file_get_contents("php://input"));

$query = "INSERT INTO users(id, username, password, email, ime, prezime) VALUES (:id, :username, :password, :email, :ime, :prezime)";
$oStatement = $oConnection->prepare($query);
$oData = array
(
	'id' => $data->id,
	'username' => $data->username,
	'password' => $data->password,
	'email' => $data->email,
	'ime' => $data->ime,
	'prezime' => $data->prezime
);
try
{
	$oStatement=$oConnection->prepare($query);
	$oStatement->execute($oData);
	echo 1;
}
catch(PDOException $error)
{
	echo $error;
	echo 0;
}



$query = "INSERT INTO klijenti(ime, prezime, OIB, godina_rodenja, Broj_telefona, tippolice,trajanjepolice) VALUES (:ime, :prezime, :OIB, :godina_rodenja, :Broj_telefona, :tippolice, :trajanjepolice)";
$oStatement = $oConnection->prepare($query);
$oData = array
(
	'ime' => $data->ime,
	'prezime' => $data->prezime,
	'OIB' => $data->OIB,
	'godina_rodenja' => $data->godina_rodenja,
	'Broj_telefona' => $data->Broj_telefona,
	'tippolice' => $data->tippolice,
	'trajanjepolice' => $data->trajanjepolice

);
try
{
	$oStatement=$oConnection->prepare($query);
	$oStatement->execute($oData);
	echo 1;
}
catch(PDOException $error)
{
	echo $error;
	echo 0;
}
?>