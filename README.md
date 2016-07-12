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

1. npm and node.js installed
2. browserify installed: `npm install browserify -g`
3. watchify installed: `npm install watchify -g`


## Screen

![Alt text](/public/images/instagrab-screenshot.png?raw=true "Optional Title")


## Components

```
- App
-- Map
-- Navigation
--- SearchBar
--- *
```

## Test

```
TBD
```

## Outlook

* implement tests
* load Google Maps JavaScript asynchronously via Require.js
* implement SEO
* integrate SASS


## Instagram Policy / API Restrictions

Since November 17th 2015, Instagram changed their API. Now users cannot use the full scope as before, an access-token is required for every request. Clients consum the instagram API in sandbox-mode, what means they can only see their own content and content up to 10 sandbox users.

```
{
  "meta": {
    "code": 200
  },
  "data": [{
    "attribution": null,
    "tags": [],
    "type": "image",
    "location": {
      "latitude": 52.531944444444,
      "name": "Volkspark am Weinberg",
      "longitude": 13.401388888889,
      "id": 894121023
    },
    "comments": {
      "count": 0
    },
    "filter": "Rise",
    "created_time": "1467891110",
    "link": "https://www.instagram.com/p/BHjwV4WD2Y8uWUFf3d3Xhs1vWC8KX4Ts_lb4tk0/",
    "likes": {
      "count": 2
    },
    "images": {
      "low_resolution": {
        "url": "https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/13557299_554757927982495_159795615_n.jpg?ig_cache_key=MTI4OTA4NjUyODE5OTI4ODM4MA%3D%3D.2",
        "width": 320,
        "height": 320
      },
      "thumbnail": {
        "url": "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/13557299_554757927982495_159795615_n.jpg?ig_cache_key=MTI4OTA4NjUyODE5OTI4ODM4MA%3D%3D.2",
        "width": 150,
        "height": 150
      },
      "standard_resolution": {
        "url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/13557299_554757927982495_159795615_n.jpg?ig_cache_key=MTI4OTA4NjUyODE5OTI4ODM4MA%3D%3D.2",
        "width": 640,
        "height": 640
      }
    },
    "users_in_photo": [],
    "caption": null,
    "user_has_liked": false,
    "id": "1289086528199288380_50913539",
    "user": {
      "username": "svenson.s",
      "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/10632406_867893236578271_140929537_a.jpg",
      "id": "50913539",
      "full_name": ""
    }
  }]
}
```
