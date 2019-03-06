var app = angular.module('myApp', ["ngRoute"]);

		app.controller('myCtrl', function($scope)
		{
			$scope.firstname = "Default";
			$scope.lastname = "Default";
			$scope.firstnameEdit = "";
			$scope.lastnameEdit = "";
			$scope.allnames = [];
			$scope.edit_hide = true;
			$scope.edit_index = -1;
			$scope.hide_list = false;
			
				$scope.add = function()
				{
					if ($scope.myForm.input1.$valid && $scope.myForm.input2.$valid){
						$scope.allnames.push({firstname: $scope.firstname, 
										      lastname: $scope.lastname});
						$scope.firstname = "Default";
						$scope.lastname = "Default";
					}
				};

				$scope.delete = function(index)
				{
					$scope.allnames.splice(index,1);
				};

				$scope.init_edit = function(index)
				{
					$scope.edit_hide = false;
					$scope.edit_index = index;
				};

				$scope.edit = function()
				{
					if ($scope.myFormEdit.input3.$valid && $scope.myFormEdit.input4.$valid)
					{
						$scope.allnames[$scope.edit_index] = {firstname: $scope.firstnameEdit,
														  lastname: $scope.lastnameEdit};
					    $scope.edit_hide = true;
					    $scope.edit_index = -1;
					    $scope.firstnameEdit = "";
					    $scope.lastnameEdit = "";
					}
				};

				$scope.hide = function()
				{
					if ($scope.hide_list)
						$scope.hide_list = false;
					else
						$scope.hide_list = true;
				}
		});