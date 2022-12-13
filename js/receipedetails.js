    var receipeDetailsData = null;
    
  

    
    function populateCell1(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-1").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-1-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){
        var isLastElement = index == receipeDetailsData.length -1;
        
        if(!isLastElement) {
          receipeFacts += value + '<br>';
        }
        else {
          receipeFacts += value;
        }
      });

      $("#receipe-1-facts").append(receipeFacts);
    }


    function populateCell2(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-2").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-2-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

          receipeFacts += value + '<br>';
        
      });

      receipeFacts += '<br>';

      $("#receipe-2-facts").append(receipeFacts);
    }


    function populateCell3(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-3").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-3-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){
        
        
        
          receipeFacts += value + '<br>';
       
      });

      $("#receipe-3-facts").append(receipeFacts);
    }

    function populateCell4(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-4").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-4-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

          receipeFacts += value + '<br>';
       
      });

      $("#receipe-4-facts").append(receipeFacts);
    }

    function populateCell5(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-5").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-5-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-5-facts").append(receipeFacts);
    }

    function populateCell6(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-6").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-6-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-6-facts").append(receipeFacts);
    }
    
    function populateCell7(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-7").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-7-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-7-facts").append(receipeFacts);
    }

    function populateCell8(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-8").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-8-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-8-facts").append(receipeFacts);
    }
    
    function populateCell9(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-9").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-9-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-9-facts").append(receipeFacts);
    }


    function populateCell10(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-10").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-10-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-10-facts").append(receipeFacts);
    }


    function populateCell11(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-11").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-11-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-11-facts").append(receipeFacts);
    }

    function populateCell12(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-12").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-12-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-12-facts").append(receipeFacts);
    }

    function populateCell13(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-13").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-13-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-13-facts").append(receipeFacts);
    }

    function populateCell14(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-14").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-14-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-14-facts").append(receipeFacts);
    }

    function populateCell15(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-15").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-15-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-15-facts").append(receipeFacts);
    }

    function populateCell16(receipeDetailsData){
      var receipeFacts = '';

      $("#receipe-image-16").css("background-image", "url('images/" + receipeDetailsData[0].large_image +"')");
      $("#receipe-16-title").text(receipeDetailsData[0].title);

      $.each(receipeDetailsData[0].Facts,function(index,value){

        receipeFacts += value + '<br>';
     
      });

      $("#receipe-16-facts").append(receipeFacts);
    }


    function populateReceipeDetails(receipeDetailsData){
        $("#modal-title").text(receipeDetailsData[0].title);

        $("#modal-ingredients-list").empty();
        $.each(receipeDetailsData[0].Ingredients,function(key,value){
          $("#modal-ingredients-list").append('<li>'+ value + '</li>');
        });

        $("#modal-instructions-list").empty();
        $.each(receipeDetailsData[0].Instructions,function(key,value){
          $("#modal-instructions-list").append('<li>'+ value + '</li>');
        });

    }