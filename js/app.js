$(document).ready(function(){
	$('.photo').click(function(){
		$(this).addClass('high-z');
		$('.photo').not(this).removeClass('high-z');
	});
	$(document).ready(function(){
         $('nav span').click(function(){
            $('nav ul').slideToggle();
            var button = $('nav span');
            if(button.text()==button.data('text-swap')){
               button.text(button.data('text-original'));
            } else {
               button.data('text-original', button.text());
               button.text(button.data('text-swap'));
            };
         });
      });
});
