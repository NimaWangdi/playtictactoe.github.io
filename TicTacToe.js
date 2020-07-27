$(document).ready(function(){
    var score = 0;
    $('#score').text("Score: " + score);
    var countClick = 0;
    function check(w, x, y, z){
             if($('#' + w).text() == "X" && $('#' + x).text() == "X" && $('#' + y).text() == "X" && $('#' + z).text() == "X"){
                $('#' + w).css("border", "solid red 10px");
                $('#' + x).css("border", "solid red 10px");
                $('#' + y).css("border", "solid red 10px");
                $('#' + z).css("border", "solid red 10px");
                $('#table').animate({opacity:'0.4'},"slow");
                $('#p').html("<div id='msg'>Game Over!</div>");
                $('#msg').animate({fontSize:'5em'},"slow");
            }
        else if($('#' + w).text() == "O" && $('#' + x).text() == "O" && $('#' + y).text() == "O" && $('#' + z).text() == "O"){
                $('#' + w).css("border", "solid red 10px");
                $('#' + x).css("border", "solid red 10px");
                $('#' + y).css("border", "solid red 10px");
                $('#' + z).css("border", "solid red 10px");
                $('#table').animate({opacity:'0.4'},"slow");
                $('#p').html("Game Over!");
                $('#p').animate({fontSize:'5em'},"slow");
            }
        }

    $('.square').click(function(){
    countClick += 1;
        
        if(countClick == 1){
            $(this).text("X");
            check(0, 1, 2, 3);
            check(4, 5, 6, 7);
            check(8, 9, 10, 11);
            check(12, 13, 14, 15);
            check(0, 4, 8, 12);
            check(1, 5, 9, 13);
            check(2, 6, 10, 14);
            check(3, 7, 11, 15);
            check(0, 5, 10, 15);
            check(3, 6, 9, 12);
            }
        if(countClick == 2){
            $(this).text("O");
            countClick = 0;
            check(0, 1, 2, 3);
            check(4, 5, 6, 7);
            check(8, 9, 10, 11);
            check(12, 13, 14, 15);
            check(0, 4, 8, 12);
            check(1, 5, 9, 13);
            check(2, 6, 10, 14);
            check(3, 7, 11, 15);
            check(0, 5, 10, 15);
            check(3, 6, 9, 12);
        }
      
    });
       
    $('#restart').click(function(){
        $('#score').text("Score: " + 0);
        $('.square').text(" ");
        $('#table').animate({opacity:'initial'},"fast");
        $('#msg').remove();
        $('.square').css("border", "none");
        countClick = 0;
    });
});

