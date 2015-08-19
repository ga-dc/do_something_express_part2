var tasks_mod = require("./task.js");
var lists = [ {id: 1, body: 'list1', tasks: [ tasks_mod.tasks[0], tasks_mod.tasks[2] ] },
              {id: 2, body: 'list2', tasks: [], completed: false},
              {id: 3, body: 'list3', tasks: [], completed: false },
              {id: 4, body: 'list4', tasks: [], completed: false},
              {id: 5, body: 'list5', tasks: [], completed: false}, ]

module.exports = {

  all: function() {
    return lists
  },
  find: function(id) {
    for( var i = 0; i < lists.length; i++ ) {
      if( lists[i].id == id ) {
        return lists[i]
      }
    }
  },
  create: function(body) {
    lists.push(body)
    return body
  },
  delete: function(id) {
    for( var i = 0; i < lists.length; i++ ) {
      if ( lists[i].id == id ) {
        lists = lists.splice(i, 1)
        return
      }
    }
  }

}
