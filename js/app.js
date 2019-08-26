var app = angular.module("myApp", ['ngRoute']);


app.config(function($routeProvider)
{
	$routeProvider
	.when('/',
	{
		templateUrl: 'templates/home.html'
	})
	.when('/Adminlogin',
	{
		templateUrl: 'templates/Adminlogin.html'
	})
	.when('/indexAdmin',
	{
		templateUrl: 'templates/indexAdmin.html'
	})
	.when('/indexAgent',
	{
		templateUrl: 'templates/indexAgent.html'
	})
	.when('/dodajAgenta',
	{
		templateUrl: 'templates/dodajAgenta.html'
	})
	.when('/dodajKlijenta',
	{
		templateUrl: 'templates/dodajKlijenta.html'
	})
	.when('/Agentlogin',
	{
		templateUrl: 'templates/Agentlogin.html'
	})

	.otherwise
	({
		redirectTo: '/'
	});
});

 


app.controller('mainController', function($location, $scope, $http, $window)
{
	$scope.home = function()
	{
			$location.path('/home');
	};

	$scope.Adminlogin = function()
	{
			$location.path('/Adminlogin');
	};

	$scope.indexAdmin = function()
	{
			$location.path('/indexAdmin');
	};

	$scope.indexAgent = function()
	{
			$location.path('/indexAgent');
	};

	$scope.Agentlogin = function()
	{
			$location.path('/Agentlogin');
	};
	$scope.dodajAgenta = function()
	{
			$location.path('/dodajAgenta');
	};

	$scope.odjava = function()
	{
			$location.path('/');
	};

	$scope.dodajKlijenta = function()
	{
			$location.path('/dodajKlijenta');
	};

	


	$scope.listUsers = [];
	$scope.ucitajUsers = function()
	{
		$http.get('json.php?json_id=get_all_users')
		.then
		(
		    function (response) 
		    {
		    	$scope.listUsers = response.data;
		    	console.log(response.data);
			},
			function (e) 
			{
			    console.log(e);
			}
		);			
	};

	$scope.formDodajAgenta = {};
	$scope.dodajA = function()
	{
		if($scope.formDodajAgenta.username ==null ||  $scope.formDodajAgenta.password ==null || $scope.formDodajAgenta.email== null || $scope.formDodajAgenta.ime== null || $scope.formDodajAgenta.prezime==null )
{
	alert("Niste popunili sva polja");
}


else
{
		$http.post("action.php", {'username': $scope.formDodajAgenta.username, 'password': $scope.formDodajAgenta.password, 'email': $scope.formDodajAgenta.email, 'ime': $scope.formDodajAgenta.ime , 'prezime': $scope.formDodajAgenta.prezime})
		.then(function(success)
		{

			console.log("Uspjesno ste dodali agenta: ",$scope.formDodajAgenta.username," ", $scope.formDodajAgenta.password," ",$scope.formDodajAgenta.email, " ", $scope.formDodajAgenta.ime, " ", $scope.formDodajAgenta.prezime);
	   	    $scope.formDodajAgenta.username = null;  
	   	    $scope.formDodajAgenta.password = null;
	   	    $scope.formDodajAgenta.email = null;
	   	     $scope.formDodajAgenta.ime = null;
	   	      $scope.formDodajAgenta.prezime = null;
	   	      	$location.path('/indexAdmin');

	   	});
	}
}





	$scope.listKlijenti = [];
	$scope.ucitajKlijente = function()
	{
		$http.get('json.php?json_id=get_all_klijenti')
		.then
		(
		    function (response) 
		    {
		    	$scope.listKlijenti = response.data;
		    	console.log(response.data);
			},
			function (e) 
			{
			    console.log(e);
			}
		);			
	};



	$scope.formDodajKlijenta = {};
	$scope.dodajK = function()
	{


	if($scope.formDodajKlijenta.ime ==null ||  $scope.formDodajKlijenta.prezime ==null || $scope.formDodajKlijenta.OIB== null || $scope.formDodajKlijenta.godina_rodenja== null || $scope.formDodajKlijenta.Broj_telefona==null ||  $scope.formDodajKlijenta.tippolice == null ||  $scope.formDodajKlijenta.trajanjepolice ==null)
			{
				alert("Niste popunili sva polja");
			}
			else
  				{
		$http.post("action.php", {'ime': $scope.formDodajKlijenta.ime, 'prezime': $scope.formDodajKlijenta.prezime, 'OIB': $scope.formDodajKlijenta.OIB , 'godina_rodenja': $scope.formDodajKlijenta.godina_rodenja , 'Broj_telefona': $scope.formDodajKlijenta.Broj_telefona , 'tippolice': $scope.formDodajKlijenta.tippolice , 'trajanjepolice': $scope.formDodajKlijenta.trajanjepolice})
		.then(function(success)
		{
			

			console.log("Uspjesno ste dodali klijenta: ",$scope.formDodajKlijenta.ime," ", $scope.formDodajKlijenta.prezime," ",$scope.formDodajKlijenta.OIB," ",$scope.formDodajKlijenta.godina_rodenja," ",$scope.formDodajKlijenta.Broj_telefona, " ",$scope.formDodajKlijenta.tippolice, " ", $scope.formDodajKlijenta.trajanjepolice );
	   	    $scope.formDodajKlijenta.ime = null;  
	   	    $scope.formDodajKlijenta.prezime = null;
	   	    $scope.formDodajKlijenta.OIB = null;
	   	    $scope.formDodajKlijenta.Broj_telefona = null;
	   	    $scope.formDodajKlijenta.godina_rodenja = null;
	   	    $scope.formDodajKlijenta.tippolice = null;
	   	    $scope.formDodajKlijenta.trajanjepolice = null;
	   	    		$location.path('/indexAgent');
	
	
	   	
	   	});
        
    }
}


   $scope.formAdminLogin = {};
   $scope.PrijavaAdmin = function()
   {
   	$http.get('json.php?json_id=get_all_admini')
   .then
		(
		    function (response) 
		    {
		    	$scope.listKlijenti = response.data;
		    	console.log(response.data);
		    	console.log($scope.formAdminLogin.username);
        	console.log($scope.formAdminLogin.password);
        	var usernameIndex = $scope.listKlijenti.findIndex( admin => admin.username === $scope.formAdminLogin.username );
        	var passwordIndex = $scope.listKlijenti.findIndex( admin => admin.password === $scope.formAdminLogin.password );
        	console.log("Username index: ",usernameIndex);
        	console.log("Password index: ",passwordIndex);
        	if((usernameIndex == passwordIndex) && (usernameIndex >= 0) && (passwordIndex >= 0))
        	{
        		$location.path('/indexAdmin');
        		$scope.formAdminLogin.username = "";
        		$scope.formAdminLogin.password = "";
        	}
        	else
        	{
        		alert("Uneseni podaci netočni!");
        		$scope.formAdminLogin.username = "";
        		$scope.formAdminLogin.password = "";
        	}
       
			},
			function (e) 
			{
			    console.log(e);
			}
		);		
   };



$scope.formAgentLogin = {};
   $scope.PrijavaAgent = function()
   {
   	$http.get('json.php?json_id=get_all_agenti')
   .then
		(
		    function (response) 
		    {
		    	$scope.listAgenti = response.data;
		    	console.log(response.data);
		    	console.log($scope.formAgentLogin.username);
        	console.log($scope.formAgentLogin.password);
        	var usernameIndex = $scope.listAgenti.findIndex( admin => admin.username === $scope.formAgentLogin.username );
        	var passwordIndex = $scope.listAgenti.findIndex( admin => admin.password === $scope.formAgentLogin.password );
        	console.log("Username index: ",usernameIndex);
        	console.log("Password index: ",passwordIndex);
        	if((usernameIndex == passwordIndex) && (usernameIndex >= 0) && (passwordIndex >= 0))
        	{
        		$location.path('/indexAgent');
        		$scope.formAgentLogin.username = "";
        		$scope.formAgentLogin.password = "";
        	}
        	else
        	{
        		alert("Uneseni podaci netočni!");
        		$scope.formAgentLogin.username = "";
        		$scope.formAgentLogin.password = "";
        	}
       
			},
			function (e) 
			{
			    console.log(e);
			}
		);		
   };
});

app.filter('promjeniFormat1', function(){
	return function(tekst){
		var sRezultat=tekst.replace (/100/g, "Auto osiguranje");
		
		return sRezultat;
	
	};
});
app.filter('promjeniFormat2', function(){
	return function(tekst){
		var sRezultat=tekst.replace (/200/g ,"Životno osiguranje");
		
		return sRezultat;
	
	};
});

app.filter('promjeniFormat3', function(){
	return function(tekst){
		var sRezultat=tekst.replace (/300/g ,"Imovinsko osiguranje");
		
		return sRezultat;
	
	};
});

app.filter('promjeniFormat4', function(){
	return function(tekst){
		var sRezultat=tekst.replace (/400/g ,"Putno osiguranje");
		
		return sRezultat;
	
	};
});

app.filter('promjeniFormat5', function(){
	return function(tekst){
		var sRezultat=tekst.replace (/500/g ,"Transportno osiguranje");
		
		return sRezultat;
	
	};
});
app.filter('promjeniFormat6', function(){
	return function(tekst){
		var sRezultat=tekst.replace (/600/g ,"Zdravstveno osiguranje");
		
		return sRezultat;
	
	};
});


