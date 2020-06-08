$(".hamburger .fas").click(function(){
    $(".wrapper").addClass("active")
  })
  
  $(".wrapper .sidebar .close").click(function(){
    $(".wrapper").removeClass("active")
  })

//   function currentDate(){
//     var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = dd + '/' + mm + '/' + yyyy;
// return today;
//   }

//   alert(currentDate());