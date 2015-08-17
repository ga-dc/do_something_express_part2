# Do Something (Part Two)

Tonights homework is an extension of last nights'. - https://github.com/ga-dc/do_something_express_part1

Tonight please:

- Organize your files w/r/t the MVC paradigm:

```
app/
  - config/
    - database.js  
  - models/
    - list.js
    - task.js
  - controllers/
    - listsController.js
    - tasksController.js
```

In the main application, require all of the other files with `require()` and `module.exports`

## And Then

Create an index.html file in `app/views/index.html`

Serve this file with:

```js
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});
```

Use handlebars to "bootstrap" the application on the first page load. i.e. Handlebars 
loads data into the HTML.