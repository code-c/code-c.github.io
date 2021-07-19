#!/bin/bash

#this is to build the webpage and run it on localhost:3000

#youre going to need the latest verion of node installed
#first we install the node dependancies
echo "Installing node modules"
yarn
echo "done..."

#then we go into our blog and start the sanity server
echo "Installing Sanity's node modules"
cd blog/
yarn
echo "done..."

#we start Sanity
echo "starting Sanity CMS in the background"
nohup sanity start < /dev/null &
echo "done..."


#then we run the webpage
echo "starting react app"
cd ..
yarn start
