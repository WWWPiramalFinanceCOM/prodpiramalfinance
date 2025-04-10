/* Calculator Start */

.section.calculator-section-wrapper .default-content-wrapper h2 {
    margin: 0;
    color: var(--black);
    display: block;
    font-family: 'Nunito-Extrabold', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.5rem;
    padding-bottom: 8px;
}

.section.calculator-section-wrapper .default-content-wrapper p {
    margin: 0;
    margin-bottom: 24px;
    color: var(--gradient-gray);
    display: block;
    font-family: 'Nunito-Regular', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
    padding-bottom: 8px;
}

.section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    row-gap: 24px;
}

.section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper {
    border-radius: 20px;
    cursor: pointer;
    height: 150px;
    overflow: hidden;
    width: 49%;
    position: relative;
}

.section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .front-image picture img {
    display: block;
    width: 100%;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition-timing-function: linear;
    transition-duration: .2s
}

.section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .front-image picture img:hover {
    transform: scale(1.25);
    transition-timing-function: linear;
    transition-duration: .2s
}

.section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .title {
    position: absolute;
    top: 24px;
    left: 24px;
    color: var(--white);
    font-family: 'Nunito-Bold', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
}

.section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .button-container-text {
    margin: 0;
    position: absolute;
    top: 80px;
    left: 24px;
    background: var(--orange);
    border-radius: 8px;
    color: var(--white);
    font-family: 'Nunito-Bold', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
    padding: 15.5px 17.5px;
}

@media screen and (max-width:1024px) {
    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container {
        flex-wrap: unset;
        gap: 24px;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper {
        height: 110px;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .title {
        left: 16px;
        top: 16px;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .button-container-text {
        padding: 9.5px 10.5px;
        top: 54px;
        left: 16px;
    }
}

@media screen and (max-width:767px) {
    .section.calculator-section-wrapper .default-content-wrapper h2 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        padding-bottom: 4px;
    }

    .section.calculator-section-wrapper .default-content-wrapper p {
        margin-bottom: 20px;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding-bottom: 4px;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container {
        flex-direction: column;
        gap: 16px;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper {
        height: 110px;
        width: 100%;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .front-image picture img {
        height: 110px;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .title {
        top: 16px;
        left: 16px;
        font-size: 1rem;
        line-height: 1.5rem;
    }

    .section.calculator-section-wrapper .wrappercreation-wrapper .block .wrapper-creation-container .teaserv2-wrapper .block>a .bg-image .button-container-text {
        top: 60px;
        left: 16px;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 9px 11.21px;
    }
}

/* Calculator End */