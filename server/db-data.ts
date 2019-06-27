export const USERS = {
  1: {
    id: 1,
    email: 'test@angular-university.io',
    password: 'test'
  }

};


export const COURSES: any = {

  4: {
    id: 4,
    description: 'NgRx (with NgRx Data) - The Complete Guide',
    longDescription: 'Learn the modern Ngrx Ecosystem, including NgRx Data, Store, Effects, Router Store, Ngrx Entity, and Dev Tools.',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 0,
    url: 'ngrx-course'
  },

  2: {
    id: 2,
    description: 'Angular Core Deep Dive',
    longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
    lessonsCount: 10,
    category: 'BEGINNER',
    seqNo: 1,
    url: 'angular-core-course'
  },

  3: {
    id: 3,
    description: 'RxJs In Practice Course',
    longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 2,
    url: 'rxjs-course'
  },

  1: {
    id: 1,
    description: 'Serverless Angular with Firebase Course',
    longDescription: 'Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png',
    lessonsCount: 10,
    category: 'BEGINNER',
    seqNo: 4,
    url: 'serverless-angular'
  },

  /*


  5: {
    id: 5,
    description: 'Angular for Beginners',
    longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 5,
    url: 'angular-for-beginners'
  },

*/

  12: {
    id: 12,
    description: 'Angular Testing Course',
    longDescription: 'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
    category: 'BEGINNER',
    seqNo: 6,
    url: 'angular-testing-course',
    lessonsCount: 10,
  },

  6: {
    id: 6,
    description: 'Angular Security Course - Web Security Fundamentals',
    longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    category: 'ADVANCED',
    lessonsCount: 11,
    seqNo: 7,
    url: 'angular-security-course'
  },

  7: {
    id: 7,
    description: 'Angular PWA - Progressive Web Apps Course',
    longDescription: 'Learn Angular Progressive Web Applications, build the future of the Web Today.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
    category: 'ADVANCED',
    lessonsCount: 8,
    seqNo: 8,
    url: 'angular-pwa-course'
  },

  8: {
    id: 8,
    description: 'Angular Advanced Library Laboratory: Build Your Own Library',
    longDescription: 'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
    category: 'ADVANCED',
    seqNo: 9,
    url: 'angular-advanced-course'
  },

  9: {
    id: 9,
    description: 'The Complete Typescript Course',
    longDescription: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
    iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
    category: 'BEGINNER',
    seqNo: 10,
    url: 'typescript-course'
  },

  10: {
    id: 10,
    description: 'Rxjs and Reactive Patterns Angular Architecture Course',
    longDescription: 'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
    category: 'BEGINNER',
    seqNo: 11,
    url: 'rxjs-patterns-course'
  },

  11: {
    id: 11,
    description: 'Angular Material Course',
    longDescription: 'Build Applications with the official Angular Widget Library',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
    category: 'BEGINNER',
    seqNo: 12,
    url: 'angular-material-course'
  }

};


