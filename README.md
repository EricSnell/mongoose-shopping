db/
    Contains all database related files
    
models/
    Contains data models, i.e. Item models
    
services/
    Contains the logic of the API. Here you could have logice that 
    includes multiple models interacting with each other
    
routes/
    Contains logic for mapping endpoints to service calls. This 
    separates HTTP logic from the model logic
    
server.js
    Brings everything together by loading the database configuration
    and adding routes to the server
    
db/config.json
    The file that maps the application's environment to the Mongo
    database. 