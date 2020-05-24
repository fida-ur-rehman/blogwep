$(".hamburger .fas").click(function(){
    $(".wrapper").addClass("active")
  })
  
  $(".wrapper .sidebar .close").click(function(){
    $(".wrapper").removeClass("active")
  })