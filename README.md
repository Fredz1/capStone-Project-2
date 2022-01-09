# Fred CapStone Project 2

## Hyperion Dev Level 2 Task 21

### How to use this app

-Enter a search term i.e.Eminem, Deadpool or Beyonce  
-You can select the type of media you would like to search for. i.e. You can search for Beyonce music videos or music or all the content available across all media types.  
--If nothing is selected it defaults to 'all'

### How install, test and run this app

-Clone this respository into you project directory "https://github.com/Fredz1/capStone-Project-2.git"  
-Once completed cd into project directory  
-Input "npm install" then change to client directory  "cd client" and input "npm install"  
-Once node mondules have installed "cd .." to project directory and input "npm start"

### Security Measures

-No API keys were needed to make any requests However it would be added to the .env file and access via 'process.env'  
-Used helmet to secure app  
-User input is sanitised by default in react see: <https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks>  
-used express validator to sanitise userinput to only accept Aa-Zz

### Link to Heroku build

-<https://istoresearcher.herokuapp.com/>
