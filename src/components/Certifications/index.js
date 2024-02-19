import React from "react";



let Certifications = () => {
    return (
        <section>
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider=''>

                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href='/' uk-slidenav-previous='' uk-slider-item="previous" alt='Next'>Next</a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href='/' uk-slidenav-next='' uk-slider-item="next" alt='Previous'>Previous</a>

            </div>
        </section>
    )
}

export default Certifications