


var toDoData = [];

$(document).ready(function(){
  toDoPage.init();
});
var toDoPage= {
//SUBMIT and DISPLAY DATA METHOD
  init : function(){
    toDoPage.events();
  },
  events:function(){
    var test= $('.container').on('keypress', '.initialInput', function(){
    if (event.which === 13)
    {
      event.preventDefault();
        var toDoInfo = {
          toDoName: $('input[name="ToDo"]').val(),
          toDoID: toDoData.length,
          toDoStatus: ""
        };
        toDoData.push(toDoInfo);
        var inputData= $('input').val("");
        //TEMPLATE PUSH
        var toDoTemplate = _.template($('#toDoTmpl').html());
        var toDoHTML = "";
        _.each(toDoData, function (el){
        toDoHTML += toDoTemplate(el);
        });
        $('.toDoPlacer').html(toDoHTML);
      }
    });
    $('.newToDo').on("click",'fuckingclick', function(){
        event.preventDefault();
        console.log(event.target);
        var toDoStat = $('.editInput').attr('rel');
        if (toDoStat === "active") {
          $('i').removeClass('fa fa-circle-thin');
          $('i').addClass('fa fa-check');
          $('.editInput').css('text-decoration', 'line-through');
        }

    });
  },
};
