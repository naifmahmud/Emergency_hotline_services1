Answer the following questions clearly:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   getElementById--> can take a signle element at a time(Because #id name can't be multiple),
   getElementsByClassName -->can take multiple element at a time(becasuse .className can be as much as possible)
   querySelector--> search by (id,class,attributes,etc) and return the first matching element
   querySelectorAll-->search by (id,class,attributes,etc) and but returna the matching element as much as possible
2. How do you **create and insert a new element into the DOM**?
   create---> const newDiv = document.createElement("div");
   insert -->  historyContainer.append(newDiv); //insert a new div in historyContainer
   
3. What is **Event Bubbling** and how does it work?
Event Bubbling---> Suppose we are finding somethig.With event bubling we can find things very easily by interacting through a button. We have a target element then we bubbles up through its parentNodes.
 
4. What is **Event Delegation** in JavaScript? Why is it useful?
   Event Delegation--> Attach one listener to a parent instead of many choldren.Very much helpful for evnt handle dynamically.
    
5. What is the difference between **preventDefault() and stopPropagation()** methods?


