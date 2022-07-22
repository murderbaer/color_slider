# Getting the backend ready

A small summary on how to set up the server

## nginx and php

The server was developed on Arch Linux using nginx, php-fpm and php-cgi. Because of differnces between distrobutions I provided my nginx.conf in the quickstart folder. You need to change the `root` folder marked as `CHANGE_TO_SRC_FOLDER` to the path of the src folder.

You may need the change the unix-socket path of php-fpm described as `unix:/run/php-fpm/php-fpm.sock;` and maybe change the user to your own usernaem if the src folder is in your home directory.

The database connection is implemented through `PDO` which may need to be enabled. In your `php.ini` (on my machine located in `/etc/php/php.ini`) comment out `; extension=pdo_mysql` my removing the `;` and restart the php service (ie. `sudo systemctl restart php-fpm.service`).

## MySQL

The `colors.sql` contains commands which can be copied and pasted to easylie create a functioning database. If other configuraiton options are needed changes have to be made in `DatabaseHandler`

