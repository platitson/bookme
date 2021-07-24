# bookme

Firebase hosting URL: https://final-project-yplatsitsyna.web.app

This application was created for hotel search and is inspired by booking.com service.

Features:

* 2 languages - EN and CZ by clicking language icon.

* Feedback form (leave your feedback button) stores feedbacks in local storage, shows them to admin only in Feedbacks tab. Email validation uses RegExp.  

* Login to personal account with validation - a Sign-in button. Use username "123" and password "123" to login as admin or username "user" and password "user" to login as user. By logging in as admin, the Feedbacks tab is available now. Instead of the Sign in button, there is now a personal account button, where you can log out.

* Single page app, routing is implemented using hash.

* The clock is implemented using Classes and is written partially in the ES5 and partially in the ES6 syntax for comparison.

* Hotel search is carried out by city only. The "database" contains Prague and Brno ("prague", "pr" are allowed for search).

* Destinations tab bar with items markup created by constructor function at the Inspiration page bottom. 