# instagrab-node
An application for an application – written in [Node.js](https://nodejs.org/en/) and [React](https://facebook.github.io/react/).

## How to use

**Right click** on the map to grab the latest instagram posts near this location. Like or Unlike a post by **clicking on the marker**. Please note the instagram client runs in `sandbox-mode`, thus it has a [limited data-set](https://www.instagram.com/developer/sandbox/).

## Quickstart

```
TBD
1. Provide a valid access-token for instagram
2. checkout project
3. npm install
4. browserify && watchify -g
5. npm start --> developing and hot compiling
6. npm build --> just building
7. open index.html
```

## Prerequisites

```
TBD
```

## Notes

* it makes use of `ECMAScript 2016`
* JSX syntax is converted with [Babel](https://babeljs.io)
* build your bundle with `browserify`: `browserify -t [ babelify ] main.js -o build/bundle.js`
  * if `browserify` is not installed, use `npm install browserify -g`
  * see [http://browserify.org] for detailed information
* Bootstrap simpliy integrated via BootstrapCDN
* it's highly recommended to use [React Developer Tools](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)

```
Note: By default, React will be in development mode, which is slower, and not advised for production. To use React in production mode, set the environment variable NODE_ENV to production (using envify or webpack's DefinePlugin).
```

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
