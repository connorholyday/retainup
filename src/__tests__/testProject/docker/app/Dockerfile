FROM php:7.2.6-apache

MAINTAINER Connor Holyday

COPY . /src/app
COPY docker/app/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /src/app \
    && a2enmod rewrite
