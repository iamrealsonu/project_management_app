// creating array of objects
var projectListObject = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

// adding dynamic cards
var boardList = [];
function showProject(listId){
    projectListObject.forEach(function(value,index){
        var template = '<div class ="project-card">'+
        value.name+ 
        '<ul>'+
            '<li class="taskList">Task one</li>'+
            '<li class="taskList">Task two</li>'+
        '</ul>'+
        '</div>';
       
            document.getElementById(listId).innerHTML += template;
    })
}
// creating add and remove functions menu block
const menuBtn=document.getElementsByClassName('menu')[0];
const showMenu=document.getElementsByClassName('menu-block')[0];
const closeBtn=document.getElementsByClassName('close')[0];

menuBtn.addEventListener('click', () => {
    showMenu.style.display = 'block';
});



closeBtn.addEventListener('click',()=>{
    showMenu.style.display='none';
})



// creating function to remove card
function removeCard(id){
    document.getElementById('board_'+idName).innerHTML='';
}

var idName = 0;

// dynamicaly added full board part
function addBoard(id){
    if (id.value.length < 5) {
        alert("Board name can't be less than five characters!");
        return;
      } else {
    idName++;
    var listId = 'projectList_'+idName;
    var boardId = 'board_'+idName;
    var templateBlock = '<section class ="board-block" id = "'+boardId+'"style="display:none">'+
    '<div class="board-name">'+id.value+'<button id ="removeBoards" onclick="removeCard('+'board_'+idName+')">Remove Card</button></div>'+
    '<div class="project-block" id ="'+listId+'">'+
        
    '</div>'+
    '</section>';
    boardList.push({
        list_id: listId,
        board_id: boardId,
        templateNew: templateBlock
      });
     
    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProject(listId);
   
    document.getElementById('menuList').innerHTML +="<li onClick=loadMenu('"+boardId+"')>"+id.value+"<hr></li>";
    alert("Board name " + id.value + " added!");
    id.value=id.defaultValue;
    
      }
}
// creagting a function to load board cards and button to remove
function loadMenu(element){
    for(var i=0; i<boardList.length;i++){        
        if(boardList[i].board_id==element){            
            document.getElementById(boardList[i].board_id).style.display = 'block';
        } else {
            document.getElementById(boardList[i].board_id).style.display = 'none';
        }    
    }
}