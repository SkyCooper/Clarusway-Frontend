//! Classes, Interfaces, Objects;

//! ************** Classes ***********
// ➤ TypeScript offers full support for the class keyword introduced in ES2015.

// ➤ In JavaScript, ES6 allowed us to declare a class which is simply syntactic sugar for creating constructor function and prototypal inheritance:

class Person {
  id;
  firstName;
  lastName;

  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// ➤ TypeScript class adds type annotations to the properties and methods of the class. The following shows the Person class in TypeScript:

class Person {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// ➤ Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads. There are just a few differences between class constructor signatures and function signatures:

// ● Constructors can’t have type parameters - these belong on the outer class declaration.

// ● Constructors can’t have return type annotations - the class instance type is always what’s returned

// ➤ As with other locations, the type annotation is optional, but will be an implicit any if not specified. Fields can also have initializers; these will run automatically when the class is instantiated:

class Person {
  id = 1;
  firstName = "Mark";
  lastName = "Maddison"
}
const mark = new Person();
mark.id = "2";
// Type 'string' is not assignable to type 'number'.

// ➤ Super Calls

// Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:

class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    console.log(this.k);
'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }
}

// Forgetting to call super is an easy mistake to make in JavaScript, but TypeScript will warn you when it’s necessary.

//?  Access Modifiers & Readonly
// ➤ Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:

//! public
//! private
// !protected

// Note that TypeScript controls the access logically during compilation time, not at runtime.


//? ● Public
// * belirtilmediyse public'tir.
//* dışarıdan erişilebilir yani obje oluşturulunca . nokta notasyonu ile erişilebilir.

// The default visibility of class members is public. A public member can be accessed anywhere. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

class Employee {
    public id: string;
    name: string;
}

let emp = new Employee();
emp.id= 1;
emp.name= "Mark";

//? ● Private
//* dışarıdan erişilemez yani obje oluşturulunca . nokta notasyonu ile ulaşılmaz ve değiştirilmez.

// The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.

class Person {
    private id: number;
    private firstName: string;
    private lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}

//? Protected


//? readonly
//* başlangıçta bir kere tanımlanıp değer atanır ve bir daha güncellenmez
//* private readonly, public readonly olarak tanımlanabilir.

// Fields may be prefixed with the readonly modifier. Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed. They need to be initialized at

// In the property declaration.
// In the constructor of the same class.

class Employee {
    readonly id: string;
    name: string;
    readonly department: string = "Sales"; // initialized at declaration
    
    constructor(id: string, name: string)     {
        this.id = code;
        this.name = name;
    }
}
let emp = new Employee(10, "John");
emp.id = 20; //Compiler Error
emp.name = 'Sally'; 

// ➤ Parameter Properties

// TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value. These are called parameter properties and are created by prefixing a constructor argument with one of the visibility modifiers public, private, protected, or readonly. The resulting field gets those modifier(s):


//todo, Interfaces

//* TypeScript'teki bir Interface, aşağı yukarı bir object için önceden kurgulanmış plan gibi davranır. Object'lerde ki property(özellik) adları ve value(değerleri) hakkındaki bilgileri tanımlar. Bu, TypeScript derleyicisinin object'lerinizi doğrulamasına yardımcı olabilir, böylece object'leri yanlış biçimde tanımlamazsınız.

//* TypeScript'deki interface, temelinde bir tip tanımından başka birşey değildir. ***class*** ve ***function***'lar nesnelerin davranışlarını tanımlarken, ***interface***'ler nesnelerin tiplerini tanımlar şeklinde düşünebiliriz. 

//! Javascript'de interface kavramı olmadığı için TypeScript'de bir interface tanımladığınız ve compile ettiğiniz zaman, onun bir Javascript kodu üretmediğini görürsünüz. Bu noktada interface'lerin compile zamanında tipleri tanımladığını ve geliştirme aşamasında da kolaylık sağlar.


// ➤ TypeScript interfaces define the contracts within your code. An interface defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface. The TypeScript compiler will not convert interface to JavaScript. Interfaces are used for type checking only.

// ➤ The interface names follow the PascalCase convention just as classes. Uppercase I letter is prefixed by convention for clean code.

// Let's see an example without and with interface declaration

//* ​● without interface

function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(person));


