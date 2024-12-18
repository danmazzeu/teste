$(document).ready(function() {
    $('nav').css({
        'overflow-x': 'hidden',
        '-webkit-overflow-scrolling': 'touch'
    });

    let lastX = 0;
    let isHovering = false;

    function navControl() {
        if (isHovering) {
            const deltaX = event.clientX - lastX;
            $('nav').scrollLeft($('nav').scrollLeft() + deltaX);
            lastX = event.clientX;
        }
    }

    $('nav').on('mouseenter', function() {
        isHovering = true;
    });

    $('nav').on('mouseleave', function() {
        isHovering = false;
    });

    $(document).on('mousemove touchmove', navControl);

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