### Question 1: What are the latest CSS layout methods?

Since CSS is a living standard, it depends how `latest` is interpreted:
* the latest CSS **drafts** from the W3C can be found here:  http://www.w3.org/Style/CSS/current-work
* the latest CSS **publications** from the W3C contains CSS3 features like `media queries`, `keyframe animations` or `transforms` and can be found here: http://www.w3.org/TR/css-2010/

---

### Question 2: What are the CSS methodologies you use to structure your CSS and why is this important to you?

I am used to the OOCSS methodology due my work with bootstrap. For me, it feels most natural, compared to other known methodologies like BEM, where I have personally bad experince, especially in terms of readability.

Furthermore I focus on the **DRY** approach: Redundant CSS rules (on purpose or accidentally) will lead to less flexibility when it comes to change requests or bug fixes. I aim to apply a CSS rule to most sections of a website as possible (e.g. style definitions of continuous text). It's easier to add exceptions once they are really needed than to remove or maintain complex CSS structures.

Last but not least, **consistency** helps me (and everyone else, who works with the code) to keep a clear head and overview.

---

### Question 3: What are your thoughts on nesting using a CSS pre-processor?

Nesting helps, to write maintainable and clean CSS rules with focus on readability and less complexity by avoiding redundancy. But one has to be careful about the depth of nesting: a high level of nested structures genereates larger CSS files. This increases download time as well as rendering/painting within the browser. Furthermore, a high level of nested structures contradicts the prinicple of global and universal CSS rules.

---

### Question 4: What is your preferred toolset when building a React app?
* Node
* SCM like Git
* npm with Browserify / Watchify / Babelify for JSX
* Sublime3
* Google Chrome with React Developer Tools
* iTerm2 
* Spotify

---

### Question 6: What tools or libraries do you use when testing react components?

`require('react-addons-test-utils')` – but I honestly did not use it yet.

---

### Question 7: What is your experience with stateless (functional) components, and when would you either use them, or not use them?

Semantic
They are pure functional transforms of their input, with zero boilerplate. However, you may still specify .propTypes and .defaultProps by setting them as properties on the function, just as you would set them on an ES6 class.

---

### Question 9: What would be a perfect `<use />` case? Please reply with code example.

```
var use = React.createClass({
  render: function(){
    return (
    
    )
  }
});
```

---

### Question 10
Please build an application that uses the Google Maps API, and Instagram’s Search API to grab and display the latest pictures by a location defined on the map, and allow the user to Like any number of those photos. Please make any assumptions on your own and feel free to simplify or make the solution more complex. Please write your assumptions if taken.

```
git clone https://github.com/sven-straubinger/instagrab-node.git instagrab-node
```
