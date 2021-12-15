# Message Bot Node.js Backend

This project was created using express.js

## Steps to install and run the app locally on a Windows machines
1. In root of the project run this command: 
   ### `npm install`
2. In root of the project run this command: 
   ### `node index`
The app will run on http://localhost:8080. You can use postman to test the app. At first, you do not have any data. So you should create some messages using **[post]/createMsg** method at first.

## Project structure
>index.js
>  
**[get]/messages** returns all messages created by users.<br/>
**[get]/getMessageById/:id** returns a message by id.<br/>
**[get]/getDateToBirthday/:id** returns days left till his/her next birtday.<br/>
**[post]/createMsg** creates a new message with a blank name and 0000-00-00 birthday.<br/>
**[patch]/updateMsg/:id** updates a message by id with the request's body. The body should be an object which has `firstName` or `birthday` key (or both). `firstName` is any string and `birthday` is a string styled '0000-00-00'.<br/>
**[delete]/deleteMsg/:id** deletes a message by id.<br/>
<br/>

>model.js
>  
```const store = [];``` This is a runtime memory to store messages temporarily.<br/>
**createMsg** creates a new message and saves it to the store.<br/>
**deleteMsg** removes a message from the store by id.<br/>
**updateMsg** updates the store by id.<br/>
**findMsg** finds a message from the store by id and returns it.<br/>
**getAllMsg** returns the store itself.<br/>
**findDateToBirthday** calculates the days left till his/her next birthday by id and returns the value.<br/>
<br/>

## Artem Medianyk (Test)