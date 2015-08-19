var tasks = [
  {id: 1, body:"my first todo",completed: false},
  {id: 2, body:"my second todo",completed: true},
  {id: 3, body:"my third todo",completed: false},
];

module.exports = {
  all:function(){
    return tasks;
  }

}
