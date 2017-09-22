<?php include('partials/head.php');?>

    <div class="breakpoint-identifier"></div>

    <div class="content-container--large padding--sides padding-double--top">

        <a class="[ js-overlay-open ]" href="#">

            <div class="menu-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </a>

        <h1 class="margin-double--top no-margin--bottom">Better Boilerplate</h1>
        <h2 class="margin-double--bottom">Component Examples</h2>

        <hr class="margin-double--ends">

        <h3>Accordions</h3>

        <div class="accordion">

            <div class="accordion__title [ js-accordion__title ]">

                Accordion Title

                <svg class="svg">
                    <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                </svg>

            </div>

            <div class="accordion__content [ js-accordion__content ]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae est igitur causa istarum angustiarum? Sed quod proximum fuit non vidit. An est aliquid, quod te sua sponte delectet? Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius.
            </div>

        </div>

        <div class="accordion">

            <div class="accordion__title [ js-accordion__title ]">

                Accordion Title

                <svg class="svg">
                    <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                </svg>

            </div>

            <div class="accordion__content [ js-accordion__content ]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae est igitur causa istarum angustiarum? Sed quod proximum fuit non vidit. An est aliquid, quod te sua sponte delectet? Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius.
            </div>

        </div>

        <hr class="margin-double--ends">

        <h3>Carousels</h3>

        <h4>Images Carousel</h4>

        <div class="carousel__container margin-double--bottom">

            <div class="carousel [ js-carousel ]">

                <div><img src="https://unsplash.it/1920/1080" alt=""></div>
                <div><img src="https://unsplash.it/1921/1080" alt=""></div>
                <div><img src="https://unsplash.it/1922/1081" alt=""></div>
                <div><img src="https://unsplash.it/1923/1081" alt=""></div>
                <div><img src="https://unsplash.it/1924/1082" alt=""></div>

            </div>

            <div class="carousel__navigation">
                <button class="carousel__nav carousel__nav--prev [ js-carousel__prev ]">
                    <svg class="svg svg--carousel-arrow">
                        <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                    </svg>
                </button>

                <button class="carousel__nav carousel__nav--next [ js-carousel__next ]">
                    <svg class="svg svg--carousel-arrow">
                        <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                    </svg>
                </button>
            </div>

            <div class="carousel__pagination [ js-carousel-pagination ]"></div>

        </div>

        <h4>Content Carousel</h4>

        <div class="carousel__container margin-double--bottom">

            <div class="carousel [ js-carousel ]">

                <div class="carousel__item" style="background-image: url('https://unsplash.it/1920/1080')">

                    <div class="carousel__overlay"></div>

                    <div class="carousel__content">
                        <h3>Carousel Content</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Inde igitur, inquit, ordiendum est. Tu enim ista lenius, hic Stoicorum more nos vexat. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Quae si potest singula consolando levare, universa quo modo sustinebit? Quo modo autem optimum, si bonum praeterea nullum est? Sed residamus, inquit, si placet.</p>
                    </div>

                </div>

                <div class="carousel__item" style="background-image: url('https://unsplash.it/1921/1080')">

                    <div class="carousel__overlay"></div>

                    <div class="carousel__content">
                        <h3>Carousel Content</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Inde igitur, inquit, ordiendum est. Tu enim ista lenius, hic Stoicorum more nos vexat. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Quae si potest singula consolando levare, universa quo modo sustinebit? Quo modo autem optimum, si bonum praeterea nullum est? Sed residamus, inquit, si placet.</p>
                    </div>

                </div>

                <div class="carousel__item" style="background-image: url('https://unsplash.it/1922/1081')">

                    <div class="carousel__overlay"></div>

                    <div class="carousel__content">
                        <h3>Carousel Content</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Inde igitur, inquit, ordiendum est. Tu enim ista lenius, hic Stoicorum more nos vexat. Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Quae si potest singula consolando levare, universa quo modo sustinebit? Quo modo autem optimum, si bonum praeterea nullum est? Sed residamus, inquit, si placet.</p>
                    </div>

                </div>

            </div>

            <div class="carousel__navigation">
                <button class="carousel__nav carousel__nav--prev [ js-carousel__prev ]">
                    <svg class="svg svg--carousel-arrow">
                        <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                    </svg>
                </button>

                <button class="carousel__nav carousel__nav--next [ js-carousel__next ]">
                    <svg class="svg svg--carousel-arrow">
                        <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                    </svg>
                </button>
            </div>

            <div class="carousel__pagination [ js-carousel-pagination ]"></div>

        </div>

        <h4>Multi Carousel</h4>

        <div class="carousel__container margin-double--bottom">

            <div class="carousel [ js-multi-carousel ]">

                <div><img src="https://unsplash.it/1920/1080" alt=""></div>
                <div><img src="https://unsplash.it/1921/1080" alt=""></div>
                <div><img src="https://unsplash.it/1922/1081" alt=""></div>
                <div><img src="https://unsplash.it/1923/1081" alt=""></div>
                <div><img src="https://unsplash.it/1924/1082" alt=""></div>

            </div>

            <div class="carousel__navigation">
                <button class="carousel__nav carousel__nav--prev [ js-carousel__prev ]">
                    <svg class="svg svg--carousel-arrow">
                        <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                    </svg>
                </button>

                <button class="carousel__nav carousel__nav--next [ js-carousel__next ]">
                    <svg class="svg svg--carousel-arrow">
                        <use xlink:href="/dist/images/sprite.svg#boilerplate-arrow" href="/dist/images/sprite.svg#boilerplate-arrow"></use>
                    </svg>
                </button>
            </div>

        </div>

        <hr class="margin-double--ends">

        <h3>Custom Radio Buttons and Checkboxes</h3>

        <form>

            <div class="margin--bottom">

                <input class="radio" id="radio-one" type="radio" name="radio" value="one" />
                <label class="radio__label" for="radio-one">Radio Button One</label>

                <input class="radio" id="radio-two" type="radio" name="radio" value="two" />
                <label class="radio__label" for="radio-two">Radio Button Two</label>

            </div>


            <div class="margin--bottom">

                <input class="checkbox" id="checkbox-one" type="checkbox" name="checkbox" value="one" />
                <label class="checkbox__label" for="checkbox-one">Checkbox</label>

            </div>

        </form>

        <hr class="margin-double--ends">

        <h3>Grids</h3>

        <h4>Halves</h4>

        <div class="grid grid--halves margin-double--bottom">

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Primum in nostrane potestate est, quid meminerimus? Duo Reges: constructio interrete. Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem. Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.
            </div>

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Primum in nostrane potestate est, quid meminerimus? Duo Reges: constructio interrete. Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem. Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.
            </div>

        </div>

        <h4>Thirds</h4>

        <div class="grid grid--thirds margin-double--bottom">

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Primum in nostrane potestate est, quid meminerimus? Duo Reges: constructio interrete. Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem. Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.
            </div>

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Primum in nostrane potestate est, quid meminerimus? Duo Reges: constructio interrete. Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem. Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.
            </div>

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Primum in nostrane potestate est, quid meminerimus? Duo Reges: constructio interrete. Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Quod, inquit, quamquam voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem. Itaque haec cum illis est dissensio, cum Peripateticis nulla sane.
            </div>

        </div>

        <h4>Quarters</h4>

        <div class="grid grid--quarters margin-double--bottom">

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim.
            </div>

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim.
            </div>

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim.
            </div>

            <div class="grid__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamvis enim depravatae non sint, pravae tamen esse possunt. Nihil opus est exemplis hoc facere longius. Primum cur ista res digna odio est, nisi quod est turpis? Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim.
            </div>

        </div>

        <hr class="margin-double--ends">

        <h3>Notices</h3>

    </div>

    <div class="notice notice">
        <p>Better Boilerplate Notice</p>
    </div>

    <div class="notice notice--error">
        <p>Better Boilerplate Notice - Error</p>
    </div>

    <div class="notice notice--warning">
        <p>Better Boilerplate Notice - Warning</p>
    </div>

    <div class="notice notice--success">
        <p>Better Boilerplate Notice - Success</p>
    </div>

    <div class="content-container--large padding--sides padding-double--ends">

        <hr class="margin-double--ends">

        <h3>Page Layouts</h3>

        <article class="page-layout margin-double--ends">

            <aside class="page-layout__sidebar-container">
                <h4 class="h5 no-margin">Sidebar</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Respondent extrema primis, media utrisque, omnia omnibus. Quantum Aristoxeni ingenium consumptum videmus in musicis? Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Eam stabilem appellas. Ut in geometria, prima si dederis, danda sunt omnia. Eiuro, inquit adridens, iniquum, hac quidem de re; Hos contra singulos dici est melius. Duo Reges: constructio interrete. Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; Item de contrariis, a quibus ad genera formasque generum venerunt. Qui autem de summo bono dissentit de tota philosophiae ratione dissentit. Ergo in utroque exercebantur, eaque disciplina effecit tantam illorum utroque in genere dicendi copiam.</p>
            </aside>

            <main class="page-layout__main-container">
                <h4 class="h5 no-margin">Content</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
            </main>

        </article>

        <article class="page-layout margin-double--ends">

            <main class="page-layout__main-container">
                <h4 class="h5 no-margin">Content</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
            </main>

            <aside class="page-layout__sidebar-container">
                <h4 class="h5 no-margin">Sidebar</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Respondent extrema primis, media utrisque, omnia omnibus. Quantum Aristoxeni ingenium consumptum videmus in musicis? Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Eam stabilem appellas. Ut in geometria, prima si dederis, danda sunt omnia. Eiuro, inquit adridens, iniquum, hac quidem de re; Hos contra singulos dici est melius. Duo Reges: constructio interrete. Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; Item de contrariis, a quibus ad genera formasque generum venerunt. Qui autem de summo bono dissentit de tota philosophiae ratione dissentit. Ergo in utroque exercebantur, eaque disciplina effecit tantam illorum utroque in genere dicendi copiam.</p>
            </aside>

        </article>

        <article class="page-layout page-layout--three margin-double--ends">

            <aside class="page-layout__sidebar-container">
                <h4 class="h5 no-margin">Sidebar</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Respondent extrema primis, media utrisque, omnia omnibus. Quantum Aristoxeni ingenium consumptum videmus in musicis? Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Eam stabilem appellas. Ut in geometria, prima si dederis, danda sunt omnia. Eiuro, inquit adridens, iniquum, hac quidem de re.</p>
            </aside>

            <main class="page-layout__main-container">
                <h4 class="h5 no-margin">Content</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Qui ita affectus, beatum esse numquam probabis; Collatio igitur ista te nihil iuvat. Aliter autem vobis placet. Duo Reges: constructio interrete. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Suo genere perveniant ad extremum; Nam de isto magna dissensio est.</p>
            </main>

            <aside class="page-layout__sidebar-container">
                <h4 class="h5 no-margin">Sidebar</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Respondent extrema primis, media utrisque, omnia omnibus. Quantum Aristoxeni ingenium consumptum videmus in musicis? Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Eam stabilem appellas. Ut in geometria, prima si dederis, danda sunt omnia. Eiuro, inquit adridens, iniquum, hac quidem de re.</p>
            </aside>

        </article>

    </div>

    <div class="overlay [ js-overlay ]">

        <a class="overlay__close-button [ js-overlay-close ]" href="#">

            <div class="menu-icon is-active">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </a>

        <div class="content-container--large padding--sides">
            <h4 class="h3">Example overlay</h4>
        </div>

    </div>

    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
        integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
        crossorigin="anonymous">
    </script>

    <script src="dist/js/main.js"></script>

</body>
</html>