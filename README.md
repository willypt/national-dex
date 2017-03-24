# National Dex

### Demo URL
* [Heroku Link](https://national-pokedex-wpt.herokuapp.com/index.html)
### What's in it?

* A simple React App which hits [PokeAPI GraphiQL](https://pokeapi-graphiql.herokuapp.com/) and serve it as tiles.
* Supports three screen sizes. (Mobiles the best :grinning:)

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:
* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Notes on PokeAPI GraphiQL
* Sometimes the GraphQL server can't handle all the request and throws 503. It's normal. 
* Wait for some minutes then refresh the page / click Load More.

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
