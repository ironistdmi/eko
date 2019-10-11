## About Ekofarmer

	Multivendor shop for farmers
	
## Install

<b>Clone from repository</b><br>
git clone https://swsdmi@bitbucket.org/farmerdj/farmerweb.git

<b>Start Docker containers (docker-up)</b><br>
make start

<b>Install composer dependencies</b><br>
make composer_dep

<b>Connect to app</b><br>
make connect_app

<b>Create migrations</b><br>
php artisan migrate

<b>Install Demo data</b><br>
php artisan db:seed --class=InstallDataSeeder

Enjoy :)

## Command

<b>Start Docker containers (docker-up)</b>
make start 

<b>Stop docker containers</b>
make stop

<b>Connect to docker app container</b>
make connect_app

<b>Composer refresh autoload</b>
composer dump-autoload

<b>Create migrations</b>
php artisan migrate

<b>Delete or rollback migrations</b>
php artisan migrate:rollback

<b>Delete config cache</b>
php artisan cache:clear

<b>Delete config cache</b>
php artisan config:clear

<b>Install Demo data</b>
php artisan db:seed --class=InstallDataSeeder