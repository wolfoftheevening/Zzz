var elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir(function (mix) {
	mix.webpack('vueApp.js', 'wwwroot/js/dist', 'wwwroot/js');
});