## About Ekofarmer



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