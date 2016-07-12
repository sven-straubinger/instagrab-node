# instagrab-node
An application for an application – written in [Node.js](https://nodejs.org/en/) and [React](https://facebook.github.io/react/).

## How to use

* **Right click** on the map to grab the latest instagram posts near this location.
* Like or Unlike a post by **clicking on the marker**.
* Please note the instagram client runs in `sandbox-mode`, which results in a limited result-set of the sandbox-user. [Learn more about this restriction](https://www.instagram.com/developer/sandbox/).
* Please note: the app works best with Safari due `Access-Control-Allow-Origin` issues in other browsers.


## Quickstart

1. checkout project `git clone https://github.com/sven-straubinger/instagrab-node.git instagrab-node`
2. run `npm install`
3. run `npm start`
4. open index.html


## Prerequisites

1. npm and Node.js installed
2. browserify globally installed: `npm install browserify -g`
3. watchify globally installed: `npm install watchify -g`


## Screen

![Alt text](/public/images/instagrab-screenshot.png?raw=true "Optional Title")


## Component Structure

```
App: (Glues everything together; takes care of API calls)
|
|-- Header: (Contains navigation)
|-- Indicator: (Is shown, when an an API call is made)
|-- Map: (Contains marker and map-events logic)
```


## Instagram Policy / API Restrictions

Since November 17th 2015, Instagram changed their API. Now users cannot use the full scope as before, an access-token is required for every request. Clients consum the instagram API in sandbox-mode, what means they can only see their own content and content up to 10 sandbox users.


## Outlook

* implement tests
* load Google Maps JavaScript and Bootstrap via `Require.js`
* integrate SASS