//* ​ ● with interface

interface IPerson {
    firstName: string;
    lastName: string;
}
function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}
let john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));

// ➤ The getFullName() function accepts any argument that has firstName and lastName string properties. Passed parameter may have other properties, only requirement is it should comply with Person interface.

let jane = {
   firstName: 'Jane',
   middleName: 'K.'
   lastName: 'Doe',
   age: 22
};
let fullName = getFullName(jane);
console.log(fullName); // Jane Doe

// ➤ We can also define properties and methods inside interfaces, but interfaces cannot contain implementation code. The implementation code should be written in implementing class:

interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
}
class Person implements IPerson {
    constructor(public firstName, public lastName){}
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let p1 = new Person("Mark", "Maddison");
console.log(p1.getFullName());

// ➤ A class can implement more than one interface, but can extend only one parent class. Same extend rule applies to interfaces as well.

interface IEditable {
    // edit logic declaration
}
interface IDraggable {
    // drag logic declaration
}
class Item implements IEditable, IDraggable, ISomeOther {
    // implementation code for all of the interfaces declared after implements keyword
}

// ➤ Function Types with Interfaces

// ​ ● In addition to describing an object with properties, interfaces also allow you to describe function types.

// ​ ● To describe a function type, you assign the interface to the function signature that contains the parameter list with types and returned types. For example:

interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;
format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format('hi', true));

// ➤ Extending Interfaces

interface IPerson {
    name: string;
    gender: string;
    readonly SSN: number; // this property cannot be changed after initialization
}
interface IEmployee extends IPerson {
    id: number;
    department?: string; // this property is optional
}
let person1: IEmployee = {
    id:1,
    SSN: 11234567,
    name:"Mark",
    gender:"Male"
    // department is not a mandatory field, we can skip it
}
person1.SSN = 32382322; // compiler error


// ➤ Function Types with Interfaces
// ​ ● In addition to describing an object with properties, interfaces also allow you to describe function types.

// ​ ● To describe a function type, you assign the interface to the function signature that contains the parameter list with types and returned types. For example:

interface StringFormat {
    (str: string, isUpper: boolean): string
}

// interface StringFormat {
//     (str: string, isUpper: boolean): string
// }
// ➤ Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

//? Abstract Class örnek; (Anthony)
// Senaryo: Bir gün canınız sıkıldı ve çocukluğunuzda kalmış tatlı bir aktivite olan lunaparka gidip çarpışan arabaya binmek istediniz. Biletinizi aldınız ve seçtiğiniz arabaya oturup size gelen görevliye bileti teslim ettiniz. Görevli alana baktı ve araçları hareket ettirecek olan elektriği vermek için yeterli sayıda kişinin olduğuna karar verip bir düğmeye bastı. Görevlinin düğmeye basmasıyla çarpışan arabaların hareket etmesi için gerekli olan elektrik akımı verildi ve arabanız çalışır hale geldi. Direksiyonu, gaz pedalını ve freni kullanarak dilediğiniz şekilde aracı kullanmaya başladınız.

// Şimdi gelin bu gerçek hayatın birebir içinden olan senaryodaki soyutlamaları (abstractions) inceleyelim. Böylece yazılım alanında da aslında aynı mantığın kullanıldığını ve soyutlamanın hayatımızı nasıl kolaylaştırdığını daha iyi anlamış olacağız.

// Senaryoda Yer Alan Soyutlamalar(Abstractions): İlk soyutlama örneğimiz biletinizi teslim ettiğiniz görevlinin eğlenceyi başlatmak için bastığı küçük kırmızı düğme 🙂 Görevli o kırmızı düğmeye bastığında bizler sadece eğlencenin başlayacağını biliyoruz, görevli de on dakikalık bir seansa daha start vereceğini biliyor yalnızca. Düğmeye basıldığı anda elektrik devresindeki anahtarın kapanıp akımın başlayacağını ne biz ne de görevli aklının ucundan dahi geçirmiyor. İşte bu tam bir soyutlama örneği. Yalnızca input(düğmeye basmak) ve output(eğlencenin başlaması) değerleriyle ilgileniyoruz. Arka tarafta dönen teknik hadiseleri hiç düşünmeden bize sunulmuş bir düğmeyi kullanarak işimizi görüyoruz.

