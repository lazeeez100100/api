# Image Processing API

## Table of Contents

- [Image Processing API](#image-processing-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [instructions (how to use)](#instructions-how-to-use)
  - [Project Owner](#project-owner)
  - [Languages](#languages)
  - [Functions](#functions)
  - [Thanks For](#thanks-for)
  - [Dependencies used](#dependencies-used)
  - [devDependencies used](#devdependencies-used)
  - [Note](#note)
  - [Resources](#resources)
  - [Version Number](#version-number)

## Description
 The project make multiple things.
- **run TDD** for Testing.
- **make** application that matches the tests.
- **building** an API.
- **cerate** a server.
- **run** a server.  
- **dealing** with API.
- **get request** from user.
- **send response** to user.
- **resize** an image and preview it in browser.       
- **if** there is an image with the **same name and width and hight** just preview it in browser.
  
## instructions (how to use)
- go to your browser and type site url then ***(/)*** followed by api name then type resize (endpoint) then***(?)*** (query) with api params needed {filename, width, height} like in the next (url)
  - http://localhost:3000/api/resize?filename=fjord&width=550&height=350
- make sure you type the width and height with type number 
- make sure file name exists in full image distention folder


## Project Owner
   Ahmed Awni Abdul Tawwab Yousif   
   
## Languages
    - JavaScript
    - typeScript

## Functions 
  - imageProcessing
     - using express api
     - using fs
     - using path
     - using imageResize from utilities  
  - imageResize  
      -  using sharp
      -  using Buffer
  - routes
      - to resize image
      - to server
      - to site

## Thanks For
- MCIT: The Egyptian Ministry of Communications and Information technology
- Udacity: www.udacity.com
- ITIDA: Information Technology Industry Development Agency www.itida.gov.eg.

## Dependencies used
- My own code.
- Udacity PHoto and sum code from there.
- express: 4.18.1
- jasmine: 4.4.0
- jasmine-spec-reporter: 7.0.0
- sharp: 0.31.0
- supertest: 6.2.4

## devDependencies used
   - @types/express: 4.17.14
   - @types/jasmine: 4.3.0
   - @types/node: 18.7.18
   - @types/sharp: 0.31.0
   - @types/supertest: 2.0.12
   - eslint": 8.23.1
   - eslint-config-prettier: 8.5.0
   - eslint-plugin-prettier: 4.2.1
   - nodemon: 2.0.20
   - prettier: 2.7.1
   - ts-node: 10.9.1
   - typescript: 4.8.3
  

## Note
All code in **ts** , **js** or **md** files from my mind except sum code from DOC from package it self or from stackoverflow and i edit it to make my need, 
and i can't insure that this code like other one or not. 
so i wish **udacity** accept all off them.
## Resources  
- udacity
- my owen codes
- sum searches on web for solving problems like this
  - https://stackoverflow.com/questions/46716730/how-to-check-an-image-dimensions-using-js-or-node
## Version Number
- ver 1.0.0