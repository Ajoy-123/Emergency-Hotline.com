

    1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Answer: getElementById:: It returns a single element with the given id. It's always unique. 
    example: const element = document.getElementById("idName").
    getElementsByClassName:: It returns an HTML Collection (array- like object) of all elements with the class. 
    example: const element = document.getElementByClassName("className").
     querySelector:: Returns first element that matches the css selector.
     const element = document.querySelector(".className").
     querySelectorAll:: Returns a nodelist of all elements that matches the css selector.
    example:: const element = document.querySelectorAll(".className").

    2. How do you create and insert a new element into the DOM?
    Answer: const newDiv = document.createElement("div");
    newDiv.innerText = "Hello Programmers";
    document.body.appendChild(newDiv)

    3. What is Event Bubbling and how does it work?
    Answer: Event bubbling means when an event happens on a child element, it first runs on that child and then moves upwar to it's parent.

    4. What is Event Delegation in JavaScript? Why is it useful?
    Answer: Event delegation is when you put a single event listener on a parent element to handle events on it's children.
    It's useful because::
    a. I don't need to add listeners to every child.
    b. It also works for dynamically added child elements.

    5. What is the difference between preventDefault() and stopPropagation() methods?
    Answer: preventDefault(): Prevents the default  browser behavior.
    stopPropagation(): Stops the event from bubbling or capturing further up the DOM. 

