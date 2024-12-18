$(document).ready(function() {
    $('nav').css({
        'overflow-x': 'hidden',
        '-webkit-overflow-scrolling': 'touch'
    });

    const nav = $('nav');
    let startX;
  
    nav.mousemove(function(e) {
        const deltaX = e.clientX - startX;
        nav.scrollLeft(nav.scrollLeft() + deltaX);
        startX = e.clientX;
    });

    nav.on('touchstart', function(e) {

        startX = e.originalEvent.touches[0].clientX;
      });
      
      nav.on('touchmove', function(e) {
          const deltaX = e.originalEvent.touches[0].clientX + startX;
          nav.scrollLeft(nav.scrollLeft() - deltaX);
          startX = e.originalEvent.touches[0].clientX;
      });

    $('nav a').on('click', function() {
        const href = $(this).attr('href').split('#');

        $('nav a').removeClass('active');
        $(this).addClass('active');
    
        console.log(href[1]);
    });

    if (window.location.hash == '') {
        window.location.href = '#presentation';
    }

    $('nav a').each(function() {
        const href = $(this).attr('href');
        const currentUrl = window.location.href;
    
        if (href === currentUrl) {
            $(this).addClass('active');
        } else if (href.indexOf('#') === 0) {
            const currentHash = window.location.hash;
            if (href === currentHash) {
                $(this).addClass('active');
            }
        }
    });
});