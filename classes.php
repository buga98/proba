<?php 

class Configuration
{
	public $host="localhost";
	public $dbName="registration";
	public $username="root";
	public $password="";	
}

class User
{
	public $id="N/A";
	public $username="N/A";
	public $password="N/A";
	public $email="N/A";
	public $ime="N/A";
	public $prezime="N/A";

	public function __construct($id=null, $username=null, $password=null, $email=null, $ime=null, $prezime=null)
	{
		if($id) $this->id=$id;
		if($username) $this->username=$username;
		if($password) $this->password=$password;
		if($email) $this->email=$email;
		if($ime) $this->ime=$ime;
		if($prezime) $this->prezime=$prezime;
	}
}

class Admin
{
	public $username="N/A";
	public $password="N/A";
	

	public function __construct($username=null, $password=null)
	{
		if($username) $this->username=$username;
		if($password) $this->password=$password;
		
	}
}
class Agent
{
	public $username="N/A";
	public $password="N/A";
	

	public function __construct($username=null, $password=null)
	{
		if($username) $this->username=$username;
		if($password) $this->password=$password;
		
	}
}
class Klijenti
{
	public $ime="N/A";
	public $prezime="N/A";
	public $OIB="N/A";
	public $Broj_telefona="N/A";
	public $godina_rodenja="N/A";
	public $tippolice="N/A";
	public $trajanjepolice="N/A";

	public function __construct($ime=null, $prezime=null, $OIB=null, $Broj_telefona=null, $godina_rodenja=null , $tippolice=null , $trajanjepolice=null)
	{
		if($ime) $this->ime=$ime;
		if($prezime) $this->prezime=$prezime;
		if($OIB) $this->OIB=$OIB;
		if($Broj_telefona) $this->Broj_telefona=$Broj_telefona;
		if($godina_rodenja) $this->godina_rodenja=$godina_rodenja;
		if($tippolice) $this->tippolice=$tippolice;
		if($trajanjepolice) $this->trajanjepolice=$trajanjepolice;
	}
}

?>