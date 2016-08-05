var curdata = {"vote":0,"cake1Sum":0,"cake2Sum":0,"totalTickets":11,"leftTickets":11,"winner": 0};

$(document).ready(function(){

  $("#click-me-button" ).click(function(){
    curdata.vote = 1
    $.ajax({
        url: 'http://192.168.13.117:9000/pineApple1',
        type: 'POST',
        data: JSON.stringify(curdata),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
            curdata = msg;
            document.getElementById("myModalLabel").innerHTML = '您已將票投給1號，剩餘票數: '+ msg.leftTickets;
        }
  });
  });

  $("#click-me-button2" ).click(function() {
    curdata.vote = 2
    $.ajax({
        url: 'http://192.168.13.117:9000/pineApple2',
        type: 'POST',
        data: JSON.stringify(curdata),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
            curdata = msg;
            document.getElementById("myModalLabel2").innerHTML = '您已將票投給2號，剩餘票數: '+ msg.leftTickets;
        }
      });
  });

  $("#result" ).click(function() {
    $.ajax({
          url: 'http://192.168.13.117:9000/pineAppleSum',
          type: 'POST',
          data: JSON.stringify(curdata),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          async: false,
          success: function(msg) {
            if(msg.leftTickets!=0){
                document.getElementById("resultOutput").innerHTML = "票還未開完，請再稍等。";
            }else if(msg.winner===1){
                document.getElementById("resultOutput").innerHTML = "Hans";
                document.getElementById("resultOutputPic").innerHTML = "";
                  var img = new Image();
                  var div = document.getElementById('resultOutputPic');
                  img.style.height = '50%';
                  img.style.width = '50%';
                  img.onload = function() {
                    div.appendChild(img);
                  };
                  img.src = './pic/hans2.png';
            }else{
              document.getElementById("resultOutput").innerHTML = "Andy";
              document.getElementById("resultOutputPic").innerHTML = "";
                var img = new Image();
                var div = document.getElementById('resultOutputPic');
                img.style.height = '50%';
                img.style.width = '50%';
                img.onload = function() {
                  div.appendChild(img);
                };
                img.src = './pic/yd2.png';
            }
          }
        });
  });

});
