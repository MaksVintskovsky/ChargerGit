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