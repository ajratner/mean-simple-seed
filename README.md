# MEAN-simple-seed

A seed repo for an absolute bare-bones MEAN (MongoDB + node.js + Express + AngularJS) single-page multi-view app setup

*Note: MongoDB can be replaced w/ any other db*

## Installation

1. Install [node.js](http://nodejs.org/)
2. Use npm to install primary dependencies:

    npm install

3. Install bower to pull further dependencies:

    npm install -g bower

4. Use bower to install the rest of the dependencies

    bower install

5. Install [mongoDB](http://www.mongodb.com/) or alternative database & set up

## Running the application

To run the node.js server locally, in the root directory:

    node server.js

## Basic application structure

The basic directory structure for the seed framework is:

    package.json
    node_modules/
    --- ...
    bower.json
    models.js
    server.js
    public
    --- app.js
    --- index.html
    --- static/
    --- views/
    ------ view1/
    --------- view1.js
    --------- view1.html
    --- libs/
    ------ ...

+ package.json and bower.json are dependency specification files for npm & bower respectively, and node\_modules/ and public/libs/ are directories for those dependencies.
+ models.js holds the database models
+ server.js holds the code for the server-side node.js server code
+ public/app.js is the code for the client-side angularJS application
+ public/index.html is the static wrapper for the site
+ public/views/ contains the various angularJS views, each of which is a directory with a javascript model/controller file and an html view

## In progress

Copyright © 2014 Alex Ratner

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
