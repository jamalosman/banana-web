# Onboarding Backend API

#### dependancies
 - Globals ``` npm install -g strongloop ```
 - Locals ``` npm install ```

#### API Setup

You will need to set up a database and a node web server to run this project

###### Database

- By default, this project is to configured to work with a postgreSQL database
- You will need to setup the database for your project, and put the connection details into the datasources file
- rename `_datasources.json` to `datasources.json`
- open the file and fill in the details, (there is a template for a local database and a remote database with ssl)
- You can add your own datasources for other databases in two ways
  - using the strongloop CLI ``` $ slc loopback:datasource ``` command
  - using strongloop's visual API management tool, arc ``` $ slc arc ```
  - If you are using a different database technology such as mysql, you will need to install the appropriate loopback connector such as ``` $ npm install loopback-connector-mysql --save ```
  
###### Models
  - Once you have added a datasource, you can create models and save them in that datasource using the arc interface or with the ``` slc loopback:model ``` command
  - Once you have created the model and added properties then you will need to migrate the to the database, this is done by clicking the 'migrate model' button in arc. There is no commandline tool for this, but it can be done by adding a script to the /server/boot/ directory which will run automatically. [see here](https://docs.strongloop.com/display/public/LB/Implementing+auto-migration) 
  - These models will be exposed through the REST api once the server is running

###### Configuration
 - Apart fromt the database there is some extra configuration available
 - You can configure relationships between models such as hasMany, belongsTo etc. see [here](https://docs.strongloop.com/display/public/LB/Creating+model+relations)
 
 ###### Extending the REST Api
 
 - You can add custom endpoints to your model properties in the commom/models/{model-name}.js
 - You can add your own methds and overwrite existing methods (make sure to call the original method at the end of yours).
 - More info on [Adding custom model methods](https://docs.strongloop.com/display/public/LB/Extend+your+API) and [Overriding built in CRUD methods](https://docs.strongloop.com/display/public/LB/Customizing+models#Customizingmodels-CustomizingamodelwithJavaScriptcode)
  
