# TheProject

So here we go :)

The project will be an ecommerce

So lets give the user a great experience when utilizing our web app

A great developer is alway curious in trying some code out and learning from that experience.

# angular cli
the boilerplate of the app was built with the angular cli like so: ng new the-project --style=scss. So --style=scss is a flag that lets angular cli know that we want scss to be wired up when creating the boilerplate.

# common folder
the common folder stores files that will be used across the web app hence the name common

# git cloning
git clone the project repo to your local enviroment

# for local environment front end instructions
you need to change package.json start script from node server.js to ng serve that is all. 
run npm install on your terminal, once finished run ng serve.
npm install, installs all the depenecies and devdepencies for the project to work.
ng serve run the angular app and spings a local server for you to view your local changes

# for local environment back end instructions
on a second terminal tab same root directory of the project run the following command: nodemon server.js
this will start the backend server
You will need to start mongodb server as well for the backend app to work and api requests to work
in server.js remove the following code:
app.use(express.static(__dirname + '/dist/the-project'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/the-project-patitas/index.html'));
});
in server.js change line 10 to mongoose.connect('http://localhost:27017/theProject', { useNewUrlParser: true })