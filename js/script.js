$(document).ready(function(){

    $('button').hide()

    $('#Option1').show();
    $('#Option2').show();

     $( "#Option1" ).click(function() {
      $('video').attr('src', 'video/othervideo.mp4');
      $('#Main p').text('Babette decides to take a walk and she arrives at a lake.  Should she stop to swim? Or should she continue walking on the path?');
      $('#Option1').hide();
      $('#Option2').hide();
      $('#Option1-1').show();
      $('#Option1-2').show();
    });

     $( "#Option1-1" ).click(function() {
      $('video').attr('src', 'video/othervideo.mp4');
      $('#Main p').text('Babette decides to stop to swim. She has a wonderful time and sees a lot of fish. She is happy with her day.');
      $('#Option1-1').hide();
      $('#Option1-2').hide();
      $('#Final').show();
    });

     $( "#Option1-2" ).click(function() {
      $('video').attr('src', 'video/othervideo.mp4');
      $('#Main p').text('Babette decides to keep going on the path. She see a huge bear and is very afraid, but they become friends and play together. She is happy with her day.');
      $('#Option1-1').hide();
      $('#Option1-2').hide();
      $('#Final').show();
    });
  
    $( "#Option2" ).click(function() {
      $('video').attr('src', 'video/othervideo.mp4');
      $('#Main p').text('Babette decides to stay home and read her book. Should she go outside to read? Or should she stay inside and read on the sofa?');
      $('#Option1').hide();
      $('#Option2').hide();
      $('#Option2-1').show();
      $('#Option2-2').show();
    });

    $( "#Option2-1" ).click(function() {
      $('video').attr('src', 'video/othervideo.mp4');
      $('#Main p').text('Babette decides to read on the sofa. She dozes off and has incredible dreams. She did not get to read her book, but was happy to have such nice dreams.');
      $('#Option2-1').hide();
      $('#Option2-2').hide();
      $('#Final').show();
    });

    $( "#Option2-2" ).click(function() {
      $('video').attr('src', 'video/othervideo.mp4');
      $('#Main p').text('Babette decides to read outside. She is on the bench when a bee comes up and stings her. Her finger hurts, but she was happy to read her book!');
      $('#Option2-1').hide();
      $('#Option2-2').hide();
      $('#Final').show();
    });

    $( "#Final" ).click(function() {
      $('video').attr('src', 'video/othervideo.mp4');
      $('#Main p').text('Babette has the day off today. She does not know what she will do after breakfast. It is a really nice and sunny day, maybe she could go for a walk? Or should she stay home and start reading her new book?');
      $('#Final').hide();
      $('#Option1').show();
      $('#Option2').show();
    });

});