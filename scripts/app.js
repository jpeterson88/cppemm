"use strict";

var cppemmApp = angular.module('cppemmApp', [
    'ngRoute',
    'ngAnimate'

]);

cppemmApp.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/program.html',
    }).
    when('/admissions', {
        templateUrl: 'pages/admissions.html',
    }).
    when('/afterGraduation', {
        templateUrl: 'pages/afterGraduation.html',
    }).
    when('/catalog', {
        templateUrl: 'pages/catalog.html',
    }).
    when('/contact', {
        templateUrl: 'pages/contact.html',
    }).
    when('/courseDescription', {
        templateUrl: 'pages/courseDescription.html',
    }).
    when('/degreeRequirements', {
        templateUrl: 'pages/degreeRequirements.html',
    }).
    when('/facilities', {
        templateUrl: 'pages/facilities.html',
    }).
    when('/faculty', {
        templateUrl: 'pages/faculty.html',
    }).
    when('/menu', {
        templateUrl: 'pages/menu.html',
    }).
    when('/program', {
        templateUrl: 'pages/program.html',
    }).
    when('/successStories', {
        templateUrl: 'pages/successStories.html',
    }).
    when('/thesisProject', {
        templateUrl: 'pages/thesisProject.html',
    }).
    otherwise({
        redirectTo: '/program'
    });

    //check browser support
    if (window.history && window.history.pushState) {
        //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

        // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

        // if you don't wish to set base URL then use this
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }


});
