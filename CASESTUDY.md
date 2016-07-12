### Question 1: What are the latest CSS layout methods?

Depending on, how `latest` is interpreted:
* the latest CSS **drafts** from the W3C can be found here:  http://www.w3.org/Style/CSS/current-work
* the latest CSS **releases** from the W3C ... TBD
* the latest **widely supported** CSS features (by all major browsers) ... TBD

### Question 2: What are the CSS methodologies you use to structure your CSS and why is this important to you?

### Question 3: What are your thoughts on nesting using a CSS pre-processor?

Nesting helps, to write maintainable and clean CSS rules with focus on readability and less complexity by avoiding redundancy. But one has to be careful about the depth of nesting: a high level of nested structures genereates larger CSS files. This increases download time as well as rendering/painting within the browser. Furthermore, a high level of nested structures contradicts the prinicple of global and universal CSS rules.

### Question 4: What is your preferred toolset when building a React app?
* Node
* npm with Browserify / Watchify / Babelify for JSX
* Sublime3
* Google Chrome with React Developer Tools
* iTerm2 

### Question 5: What is your favorite ECMA Script 2015(+) feature and why?

### Question 6: What tools or libraries do you use when testing react components?

### Question 7: What is your experience with stateless (functional) components, and when would you either use them, or not use them?

### Question 8: How important is semantic markup when your pages are built in React Components?

### Question 9: What would be a perfect `<use />` case? Please reply with code example.

### Question 10
Please build an application that uses the Google Maps API, and Instagram’s Search API to grab and display the latest pictures by a location defined on the map, and allow the user to Like any number of those photos. Please make any assumptions on your own and feel free to simplify or make the solution more complex. Please write your assumptions if taken.

```
git clone https://github.com/sven-straubinger/instagrab-node.git instagrab-node
```
