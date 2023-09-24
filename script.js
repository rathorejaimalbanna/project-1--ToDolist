// geting all elements by id and class Names

const tasklist = document.getElementById('tasklist');
const completedlist = document.getElementById('completedlist');
const todoinput = document.getElementById('todoinput');

// Adding task to list using Button

function addtask()
{
    if(todoinput.value==='')
    {
        alert("add task first!!")
    }
    else{
        let newtask = document.createElement('li');
        newtask.innerText = todoinput.value;
        span = document.createElement('span');
        span.innerText = '\u00d7'
        newtask.appendChild(span)
        tasklist.appendChild(newtask)
        todoinput.value = '';
    };
    saveprogress1();
    
}

// Moving completed tasks to Completed List
tasklist.addEventListener('click',
function(a){
    if(a.target.tagName === 'SPAN')
    {
        a.target.parentElement.remove()
    }
    else if(a.target.tagName =='LI')
    {
        completedlist.appendChild(a.target);
        
    };
    saveprogress1();
    saveprogress2();
    
}
)


// Moving incomplete tasks back to Task List
completedlist.addEventListener('click',
function(a){
    if(a.target.tagName === 'SPAN')
    {
        a.target.parentElement.remove()
    }
    else if(a.target.tagName =='LI')
    {
        tasklist.appendChild(a.target);
        
    };
    saveprogress1();
    saveprogress2();
    
}
)


// Saving our progress
function saveprogress1()
{
localStorage.setItem("data1",tasklist.innerHTML);
}

function saveprogress2()
{
localStorage.setItem("data2",completedlist.innerHTML);
}

function showprogress1()
{
    tasklist.innerHTML = localStorage.getItem("data1")
};

function showprogress2()
{
    completedlist.innerHTML = localStorage.getItem("data2")
};

showprogress1();
showprogress2();