#!/bin/bash

npm run build
rsync -avr build/ root@ec2-54-93-247-240.eu-central-1.compute.amazonaws.com:/wehstyle
