
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("currentLink");
        }
    });
});

$('#core').prepend('<div class="header">')
$('.header').append('<div class="logohead">')
$('.logohead').append('<a href="index.html"><h1 id="headtext">SKYBROOK</h1></a>')
$('.header').append('</div>')
$('.header').append('<div id="spacer"></div>')
$('.logohead').append('<div class="menu">')
$('.menu').append('<div class="mainmenu">')
$('.mainmenu').append('<ul id="menulist">')
$('#menulist').append('<x id="menuitem"><a href="index.html">Home</a>','</x>')
$('#menulist').append('<x class="menuSep">|</x>')
$('#menulist').append('<x id="menuitem"><a href="resources.html">Resources</a>','</x>')
$('#menulist').append('<x class="menuSep">|</x>')
$('#menulist').append('<x id="menuitem"><a href="about.html">About</a>','</x>')
$('.mainmenu').append('</ul>')
$('.menu').append('</div>')
$('.header').append('</div>')


// End of Header

// Footer
$('#core').append('<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>')
$('#core').append('<div id="footer">')
$('#footer').append('<div id="footContent">')
$('#footContent').append('<p id="copyrightNotice">All content is wholly owned by Skybrook Foundation, copyright 2018©<br><br>DISCLAIMER: While we attempt to keep information as up to date and accurate as possible, we are not responsible for accidentally inaccurate information. If you have questions make sure to inquire further with your physician. If you spot an inaccuracy in our information, feel free to let us know via the contact us form.</p>')
$('#footer').append('</div>')
$('#core').append('</div>')