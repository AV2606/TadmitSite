import { bottom } from "@popperjs/core";

export enum Languages{
    hebrew='hebrew',
    english='english'
}
export interface LangDesc {
    // Used to display the top of the details div
    Top:string;
    //Used to display the bottom of the details div
    Bottom:string;
}
export class Strings{

    //should be used later to change language.
    static language=Languages.english;
    static readonly notSupportedYetChar='<>';

    static readonly first_name= 'Avichay';//this.language==Languages.english? 'Avichay':this.notSupportedYetChar;
    static readonly last_name='Vaknin';
    static readonly shortDesc=`<strong>The program magician.</br>Full-stack.</strong>`;
    static readonly Languages={
        cspng:{
        Top:"C# is a general-purpose, object-oriented programming language. It was developed by Microsoft and is used in a wide variety of applications.",
        Bottom:".Net | WPF | UWP | WinForms | ASP | Task based multi-threading | Strong Typed | OOP | EF Core | GC"
        }
        , javapng:{
        Top:"Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and designed to be a platform for developing large, complex software systems.",
        Bottom:" Android & Android Studio | iOS | Strong Typed | OOP | GC | JVM "
        },
        tspng:{
        Top:"TypeScript is a JavaScript-based language with strict type checking and first-class functions. It is a superset of JavaScript, and is designed to be a drop-in replacement for JavaScript.",
        Bottom:"JS Super set | Strong and weakly Typed | OOP | Functional programming  | DOM | Angular | React | Node.js | NPM"
        },
        htmlpng:{
        Top:"HTML is the standard markup language for creating Web pages. It is used to create markup which is a text format for representing content on the World Wide Web.",
        Bottom:"HTML5 | CSS3 | JS | DOM | V8"
        },
        jspng:{
        Top:"JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-parthic.",
        Bottom:"ES6 | DOM | V8 | GC | Not Java | Prototype-based | Multi-parthic | Weakly Typed | Dynamic | Closures"
        },
        csspng:{
        Top:"CSS is a style sheet language used for describing the presentation of a document written in a markup language.",
        Bottom:"CSS3 | DOM | Declaration-based | Flexbox | Grid | Media Queries | Sass | Less | Bootstrap | Tailwindcss"
        },
        sqlpng:{
        Top:"SQL is a programming language that is used for managing data in a database.",
        Bottom:"SQL Server | SMSS | Queires | Stored Procedures | Data Types | Data Manipulation | Data Definition | Scheme | Primary-Key "
        },
        netpng:{
        Top:".NET is a platform for creating applications and services for the Internet.",
        Bottom:"CLR | IL | COM | C# | .Net Core | .Net Framework | Xamarin | Blazor | ASP.Net"
        },
        angularpng:{
        Top:"Angular is a JavaScript framework for building single-page applications.",
        Bottom:"Angular.js | Angular 13 | Virtual DOM | Templates | Data-Binding | js in html"
        },
        nodepng:{
        Top:"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        Bottom:"V8 | JS | DOM | Single-threaded | Asynchronous | Event-based | Serve-side & Client-side"
        },
        entitypng:{
        Top:"Entity Framework is a data access framework for Microsoft SQL Server.",
        Bottom:"EF Core | EF 6 | .NET | C#"
        },
        vanillapng:{
        Top:"Vanilla JS is a the 'base' framework for building user interfaces.",
        Bottom:"Vanilla JS | JS | DOM | Single-threaded | Asynchronous | Event-based | Client-side"
        },
        androidstudiopng:{
        Top:"Android Studio is a graphical user interface (GUI) tool for developing Android applications.",
        Bottom:"Android Studio | Android | Java | JavaFX | Kotlin | Gradle | Android SDK | Google"
        },
        asppng:{
        Top:"ASP.NET is a web application framework for building dynamic web sites and web applications.",
        Bottom:"ASP.NET | C# | .Net Core | .Net Framework | Web Forms | Razor | MVC | Web API"
        }
    }
}