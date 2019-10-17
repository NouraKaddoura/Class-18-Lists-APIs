$(function(){
    var config = {
        start: function(){
            console.log("Vroom!");
            $('#draggable').removeClass('stop');
            $('#draggable').addClass('drive');
        },
        stop: function(){
            console.log("SREECH");
            $('#draggable').removeClass('drive');
            $('#draggable').addClass('stop');
        }
    };
    $("#draggable").draggable(config);


    $("#droppable").droppable({
        drop: function(){
            $('#droppable').html("FINISH!");
        }
    })
});
