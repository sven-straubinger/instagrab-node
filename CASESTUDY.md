### Question 1: What are the latest CSS layout methods?

Depending on, how `latest` is interpreted:
* the latest CSS **drafts** from the W3C can be found here:  http://www.w3.org/Style/CSS/current-work
* the latest CSS **releases** from the W3C ... TBD
* the latest **widely supported** CSS features (by all major browsers) ... TBD

---

### Question 2: What are the CSS methodologies you use to structure your CSS and why is this important to you?

I mainly focus on the DRY methodology: Usually, one or a couple CSS rules should target one purpose. If there are more CSS rules needed. Focus on generic styles, that can be easily reused and **changed** all over the website.

Furthermore, the naming focuses on the purpose of the rule, not on the concrete characteristics the rule describes. For example, I would prefer naming a `div` CSS-class`info-box` instead of `top-red-box`, since the purpose will mostly stay the same while the visual design will change more easily.

Last but not least, consistency helps everyone, who has to work on the same code base. 

---

### Question 3: What are your thoughts on nesting using a CSS pre-processor?

Nesting helps, to write maintainable and clean CSS rules with focus on readability and less complexity by avoiding redundancy. But one has to be careful about the depth of nesting: a high level of nested structures genereates larger CSS files. This increases download time as well as rendering/painting within the browser. Furthermore, a high level of nested structures contradicts the prinicple of global and universal CSS rules.

---

### Question 4: What is your preferred toolset when building a React app?
* Node
* npm with Browserify / Watchify / Babelify for JSX
* Sublime3
* Google Chrome with React Developer Tools
* iTerm2 
* Spotify

---

### Question 6: What tools or libraries do you use when testing react components?

`require('react-addons-test-utils')` – but honestly never used it.

---

### Question 7: What is your experience with stateless (functional) components, and when would you either use them, or not use them?

Semantic
They are pure functional transforms of their input, with zero boilerplate. However, you may still specify .propTypes and .defaultProps by setting them as properties on the function, just as you would set them on an ES6 class.

---

### Question 9: What would be a perfect `<use />` case? Please reply with code example.

var use = React.createClass({
  render: function(){
    return (
    
    )
  }
});

---

### Question 10
Please build an application that uses the Google Maps API, and Instagram’s Search API to grab and display the latest pictures by a location defined on the map, and allow the user to Like any number of those photos. Please make any assumptions on your own and feel free to simplify or make the solution more complex. Please write your assumptions if taken.

```
git clone https://github.com/sven-straubinger/instagrab-node.git instagrab-node
```
