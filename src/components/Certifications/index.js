import React from "react";

import certificationData from './certifications.json'

let Certifications = () => {
    return (
        <section>
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider='' style={{ color: "black" }}>

                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href='/' uk-slidenav-previous='' uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href='/' uk-slidenav-next='' uk-slider-item="next"></a>

            </div>
        </section>
    )
}

export default Certifications