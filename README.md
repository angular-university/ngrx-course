
## Ngrx (with NgRx Data) - The Complete Guide

This repository contains the code of the video course [Ngrx (with NgRx Data) - The Complete Guide](https://angular-university.io/course/ngrx-course).

This course repository is updated to Angular v14:

![Ngrx (with NgRx Data) - The Complete Guide](https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png)


# Installation pre-requisites

For taking the course we recommend installing Node 16 Long Term Support Edition (LTE).

To easily switch between node versions on your machine, we recommend using a node virtual environment tool such as [nave](https://www.npmjs.com/package/nave) or [nvm-windows](https://github.com/coreybutler/nvm-windows), depending on your operating system. 

For example, here is how you switch to a new node version using nave:

    # note that you don't even need to update your node version before installing nave
    npm install -g nave
    
    nave use 16.13.1
    node -v
    v12.3.1

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-ngrx-course.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd ngrx-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)



# Important 

This repository has multiple branches, have a look at the beginning of each section to see the name of the branch.

At certain points along the course, you will be asked to checkout other remote branches other than master. You can view all branches that you have available remotely using the following command:

    git branch -a

  The remote branches have their starting in origin, such as for example 1-start.

We can checkout the remote branch and start tracking it with a local branch that has the same name, by using the following command:

      git checkout -b 1-start 

It's also possible to download a ZIP file for a given branch,  using the branch dropdown on this page on the top left, and then selecting the Clone or Download / Download as ZIP button.

# Other Courses

# Angular Core Deep Dive Course

If you are looking for the [Angular Core Deep Dive Course](https://angular-university.io/course/angular-course), the repo with the full code can be found here:

![Angular Core Deep Dive](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png)

# RxJs In Practice

If you are looking for the [RxJs In Practice](https://angular-university.io/course/rxjs-course), the repo with the full code can be found here:

![RxJs In Practice Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png)


# Angular Testing Course

If you are looking for the [Angular Testing Course](https://angular-university.io/course/angular-testing-course), the repo with the full code can be found here:

![Angular Testing Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png)

# Serverless Angular with Firebase Course

If you are looking for the [Serverless Angular with Firebase Course](https://angular-university.io/course/firebase-course), the repo with the full code can be found here:

![Serverless Angular with Firebase Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png)

# Angular Universal Course

If you are looking for the [Angular Universal Course](https://angular-university.io/course/angular-universal-course), the repo with the full code can be found here:

![Angular Universal Course](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-universal-small.png)

# Angular PWA Course

If you are looking for the [Angular PWA Course](https://angular-university.io/course/angular-pwa-course), the repo with the full code can be found here:

![Angular PWA Course - Build the future of the Web Today](https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png)

# Angular Security Masterclass

If you are looking for the [Angular Security Masterclass](https://angular-university.io/course/angular-security-course), the repo with the full code can be found here:

[Angular Security Masterclass](https://github.com/angular-university/angular-security-course).

![Angular Security Masterclass](https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png)

# Angular Advanced Library Laboratory Course

If you are looking for the Angular Advanced Course, the repo with the full code can be found here:

[Angular Advanced Library Laboratory Course: Build Your Own Library](https://angular-university.io/course/angular-advanced-course).

![Angular Advanced Library Laboratory Course: Build Your Own Library](https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png)


## RxJs and Reactive Patterns Angular Architecture Course

If you are looking for the RxJs and Reactive Patterns Angular Architecture Course code, the repo with the full code can be found here:

[RxJs and Reactive Patterns Angular Architecture Course](https://angular-university.io/course/reactive-angular-architecture-course)

![RxJs and Reactive Patterns Angular Architecture Course](https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png)


## Complete Typescript Course - Build A REST API

If you are looking for the Complete Typescript 2 Course - Build a REST API, the repo with the full code can be found here:

[https://angular-university.io/course/typescript-2-tutorial](https://github.com/angular-university/complete-typescript-course)

[Github repo for this course](https://github.com/angular-university/complete-typescript-course)

![Complete Typescript Course](https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png)

