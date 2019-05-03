$(document).ready(function() {
	var navButton = $('#navigation-button');
    var navBlock = $('.navigation-list');
    
    navButton.on('click', function(e){
        e.preventDefault();
        navBlock.toggleClass('navigation-list--open');
    })
    
    $('.navigation-list a').on('click', function(e){
        navBlock.removeClass('navigation-list--open');
    })


    $block_1 = $(
        '<div class="hover-block-1-wrapper">'+
            '<div class="hover-block-1-border">'+
                '<div class="hover-block-1-border-title">Tuning</div>'+
                '<div class="hover-block-1-border-description">Modification of the performance or appearance of a vehicle.</div>'+
                '<a class="read_more" href="#">READ MORE</a>'+
            '</div>'+
        '</div>'
    );
     $block_1.hide();
     $('.hover-block-1').html($block_1);

     $('.hover-block-1').on('mouseenter', function(){
        $block_1.fadeIn();
         $('.block_1-title').remove();
     });
     $('.hover-block-1').on('mouseleave', function(){
        $block_1.hide();
         $('.hover-block-1').before('<div class="block_1-title">Tuning</div>');
     });
    
    $block_2 = $(
        '<div class="hover-block-1-wrapper">'+
            '<div class="hover-block-1-border">'+
                '<div class="hover-block-1-border-title">Restoration</div>'+
                '<div class="hover-block-1-border-description">Modification of the performance or appearance of a vehicle.</div>'+
                '<a class="read_more" href="#">READ MORE</a>'+
            '</div>'+
        '</div>'
    );

     $block_2.hide();
     $('.hover-block-2').html($block_2);

     $('.hover-block-2').on('mouseenter', function(){
        $block_2.fadeIn();
        $('.block_2-title').remove();
     });
     $('.hover-block-2').on('mouseleave', function(){
        $block_2.hide();
         $('.hover-block-2').before('<div class="block_2-title">Restoration</div>');
     });
    
    
    
    $block_3 = $(
        '<div class="hover-block-1-wrapper">'+
            '<div class="hover-block-1-border">'+
                '<div class="hover-block-1-border-title">Rapairs</div>'+
                '<div class="hover-block-1-border-description">Modification of the performance or appearance of a vehicle.</div>'+
                '<a class="read_more" href="#">READ MORE</a>'+
            '</div>'+
        '</div>'
    );

     $block_3.hide();
     $('.hover-block-3').html($block_3);

     $('.hover-block-3').on('mouseenter', function(){
        $block_3.fadeIn();
        $('.block_3-title').remove();
     });
     $('.hover-block-3').on('mouseleave', function(){
        $block_3.hide();
        $('.hover-block-3').before('<div class="block_3-title">Rapairs</div>');
     });
    
    
    
    
    
    
	/* ......Call plugins hrere ..........*/

	$("#header-slider").owlCarousel({
		singleItem : true,
		navigation : true,
		navigationText : ["PREV","NEXT"],
		scrollPerPage : true,
	});
    $("#header-slider").on('changed.owl.carousel', function(event){

        console.log('fine');
        // console.log(event.item.count);
    })




    $("#comments-slider").owlCarousel({
		singleItem : true,
		navigation : true,
		navigationText : ["",""],
		scrollPerPage : true,
        pagination : false
	});
    
    $(".next").click(function(){
        $("#comments-slider").trigger('owl.next');
    })
    $(".prev").click(function(){
        $("#comments-slider").trigger('owl.prev');
    })

    $(".description").niceScroll({
        cursorwidth:"1px",
        cursorborder: "1px solid #e3a062",
        autohidemode: false
    });
    
    $(" a, a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector:"navigation-list a",
    });

	
});