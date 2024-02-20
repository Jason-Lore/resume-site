import React from "react";

let Experience = () => {
    return (
        <section>
            <div class="uk-margin-medium-top">
                <ul class="uk-flex-center" uk-tab='' uk-switcher=''>
                    <li class="uk-active"><a href="#">Technical</a></li>
                    <li><a href="#">Management</a></li>
                    <li><a href="#">Customer Service</a></li>
                </ul>
                <ul class="uk-switcher uk-margin">
                    <li>am know Tech</li>
                    <li>I managed for like...2 months before my whole team was laid off</li>
                    <li>Master of blending arts</li>
                </ul>
            </div>
        </section>
    )
}

export default Experience