const questionListJS = {
    1: 'Can you name two programming paradigms important for JavaScript app developers?',
    2: 'What is functional programming?',
    3: 'What is the difference between classical inheritance and prototypal inheritance?',
    4: ' What are undeclared and undefined variables?',
    5: 'What are global variables? How are these variable declared and what are the problems associated with using them?'
};

const answerListJS = {
    1: 'JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.',
    2: 'Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming, and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.Functional programming is an essential concept in JavaScript (one of the two pillars of JavaScript). Several common functional utilities were added to JavaScript in ES5.',
    3: 'Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.',
    4: 'Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.',
    5: 'Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.'
};

const questionListReact = {
    1: 'What is React? How is it different from other JS frameworks?',
    2: 'What happens during the lifecycle of a React component?',
    3: 'What can you tell me about JSX?',
    4: 'What are stateless components?',
    5: 'Are you familiar with Flux?'
};

const answerListReact = {
    1: 'React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.',
    2: 'Every React component defines these events as a mechanism for managing its properties, state, and rendered output. Some of these events only happen once, others happen more frequently; understanding these three general categories should help you clearly visualize when certain logic needs to be applied.',
    3: 'When Facebook first released React to the world, they also introduced a new dialect of JavaScript called JSX that embeds raw HTML templates inside JavaScript code. JSX code by itself cannot be read by the browser; it must be transpiled into traditional JavaScript using tools like Babel and webpack. While many developers understandably have initial knee-jerk reactions against it, JSX (in tandem with ES2015) has become the defacto method of defining React components.',
    4: 'Stateless components (a flavor of “reusable” components) are nothing more than pure functions that render DOM based solely on the properties provided to them.',
    5: 'Flux is an architectural pattern that enforces unidirectional data flow — its core purpose is to control derived data so that multiple components can interact with that data without risking pollution.The Flux pattern is generic; it’s not specific to React applications, nor is it required to build a React app. However, Flux is commonly used by React developers because React components are declarative — the rendered UI (View) is simply a function of state (Store data).'
};

const questionListCSharp = {
    1: 'What is C-Sharp (C#)?',
    2: 'Explain namespaces in C#?',
    3: 'Explain “static” keyword in C#?',
    4: 'What is an object?',
    5: ' Define Constructors?'
};

const answerListCSharp = {
    1: 'C# is a type-safe, managed and object oriented language, which is compiled by .Net framework for generating intermediate language (IL).',
    2: 'Namespaces are containers for the classes. We will use namespaces for grouping the related classes in C#. “Using” keyword can be used for using the namespace in other namespace.',
    3: '“Static” keyword can be used for declaring a static member. If the class is made static then all the members of the class are also made static. If the variable is made static then it will have a single instance and the value change is updated in this instance.',
    4: 'An object is an instance of a class through which we access the methods of that class. "New" keyword is used to create an object. A class that creates an object in memory will contain the information about the methods, variables and behavior of that class.',
    5: 'A constructor is a member function in a class that has the same name as its class. The constructor is automatically invoked whenever an object class is created. It constructs the values of data members while initializing the class.'
};
const questionListAngular = {
    1: 'What is AngularJS?',
    2: 'Explain what is scope in AngularJS ?',
    3: 'Explain what is services in AngularJS ?',
    4: 'Explain what Angular JS routes does ?',
    5: ' Explain what is string interpolation in Angular.js ?'
};

const answerListAngular = {
    1: 'AngularJS is a javascript framework used for creating single web page applications.  It allows you to use HTML as your template language and enables you to extend HTML’s syntax to express your application’s components clearly',
    2: 'Scope refers to the application model, it acts like glue between application controller and the view.  Scopes are arranged in hierarchical structure and impersonate the DOM ( Document Object Model) structure of the application.  It can watch expressions and propagate events.',
    3: 'In AngularJS services are the singleton objects or functions that are used for carrying out specific tasks.  It holds some business logic and these function can be called as controllers, directive, filters and so on.',
    4: 'Angular js routes enable you to create different URLs for different content in your application.  Different URLs for different content enables user to bookmark URLs to specific content.  Each such bookmarkable URL in AngularJS is called a route.A value in Angular JS is a simple object.  It can be a number, string or JavaScript object.  Values are typically used as configuration injected into factories, services or controllers. A value should be belong to an AngularJS module.Injecting a value into an AngularJS controller function is done by adding a parameter with the same name as the value',
    5: 'In Angular.js the compiler during the compilation process matches text and attributes using interpolate service to see if they contains embedded expressions.  As part of normal digest cycle these expressions are updated and registered as watches.'
};

export const initialState = {
    javaScriptById: {
        1: {
            question: questionListJS[1],
            answer: answerListJS[1]
        },
        2: {
            question: questionListJS[2],
            answer: answerListJS[2]
        },
        3: {
            question: questionListJS[3],
            answer: answerListJS[3]
        },
        4: {
            question: questionListJS[4],
            answer: answerListJS[4]
        },
        5: {
            question: questionListJS[5],
            answer: answerListJS[5]
        }
    },
    reactById: {
        1: {
            question: questionListReact[1],
            answer: answerListReact[1]
        },
        2: {
            question: questionListReact[2],
            answer: answerListReact[2]
        },
        3: {
            question: questionListReact[3],
            answer: answerListReact[3]
        },
        4: {
            question: questionListReact[4],
            answer: answerListReact[4]
        },
        5: {
            question: questionListReact[5],
            answer: answerListReact[5]
        }
    },
    csharpById: {
        1: {
            question: questionListCSharp[1],
            answer: answerListCSharp[1]
        },
        2: {
            question: questionListCSharp[2],
            answer: answerListCSharp[2]
        },
        3: {
            question: questionListCSharp[3],
            answer: answerListCSharp[3]
        },
        4: {
            question: questionListCSharp[4],
            answer: answerListCSharp[4]
        },
        5: {
            question: questionListCSharp[5],
            answer: answerListCSharp[5]
        }
    },
    angularById: {
        1: {
            question: questionListAngular[1],
            answer: answerListAngular[1]
        },
        2: {
            question: questionListAngular[2],
            answer: answerListAngular[2]
        },
        3: {
            question: questionListAngular[3],
            answer: answerListAngular[3]
        },
        4: {
            question: questionListAngular[4],
            answer: answerListAngular[4]
        },
        5: {
            question: questionListAngular[5],
            answer: answerListAngular[5]
        }
    },
    quizJSList: {
        1: {
            question: 'Inside which HTML element do we put the JavaScript?',
            choice1: 'js',
            choice2: 'html',
            choice3: 'scripts',
            answer: 'scripts',
            id: 1
        },
        2: {
            question: 'Where is the correct place to insert a JavaScript?',
            choice1: 'The <body> section',
            choice2: 'Both <head> and <body>',
            choice3: '<head> section',
            answer: '<head> section',
            id: 2
        },
        3: {
            question: 'The external JavaScript file must contain the <script> tag.',
            choice1: 'True',
            choice2: 'false',
            choice3: 'none',
            answer: 'true',
            id: 3
        }

    }
}