<?php include('partials/head.php');?>

    <div class="breakpoint-identifier"></div>

    <div class="content-container--large [ padding--sides ]">

        <article class="page-layout">

            <main class="[ page-layout__main-container ] [ padding--top ]">

                <div class="markdown-container [ js-documentation-container ]"></div>

            </main>

            <aside class="sidebar [ page-layout__sidebar-container ] [ padding--top ]">

                <h2 class="padding-double--top">Table of Contents</h2>
                <div id="toc"></div>

            </aside>

        </article>

    </div>

    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
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

            $('#toc').initTOC({
                selector: 'h2, h3, h4',
                scope: '.js-documentation-container',
                overwrite: false,
                prefix: 'toc'
            });

        });

    </script>

    <script src="dist/js/main.js"></script>

</body>
</html>