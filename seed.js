/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Event = Promise.promisifyAll(mongoose.model('Event'));

var seedUsers = function () {

    var users = [
        {
            userName:'fsa',
            gender:'F',
            age:'30',
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            userName:'Obama',
            gener:'M',
            age:'46',
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    return User.createAsync(users);

};

var seedEvent = function () {

    var events = [
        {
            name: 'Boxing Class',
            detail: 'I want to attend boxing classes after work and would like to have workout buddy.',
            loc: 'East Village',
            date: new Date(2015, 9,12, 18, 30),
            time:[18,30],//hour,time
            privacy: 'Open to Public',
            img:'http://burlingtoncrosstraining.com/wp-content/uploads/2011/10/burlington-nc-women-fitness-classes.jpg'
        },
        {
            name: 'Hiking in Bear Mountain',
            detail: "Let's meet up at the north entrance",
            loc: 'Bear Mountain',
            date: new Date(2015, 9,7, 7, 30),
            time:[7,30],//hour,time
            privacy: 'Open to Public',
            img:'http://nysparks.com/parks/images/b604f683-e283-4962-97c6-8895792d2e23.jpg'
        }
    ];

    return Event.createAsync(events);

};

connectToDb.then(function () {
    User.findAsync({}).then(function (users) {
        seedEvent();
        /*if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);*/
    });
});
