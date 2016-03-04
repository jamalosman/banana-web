# Onboarding Backend API

#### dependancies
 - Globals ``` $ npm install -g strongloop ```
 - Locals ``` $ npm install ```

#### API Setup

You will need to set up a database and a node web server to run this project

##### Database

- By default, this project is to configured to work with a postgreSQL database
- You will need to setup the database for your project, and put the connection details into the datasources file

  ###### Setting up a postgreSQL database locally
  - run ``` $ brew install postresql ```
  - this should install postgres in the /usr/local/var/postgres directory, confirm it is there
  - then run ``` $ initdb /usr/local/var/postgres/data ```
  - the next command should be printed into the console, copy it from there, it should look something like this
  - ``` $ pg_ctl -D /usr/local/var/postgres/data -l logfile start ```
  - You will need to run this command to start the database 
  - create a database with this command ``` $ createdb <database-name> ```
  - now try and connect to it with this command ``` $ psql <database-name> ```
  - You should now be in the postgresql console, typing ``` # \l ``` should show a list of databases, including \<database-name> which you created.
  - exit with ``` # \q ```
  

- going back to the API, in the server directory,  rename `_datasources.json` to `datasources.json`
- open the file and fill in the details, (there is a template for a local database and a remote database with ssl)
- the supplied '_datasources.json' should work, simple rename the file and 
- You can add your own datasources for other databases in two ways
  - using the strongloop CLI ``` $ slc loopback:datasource ``` command
  - using strongloop's visual API management tool, arc ``` $ slc arc ```
  - If you are using a different database technology such as mysql, you will need to install the appropriate loopback connector such as ``` $ npm install loopback-connector-mysql --save ```

##### Models
  - Once you have added a datasource, you can create models and save them in that datasource using the arc ``` $ slc arc ``` interface or with the ``` slc loopback:model ``` command
    - NOTE: slc arc is free, but requires creating an account with strongloop
  - Once you have created the model and added properties then you will need to migrate the to the database, this is done by clicking the 'migrate model' button in arc. There is no commandline tool for this, but it can be done by adding a script to the /server/boot/ directory which will run automatically. [see here](https://docs.strongloop.com/display/public/LB/Implementing+auto-migration) 
  - These models will be exposed through the REST api once the server is running
  - We've created an example model called Cake, see common/models/cake.js for an example of how to override a CRUD method, adding your own code
  - use arc to migrate the Cake model to your datasource. (click 'Cake' under 'Models' o the left column, then click the 'Migrate Model' button).
  
  
##### Start the server
 - Now if everything was successful you should be able to run ``` slc run ``` from the project directory, and the server should start (we will assume you are running on port 3000)
 - go to localhost:3000 in your browser, you should see a short json string something like this ``` {"started":"2016-03-03T17:42:01.926Z","uptime":4.818} ```
 - navigate to localhost:3000/explorer and you should see an interactive documentation page, listing all your models, lets open Cake
 - You should see a list of endpoints, for all the crud methods that the api has built in. try running a GET request. (click the first GET header and click the 'try it out' button)
 - You should recieve a *401 Unauthorized* response from the server. Security is working
    - by default you need to get an api key so access to the api is restricted.
    - go to the built in 'User' model, click the '/login' endpoint, and enter the default admin credentials
    - ```json {'username':'admin', 'password':'test123'} ```
    - These details can be updated in server/boot/script.js
    - Copy the id from the response into the box at the top and click 'Set Token'
    - run 'GET' on '/Cakes' and you should now recieve a *200 OK* response with an empty array,
  - You can play around with the api endpoints to see what they do.
  - The explorer page is IP whitelist protected, so it can only be used from authroized machines. in order to test this, try replacing localhost:3000 with your-ip-address:3000 and you should be blocked out.
  - you can add more IPs to the whitelist in server/server.js

##### Configuration
 - Apart from the database there is some extra configuration available
 - In config.json you can set the port which the node server will run on
 - You can configure relationships between models such as hasMany, belongsTo etc. see [here](https://docs.strongloop.com/display/public/LB/Creating+model+relations)
 
##### Extending the REST Api
 - You can add custom endpoints to your model properties in the commom/models/{model-name}.js
 - You can add your own methds and overwrite existing methods (make sure to call the original method at the end of yours).
 - More info on [Adding custom model methods](https://docs.strongloop.com/display/public/LB/Extend+your+API) and [Overriding built in CRUD methods](https://docs.strongloop.com/display/public/LB/Customizing+models#Customizingmodels-CustomizingamodelwithJavaScriptcode)
  
##### Loopback Angular SDK
 - Loopback can generate code for accessing remote methods in AngularJS, all you need to do is run the following command from the project directory
 - ``` $ lb-ng server/server.js ```
 - copy the file into your angular project, there are some more steps to set that up, see the banoffee readme for more info.