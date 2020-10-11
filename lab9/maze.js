(function maze() {
    "use strict";
    var crossed = 0;
    var flag = false;

    $(document).ready(function () {
        $(".boundary").mouseover(function () {
            $(".boundary").addClass("youlose");
            crossed++;
        });
        
        $("#status").mouseover(function () {
            // alert("Upper");
            if (flag)
                crossed++;
        });

        $("#bottom").mouseover(function () {
            // alert("Lower");
            if (flag)
                crossed++;
        });
 
        $("#end").mouseover(function () {
            flag = false;
            if (crossed == 0) {
                $("#status").text("you win");
            }
            else {
                $("#status").text("you lose");
            }
           
        });
        $("#start").click(function () {
            $(".boundary").removeClass("youlose");
            $("#status").text("Game is Started");
            crossed = 0;
            flag = true;
        });
    });
})();