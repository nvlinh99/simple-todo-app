const controller = require('../controllers/service.controller');

let task = [
    "BTCN04",
    "Study hard", 
    "Graduate",
    "Intern/Fresher"
];
  
let complete = ['BTCN01', 'BTCN02', 'BTCN03'];

module.exports.postAddTask =  function(req, res) {
    let newTask = req.body.newTask;
    task.push(newTask);
    res.redirect("/todo");
};

module.exports.postRemoveTask = function(req, res) {
    let completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exits in the task when checked, then remove it
        task.splice(task.indexOf(completeTask), 1);
    } 
    else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/todo");
};

module.exports.index = function(req, res) {
    const userId = req.session.userId;
    const user = controller.findUserById(userId);
    if(!userId){
        res.redirect('/auth/login');
    }
    res.render('todo/index', {title: 'Todo app', user, task: task, complete: complete});
};