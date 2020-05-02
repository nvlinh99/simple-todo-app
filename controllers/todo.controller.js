const controller = require('../controllers/service.controller');

// let task = [
//     "BTCN04",
//     "Study hard", 
//     "Graduate",
//     "Intern/Fresher"
// ];
  
// let complete = ['BTCN01', 'BTCN02', 'BTCN03'];



module.exports.postAddTask =  function(req, res) {
    let task = req.session.task;
    let newTask = req.body.newTask;
    task.push(newTask);
    res.redirect("/todo");
};

module.exports.postRemoveTask = function(req, res) {
    let complete = req.session.complete;
    let task = req.session.task;
    let completeTask = req.body.check;

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
    let task = req.session.task;
    let complete = req.session.complete;
    const user = controller.findUserById(userId);
    if(!userId){
        res.redirect('/auth/login');
    }
    res.render('todo/index', {title: 'Todo app', user, task: task, complete: complete});
};