export const LESSONS = {

  1: {
    id: 1,
    'description': 'Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step',
    'duration': '4:17',
    'seqNo': 1,
    courseId: 5
  },
  2: {
    id: 2,
    'description': 'Building Your First  Component - Component Composition',
    'duration': '2:07',
    'seqNo': 2,
    courseId: 5
  },
  3: {
    id: 3,
    'description': 'Component @Input - How To Pass Input Data To an  Component',
    'duration': '2:33',
    'seqNo': 3,
    courseId: 5
  },
  4: {
    id: 4,
    'description': ' Component Events - Using @Output to create custom events',
    'duration': '4:44',
    'seqNo': 4,
    courseId: 5
  },
  5: {
    id: 5,
    'description': ' Component Templates - Inline Vs External',
    'duration': '2:55',
    'seqNo': 5,
    courseId: 5
  },
  6: {
    id: 6,
    'description': 'Styling  Components - Learn About Component Style Isolation',
    'duration': '3:27',
    'seqNo': 6,
    courseId: 5
  },
  7: {
    id: 7,
    'description': ' Component Interaction - Extended Components Example',
    'duration': '9:22',
    'seqNo': 7,
    courseId: 5
  },
  8: {
    id: 8,
    'description': ' Components Tutorial For Beginners - Components Exercise !',
    'duration': '1:26',
    'seqNo': 8,
    courseId: 5
  },
  9: {
    id: 9,
    'description': ' Components Tutorial For Beginners - Components Exercise Solution Inside',
    'duration': '2:08',
    'seqNo': 9,
    courseId: 5
  },
  10: {
    id: 10,
    'description': ' Directives - Inputs, Output Event Emitters and How To Export Template References',
    'duration': '4:01',
    'seqNo': 10,
    courseId: 5
  },


  // Security Course
  11: {
    id: 11,
    'description': 'Course Helicopter View',
    'duration': '08:19',
    'seqNo': 1,
    courseId: 6
  },

  12: {
    id: 12,
    'description': 'Installing Git, Node, NPM and Choosing an IDE',
    'duration': '04:17',
    'seqNo': 2,
    courseId: 6
  },

  13: {
    id: 13,
    'description': 'Installing The Lessons Code - Learn Why Its Essential To Use NPM 5',
    'duration': '06:05',
    'seqNo': 3,
    courseId: 6
  },

  14: {
    id: 14,
    'description': 'How To Run Node In TypeScript With Hot Reloading',
    'duration': '03:57',
    'seqNo': 4,
    courseId: 6
  },

  15: {
    id: 15,
    'description': 'Guided Tour Of The Sample Application',
    'duration': '06:00',
    'seqNo': 5,
    courseId: 6
  },
  16: {
    id: 16,
    'description': 'Client Side Authentication Service - API Design',
    'duration': '04:53',
    'seqNo': 6,
    courseId: 6
  },
  17: {
    id: 17,
    'description': 'Client Authentication Service - Design and Implementation',
    'duration': '09:14',
    'seqNo': 7,
    courseId: 6
  },
  18: {
    id: 18,
    'description': 'The New Angular HTTP Client - Doing a POST Call To The Server',
    'duration': '06:08',
    'seqNo': 8,
    courseId: 6
  },
  19: {
    id: 19,
    'description': 'User Sign Up Server-Side Implementation in Express',
    'duration': '08:50',
    'seqNo': 9,
    courseId: 6
  },
  20: {
    id: 20,
    'description': 'Introduction To Cryptographic Hashes - A Running Demo',
    'duration': '05:46',
    'seqNo': 10,
    courseId: 6
  },
  21: {
    id: 21,
    'description': 'Some Interesting Properties Of Hashing Functions - Validating Passwords',
    'duration': '06:31',
    'seqNo': 11,
    courseId: 6
  },


  // PWA course

  22: {
    id: 22,
    'description': 'Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
    'duration': '07:19',
    'seqNo': 1,
    courseId: 7
  },
  23: {
    id: 23,
    'description': 'Service Workers In a Nutshell - Service Worker Registration',
    'duration': '6:59',
    'seqNo': 2,
    courseId: 7
  },
  24: {
    id: 24,
    'description': 'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
    'duration': '7:28',
    'seqNo': 3,
    courseId: 7
  },
  25: {
    id: 25,
    'description': 'Service Workers and Application Versioning - Install & Activate Lifecycle Phases',
    'duration': '10:17',
    'seqNo': 4,
    courseId: 7
  },

  26: {
    id: 26,
    'description': 'Downloading The Offline Page - The Service Worker Installation Phase',
    'duration': '09:50',
    'seqNo': 5,
    courseId: 7
  },
  27: {
    id: 27,
    'description': 'Introduction to the Cache Storage PWA API',
    'duration': '04:44',
    'seqNo': 6,
    courseId: 7
  },
  28: {
    id: 28,
    'description': 'View Service Workers HTTP Interception Features In Action',
    'duration': '06:07',
    'seqNo': 7,
    courseId: 7
  },
  29: {
    id: 29,
    'description': 'Service Workers Error Handling - Serving The Offline Page',
    'duration': '5:38',
    'seqNo': 8,
    courseId: 7
  },

  // Serverless Angular with Firebase Course

  30: {
    id: 30,
    description: 'Development Environment Setup',
    'duration': '5:38',
    'seqNo': 1,
    courseId: 1
  },

  31: {
    id: 31,
    description: 'Introduction to the Firebase Ecosystem',
    'duration': '5:12',
    'seqNo': 2,
    courseId: 1
  },

  32: {
    id: 32,
    description: 'Importing Data into Firestore',
    'duration': '4:07',
    'seqNo': 3,
    courseId: 1
  },

  33: {
    id: 33,
    description: 'Firestore Documents in Detail',
    'duration': '7:32',
    'seqNo': 4,
    courseId: 1
  },

  34: {
    id: 34,
    description: 'Firestore Collections in Detail',
    'duration': '6:28',
    'seqNo': 5,
    courseId: 1
  },

  35: {
    id: 35,
    description: 'Firestore Unique Identifiers',
    'duration': '4:38',
    'seqNo': 6,
    courseId: 1
  },

  36: {
    id: 36,
    description: 'Querying Firestore Collections',
    'duration': '7:54',
    'seqNo': 7,
    courseId: 1
  },

  37: {
    id: 37,
    description: 'Firebase Security Rules In Detail',
    'duration': '5:31',
    'seqNo': 8,
    courseId: 1
  },

  38: {
    id: 38,
    description: 'Firebase Cloud Functions In Detail',
    'duration': '8:19',
    'seqNo': 9,
    courseId: 1
  },

  39: {
    id: 39,
    description: 'Firebase Storage In Detail',
    'duration': '7:05',
    'seqNo': 10,
    courseId: 1
  },


  // Angular Testing Course

  40: {
    id: 40,
    description: 'Angular Testing Course - Helicopter View',
    'duration': '5:38',
    'seqNo': 1,
    courseId: 12
  },

  41: {
    id: 41,
    description: 'Setting Up the Development Environment',
    'duration': '5:12',
    'seqNo': 2,
    courseId: 12
  },

  42: {
    id: 42,
    description: 'Introduction to Jasmine, Spies and specs',
    'duration': '4:07',
    'seqNo': 3,
    courseId: 12
  },

  43: {
    id: 43,
    description: 'Introduction to Service Testing',
    'duration': '7:32',
    'seqNo': 4,
    courseId: 12
  },

  44: {
    id: 44,
    description: 'Settting up the Angular TestBed',
    'duration': '6:28',
    'seqNo': 5,
    courseId: 12
  },

  45: {
    id: 45,
    description: 'Mocking Angular HTTP requests',
    'duration': '4:38',
    'seqNo': 6,
    courseId: 12
  },

  46: {
    id: 46,
    description: 'Simulating Failing HTTP Requests',
    'duration': '7:54',
    'seqNo': 7,
    courseId: 12
  },

  47: {
    id: 47,
    description: 'Introduction to Angular Component Testing',
    'duration': '5:31',
    'seqNo': 8,
    courseId: 12
  },

  48: {
    id: 48,
    description: 'Testing Angular Components without the DOM',
    'duration': '8:19',
    'seqNo': 9,
    courseId: 12
  },

  49: {
    id: 49,
    description: 'Testing Angular Components with the DOM',
    'duration': '7:05',
    'seqNo': 10,
    courseId: 12
  },


  // Ngrx Course
  50: {
    id: 50,
    "description": "Welcome to the Angular Ngrx Course",
    "duration": "6:53",
    "seqNo": 1,
    courseId: 4

  },
  51: {
    id: 51,
    "description": "The Angular Ngrx Architecture Course - Helicopter View",
    "duration": "5:52",
    "seqNo": 2,
    courseId: 4
  },
  52: {
    id: 52,
    "description": "The Origins of Flux - Understanding the Famous Facebook Bug Problem",
    "duration": "8:17",
    "seqNo": 3,
    courseId: 4
  },
  53: {
    id: 53,
    "description": "Custom Global Events - Why Don't They Scale In Complexity?",
    "duration": "7:47",
    "seqNo": 4,
    courseId: 4
  },
  54: {
    id: 54,
    "description": "The Flux Architecture - How Does it Solve Facebook Counter Problem?",
    "duration": "9:22",
    "seqNo": 5,
    courseId: 4
  },
  55: {
    id: 55,
    "description": "Unidirectional Data Flow And The Angular Development Mode",
    "duration": "7:07",
    "seqNo": 6,
    courseId: 4
  },

  56: {
    id: 56,
    "description": "Dispatching an Action - Implementing the Login Component",
    "duration": "4:39",
    "seqNo": 7,
    courseId: 4
  },
  57: {
    id: 57,
    "description": "Setting Up the Ngrx DevTools - Demo",
    "duration": "4:44",
    "seqNo": 8,
    courseId: 4
  },
  58: {
    id: 58,
    "description": "Understanding Reducers - Writing Our First Reducer",
    "duration": "9:10",
    "seqNo": 9,
    courseId: 4
  },
  59: {
    id: 59,
    "description": "How To Define the Store Initial AppState",
    "duration": "9:10",
    "seqNo": 10,
    courseId: 4
  }


};


export function findCourseById(courseId: number) {
  return COURSES[courseId];
}

export function findLessonsForCourse(courseId: number) {
  return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}


export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }

}
