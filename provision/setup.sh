#!/bin/bash

sudo apt-get update && sudo apt-get -y upgrade
sudo apt-get install python-pip

sudo pip install django==1.8.1
