//? querySelector() and querySelectorAll() methods;
//! seçilenler node list olarak geri döner, diğerlerinde HTML collection

//! 1) Universal selector
let element = document.querySelector("*");
// select the first element in the document:

let elements = document.querySelectorAll("*");
// And this selects all elements in the document:


//! 2) Type selector
// finds the first h1 element in the document:
let firstHeading = document.querySelector("h1");

// finds all h2 elements:
let heading2 = document.querySelectorAll("h2");


//! 3) Class selector
// the first element with the menu-item class:
let note = document.querySelector(".menu-item");

// finds all elements with the menu class:
let notes = document.querySelectorAll(".menu-item");


//! 4) ID Selector
// finds the first element with the id #logo:
let logo = document.querySelector("#logo");

//* Since the id should be unique in the document, the querySelectorAll() is not relevant.

//! 5) Attribute selector
/*  attribute selector syntaxes:
[attribute]
[attribute=value]
[attribute~=value]
[attribute|=value]
[attribute^=value]
[attribute$=value]
[attribute*$*=value]  */

// finds the first element with the attribute [autoplay] with any value:
let autoplay = document.querySelector("[autoplay]");

// finds all elements that have [autoplay] attribute with any value:
let autoplays = document.querySelectorAll("[autoplay]");


//! Grouping selectors
// The following example finds all <div> and <p> elements:
let elements2 = document.querySelectorAll("div, p");


//? Combinators;
//! 1) descendant combinator
// To find descendants of a node, you use the space ( ) descendant combinator syntax:  selector selector

// For example p a will match all <a> elements inside the p element:
let links1 = document.querySelector('p a');


//! 2) Child combinator
// The > child combinator finds all elements that are direct children of the first element: selector > selector
// The following example finds all li elements that are directly inside a <ul> element:
let listItems1 = document.querySelectorAll('ul > li');

// To select all li elements that are directly inside a <ul> element with the class nav:
let listItems2 = document.querySelectorAll('ul.nav > li');


//! 3) General sibling combinator
// The ~ combinator selects siblings that share the same parent: selector ~ selector
// For example, p ~ a will match all <a> elements that follow the p element, immediately or not:
let links2 = document.querySelectorAll('p ~ a');


//! 4) Adjacent sibling combinator
// The + adjacent sibling combinator selects adjacent siblings: selector + selector
// For example, h1 + a matches all elements that directly follow an h1:
let links3 = document.querySelectorAll('h1 + a');

// And select the first <a> that directly follows an h1:
let links4 = document.querySelector('h1 + a');


//? Pseudo
//! 1) Pseudo-classes
// The :: pseudo matches elements based on their states: element:state
// For example, the li:nth-child(2) selects the second <li> element in a list:
let listItem = document.querySelectorAll('li:nth-child(2)');

//! 2) Pseudo-elements
// The :: represent entities that are not included in the document.
// For example, p::first-line matches the first-line of all div elements:
let links5 = document.querySelector('p::first-line');

//todo, Summary
// The querySelector() finds the first element that matches a CSS selector or a group of CSS selectors.
// The querySelectorAll() finds all elements that match a CSS selector or a group of CSS selectors.
// A CSS selector defines elements to which a CSS rule applies.


//? Traversing Elements
//! Get the Parent Element
let parent = oneNodeInPage.parentNode;

//! Getting Siblings next
let nextSibling = currentNode.nextElementSibling;

//! Getting Siblings previous
let prevSibling = currentNode.previousElementSibling;


//! Getting Child Elements first child
// let content = document.getElementById('menu');
// let firstChild = content.firstChild.nodeName;
// console.log(firstChild);

// The Console window show #text because a text node is inserted to maintain the whitespace between the openning <ul> and <li> tags. This whitespace creates a #text node.

// Note that any whitespace such as a single space, multiple spaces, returns, and tabs will create a #text node. To remove the #text node, you can remove the whitespaces.

// let content = document.getElementById('menu');
// console.log(content.firstElementChild);


//! Getting Child Elements last child
// let lastChild = parentElement.lastChild;
// In case the parentElement does not have any child element, the lastChild returns null. Similar to the the firstChild property, the lastChild property returns the first element node, text node, or comment node. If you want to select only the last child element with the element node type, you use the lastElementChild property:

// let menu = document.getElementById('menu');
// console.log(main.lastElementChild);


//! Getting Child Elements all children
// live NodeList of child elements of a specified element, you use the childNodes property:

// let menu = document.getElementById('menu');
// let children = menu.children;
// console.log(children);