// Eğer hala bir şeyler oturmadıysa kafanızda bir de çarpışan arabamızdaki soyutlamaya bakalım. Siz arabayı kullanırken direksiyonu gitmek istediğiniz yöne çeviriyor, gaz pedalına basarak ilerliyorsunuz. Gaz pedalına bastığınızdaki motorda oluşan tetiklenmeleri, direksiyonu çevirdiğinizde lastiklerin dönmesini sağlayan mekanizmayı hiç düşünmeden yalnızca iki pedal bir direksiyonla aslında arka planında onlarca aksiyon yatan bir işlevi gerçekleştirmiş oluyorsunuz. Input (gaz/fren pedalları, direksiyon) ve output (arabanın gitmesi) değerlerini bilmek size yetiyor.


//todo, Inheritance
// ➤ Just like object-oriented languages such as Java, C#, C++, and Python, only single inheritance is supported just like any other programming languages. Single inheritance is paradigm that sub/ derived/ child class inherits features from one super/ base/ parent class. Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// ➤ TypeScript classes and interfaces can be extended to create new classes/interfaces with inheritance, using the keyword extends.

//* 🎗️ Note:
//* JavaScript uses prototypal inheritance, not classical inheritance like Java or C#. ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance. TypeScript supports inheritance like ES6.

// ➤ Classes may extend from a base class. A derived class has all the properties and methods of its base class, and also define additional members.

class Animal {
    move() {
      console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base / Super / Parent class method
d.move();
// Derived / Sub / Child class method
d.woof(3);

// ➤ If child class has a constructor, very first statement inside that constructor should be invocation of super(); in order that properly initialize new object with inheritance in mind. TypeScript will warn you if you write any initialization code prior to calling super().

// In the constructor body of a derived class (with extends), the super keyword may appear as a "function call" (super(...args)), which must be called before the this keyword is used, and before the constructor returns. It calls the parent class's constructor and binds the parent class's public fields, after which the derived class's constructor can further access and modify this.

// Source: MDN

// ➤ Interface can extends interfaces or classes as well.

class Person {
    name: string;
}
interface IEmployee extends Person { 
    id: number;
}
let emp: IEmployee = { id: 1, name: "Barry Mitchell" }

// Overriding Methods
// ➤ When a child class defines its own implementation of a method from the parent class, it is called method overriding. TypeScript enforces that a derived class is always a subtype of its base class. For example, here’s a legal way to override a method:

class Base {
  greet() {
    console.log("Hello, world!");
  }
}
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
const d = new Derived();
d.greet();
d.greet("reader");

// ● It’s important that a derived class follow its base class contract. Remember that it’s very common (and always legal!) to refer to a derived class instance through a base class reference:

// Alias the derived instance through a base class reference
const b: Base = d;
// No problem
b.greet();

// ● if derived class didn't follow Base's contract, then your application code would crash!

// ➤ Overriding Example of Cars:
class Car {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    drive(speed:number = 0) {
        console.log(`A ${this.name} is going at ${speed} kph!`);
    }
}


class Mercedes extends Car {
    

    constructor(name: string) {
        super(name);
    }
    
    drive(speed = 200) {
        console.log(`${this.name} engine started`);
        super.drive(speed);
    }

}

class Honda extends Car {
    constructor(name: string) {
        super(name);
    }
    drive(speed = 150) {
        console.log('A Honda started')
        super.drive(speed);
    }
}
let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")
mercObj.drive(); 
// Mercedes-Benz GLA engine started A Mercedes-Benz GLA is going at 200 kph!
hondaObj.drive();
// A Honda started A Honda City is going at 150 kph!
