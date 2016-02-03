angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.usuario = "";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
	
		$scope.questions = [
			{id:"01",
			 question:"Qui ne fait pas partit des inconnus ?",
			 reponseA:"Didier Bourdon",
			 reponseB:"Bernard Campan",
			 reponseC:"Pascal Légitimus",
			 reponseD:"Michel Polnareff",
			 correct:"reponseD",
			 points:2,
			 image:"https://i.ytimg.com/vi/fy5ewMwLvMc/maxresdefault.jpg",
			},
			{id:"02",
			 question:"Qui n'est pas présent à la table ronde ?",
			 reponseA:"Agravain l'Orgueilleux",
			 reponseB:"Galahad le Pur",
			 reponseC:"Bohort l'exilé",
			 reponseD:"Robert Bruce",
			 correct:"reponseD",
			 points:2,
			 image:"http://img.over-blog-kiwi.com/0/93/15/83/20141009/ob_5c74ca_img-3346.JPG",
			},
			{id:"03",
			 question:"Où se situe les îles Chandeleur ?",
			 reponseA:"Gouadeloupe",
			 reponseB:"Caraïbes",
			 reponseC:"Golf du Mexique",
			 reponseD:"Antilles",
			 correct:"reponseC",
			 points:2,
			 image:"http://i-cms.linternaute.com/image_cms/original/10091006-la-plage-de-myrtos-dans-les-iles-ioniennes.jpg",
			},
			{id:"04",
			 question:"A quelle date est mort Henry IV ?",
			 reponseA:"14 mai 1610",
			 reponseB:"23 juin 1608",
			 reponseC:"6 novembre 1609",
			 reponseD:"16 avril 1611",
			 correct:"reponseA",
			 points:2,
			 image:"http://www.maxicours.com/img/2/7/9/0/279058.jpg",
			},
			{id:"05",
			 question:"Sur quel personnage fictif se concentre la serie de film 'Vendredi 13' ?",
			 reponseA:"Freddy Krueger",
			 reponseB:"Jason Voorhees",
			 reponseC:"Hannibal Lecter",
			 reponseD:"Jack L'éventreur",
			 correct:"reponseB",
			 points:2,
			 image:"data:image/jpeg;base64,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",
			},
			{id:"06",
			 question:"De quelle couleur est le cheval Blanc d'Henry IV ?",
			 reponseA:"La couleur est blanc",
			 reponseB:"La couleur est grise",
			 reponseC:"La couleur est blanche",
			 reponseD:"La couleur est gris",
			 correct:"reponseC",
			 points:2,
			 image:"http://passionchateau.fr/wp-content/uploads/2015/01/77-5-Fraise-Mauzaisse-Henri-IV.jpg",
			},
			{id:"07",
			 question:"Quel est le président français n'ayant pas fait tout son mandat ?",
			 reponseA:"François MITERRAND",
			 reponseB:"René COTY",
			 reponseC:"Valéry GISCARD D'ESTAING",
			 reponseD:"Georges POMPIDOU",
			 correct:"reponseD",
			 points:2,
			 image:"https://upload.wikimedia.org/wikipedia/fr/thumb/b/ba/Logo_Pr%C3%A9sident_(fromage).svg/1280px-Logo_Pr%C3%A9sident_(fromage).svg.png",
			},
			{id:"08",
			 question:"Qui est Colargol ?",
			 reponseA:"Un chat",
			 reponseB:"Une souris",
			 reponseC:"Un oiseau",
			 reponseD:"Un petit ours",
			 correct:"reponseD",
			 points:2,
			 image:"http://upload.wikimedia.org/wikipedia/commons/6/65/Colargol_with_company.JPG",
			},
			{id:"09",
			 question:"Comment appelle-t-on le poignet d'un cheval ?",
			 reponseA:"Le fanon",
			 reponseB:"Le paturon",
			 reponseC:"Le canon",
			 reponseD:"Le sabot",
			 correct:"reponseC",
			 points:2,
			 image:"http://img1.mxstatic.com/wallpapers/13127fb0aeb0b6683e24721323fd7ae8_large.jpeg",
			},
			{id:"10",
			 question:"Qui à joué dans 'Les Grandes Gueules'- le Film ?",
			 reponseA:"Jean POIRET",
			 reponseB:"Bernad BLIER",
			 reponseC:"Jess HAHN",
			 reponseD:"Arletty",
			 correct:"reponseC",
			 points:2,
			 image:"http://www.dvdclassik.com/upload/images/galeries/film-les-grandes-gueules8.jpeg",
			}

		];
		
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;
		
		$scope.valider = function() {
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
			}
			
			$scope.numquestion += 1;
			
			if ($scope.numquestion >= 10)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points <=5)
				{
					$scope.texte = "Retente ta chance !";
				}
				else if ($scope.points > 5 && $scope.points <= 10)
				{
					$scope.texte = "C'est presque ça !";
				}
				else if ($scope.points > 10 && $scope.points < 15)
				{
					$scope.texte = "Pas mal, bonne culture G !";
				}
				else if ($scope.points >= 20)
				{
					$scope.texte = "Es-tu Humain ???";
				}
			}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";
		};
	}]);