# Fizzbuzz Service

The purpose of this workshop is to get you thinking like a unit tester. 

## Getting Set Up
 
 It is recommended that you check out this whole repository:
 
 `git clone https://github.com/JimTheMan/AngularTestingWorkshops`
 
 then cd into the project folder:
 
 `cd AngularTestingWorkshops/1_Fizzbuzz-Service/Fizzbuzz-Service_Start_Here/`
 
 now install the dependencies
 
 `npm install`
 
 and then
 
 `bower install`
 
## Running the Project
 
 We're using the gulp here to run common tasks.
 
 Serve site with browsersync:
 
 `gulp serve`
 
 Run tests (sinlge run):
 
 `gulp test`
 
 Run tests (on every file change):
 
 `gulp test:auto`
 
 Run protractor tests:
 
 `gulp protractor`
 
 Compile a release build (default task):
 
 `gulp build` 
 
## Completing the Challenge
 With your project set up, you should be able to run your unit tests with *gulp test:auto* and see your project running with *gulp serve*. The fizzbuzz service and method have already been created for you. What you need to do is modify the fizzbuzz method to return the correct string and write unit tests to ensure the fizzbuzz method is functioning properly. Just add more "it" statemnts to the *.spec file and they will be picked up by the test runner. You can also create new .spec.js files anywhere in the app/ folder, and they will be picked up automatically.
 
## Bonus Challenges
 - After you complete the unit testing portion of this workshop, find the e2e folder in the root level of your project. This is where your end-to-end tests live, and these are executed when you run *gulp protractor*. Modify the existing tests here to check that the text is updated correctly when the user enters a value into the input field.
 - After you run the single run test command *gulp test* a folder named coverage will be created in the root project directory. Open the index.html file to view the coverage report, and ensure that your project is covered 100% by unit tests.  
 
## If You Get Stuck
If you are really having trouble or think you have run out of tests to write you can always take a look at the solution project:
AngularTestingWorkshops/1_Fizzbuzz-Service/Fizzbuzz-Service_Solution/

You can also email jim@ng-nj.com with questions or concerns.

Good luck and have fun! :)

 
