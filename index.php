<?php include('partials/head.php');?>

    <div class="breakpoint-identifier"></div>

    <div class="hero">

        <div class="hero__content content-container--large padding--sides">

            <svg class="hero__logo svg">
                <use xlink:href="/dist/images/sprite.svg/#better-logo" href="/dist/images/sprite.svg/#better-logo"></use>
            </svg>

            <h1 class="hero__title"><span class="is-visuallyhidden">Better.</span> Boilerplate</h1>

            <img class="hero__illustration" src="/dist/images/hero-illustration.svg" alt="">

            <div class="hero__buttons-container">

                <a class="hero__button button button--large button--alpha" href="#">
                    <svg class="button__icon svg">
                        <use xlink:href="/dist/images/sprite.svg/#download" href="/dist/images/sprite.svg/#download"></use>
                    </svg>
                    Download
                </a>
                <a class="hero__button button button--large button--grey" href="#">
                    <svg class="button__icon svg">
                        <use xlink:href="/dist/images/sprite.svg/#github" href="/dist/images/sprite.svg/#github"></use>
                    </svg>
                    GitHub
                </a>

            </div>

        </div>

        <a class="hero__scroll-indicator" href="#content-start"></a>

    </div>

    <div id="content-start" class="content-container--large [ padding--sides ]">

        <article class="page-layout">

            <main class="[ page-layout__main-container ] [ padding--top ]">

                <!-- <h2 class="padding-double--top padding--bottom">Table of Contents</h2>
                <div class="[ js-toc table-of-contents ]"></div> -->

                <div class="[ js-documentation-container ] markdown-container [ margin-double--bottom padding-double--bottom ]"></div>

            </main>

            <aside class="sidebar [ page-layout__sidebar-container ] [ padding--top ]">

                <h2 class="margin-double--ends">Table of Contents</h2>
                <div class="[ js-toc table-of-contents ]"></div>

            </aside>

        </article>

    </div>

    <script
        src="https://code.jquery.com/jquery-1.12.4.min.js"
        integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
        crossorigin="anonymous">
    </script>

    <script src="dist/js/prism.js"></script>
    <script src="dist/js/table-of-contents.js"></script>

    <script>

        // Get Documentation
        $.get('dist/content/documentation.md', function(data) {

            var converter = new showdown.Converter(),
            text      = data,
            html      = converter.makeHtml(text);

            $('.js-documentation-container').append(html);

            $('.js-documentation-container pre code').each(function() {
                $(this).parent('pre').addClass('language-scss');
                Prism.highlightElement($(this)[0]);
            });

            $('.js-toc').each(function() {
                $(this).initTOC({
                    selector: 'h2, h3, h4',
                    scope: '.js-documentation-container',
                    overwrite: false,
                    prefix: 'toc'
                });
            });

            // Smooth Scrolling
            $('a').click(function(e){
                $('html, body').animate({
                    scrollTop: $( $(this).attr('href') ).offset().top
                }, 500);
            });

        });

    </script>

    <script src="dist/js/main.min.js"></script>

</body>
</html>