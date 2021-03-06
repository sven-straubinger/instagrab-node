# instagrab-node
An application for an application – written in [Node.js](https://nodejs.org/en/) and [React](https://facebook.github.io/react/).

## How to use instagrab

* **Right click** on the map to grab the latest instagram posts near this location.
* Like or Unlike a post by **clicking on the marker**.
* Please note that the instagram client runs in `sandbox-mode`, which results in a limited result-set of posts – concretely  only the posts of the registered sandbox-users. [Learn more about this restriction](https://www.instagram.com/developer/sandbox/).
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

After Nov. 17 2015 Instagram made some changes to their API. Apps created on or after Nov 17, 2015 will start in Sandbox Mode and function on newly updated API rate-limits and behaviors:

```
Data is restricted to sandbox users and the 20 most recent media from each sandbox user.
```

[...]

```
As another example, let's consider an endpoint that returns a list of media: /tags/{tag-name}/media/recent. The response returned by this endpoint will contain only media with the given tag, as expected. But instead of returning media from any public Instagram user, it will return only media that belongs to your sandbox users, restricted to the last 20 for each user.
```

https://www.instagram.com/developer/sandbox/

## Outlook

* implement tests
* setup express.js and instagram-node
* load Google Maps JavaScript and Bootstrap via `Require.js`
* integrate `SASS`
* mobile optimizations
