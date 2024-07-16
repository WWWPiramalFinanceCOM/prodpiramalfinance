import { fetchPlaceholders } from "../../scripts/aem.js";
import { renderHelper } from "../../scripts/scripts.js";

export default async function decorate(block) {
    const resp = await fetchPlaceholders();
    console.log(resp);
    block.innerHTML = renderHelper([resp], `<div class="forName">${block.innerHTML}</div>`);
    const props = [...block.children].map(row => row);
    const getHTML = generateFeatureHTML(props);
    const newDivFeature = document.createElement('div');
    newDivFeature.innerHTML = getHTML;
    block.innerHTML = '';
    block.append(newDivFeature);
    try {
        featureDropDownClick(block);
        block.closest('.home-loans-products-wrapper.view-more-less-js') ? viewLogic(block) : "";
    } catch (error) {
        console.warn(error)
    }
}

function generateFeatureHTML(props) {
    let [
        containerLink,
        cardDescription,
        leftSideImage,
        leftSideImageAlt,
        rightSideImage,
        rightSideImageAlt,
        rightSideImageLink,
        keyFeatureTitle,
        keyFeatureImagePlus,
        keyFeatureImageMinus,
        keyFeatureInnerImage1,
        keyFeatureInnerText1,
        keyFeatureInnerImage2,
        keyFeatureInnerText2,
        keyFeatureInnerImage3,
        keyFeatureInnerText3,
    ]
        = props;

    containerLink = containerLink?.textContent?.trim() || "";
    cardDescription = cardDescription?.querySelector('div > div') || "";
    leftSideImage = leftSideImage?.querySelector('div > picture > img')?.src || "";
    leftSideImageAlt = leftSideImageAlt?.textContent.trim() || "";
    rightSideImage = rightSideImage?.querySelector('div > picture > img')?.src || "";
    rightSideImageAlt = rightSideImageAlt?.textContent?.trim() || "";
    rightSideImageLink = rightSideImageLink?.textContent?.trim() || "";
    keyFeatureTitle = keyFeatureTitle?.textContent?.trim() || "";
    keyFeatureImagePlus = keyFeatureImagePlus?.querySelector('div > picture > img')?.src || "";
    keyFeatureImageMinus = keyFeatureImageMinus?.querySelector('div > picture > img')?.src || "";

    keyFeatureInnerText1 = keyFeatureInnerText1?.querySelector('div > div') || "";
    keyFeatureInnerText2 = keyFeatureInnerText2?.querySelector('div > div') || "";
    keyFeatureInnerText3 = keyFeatureInnerText3?.querySelector('div > div') || "";
    keyFeatureInnerImage1 = keyFeatureInnerImage1?.querySelector('div > picture > img')?.src || "";
    keyFeatureInnerImage2 = keyFeatureInnerImage2?.querySelector('div > picture > img')?.src || "";
    keyFeatureInnerImage3 = keyFeatureInnerImage3?.querySelector('div > picture > img')?.src || "";

    // Generate HTML
    /* const html = `<div class="homeloanteaser teaser">
    <div id="" class="cmp-teaser">
        <a class="cmp-teaser__link" href="${containerLink}">
            <div class="cmp-teaser__content">
                ${cardDescription.outerHTML}
            </div>
            <div class="cmp-teaser__image">
                <div data-cmp-is="image"
                    data-cmp-filereference="${leftSideImage}" data-cmp-hook-image="imageV3" class="cmp-image" itemscope=""
                    itemtype="">
                    <img loading="lazy" class="cmp-image__image" itemprop="contentUrl" alt="${leftSideImageAlt}" src="${leftSideImage}">
                </div>
            </div>
        </a>
        <a href="${rightSideImageLink}" class="redirectionbutton">
        <img
                data-src="${rightSideImage}" class="lozad"
                src="${rightSideImage}" data-loaded="true" alt="${rightSideImageAlt}">
        </a>
        ${keyFeatureTitle} 
        <div class="keyfeature-container">
            <div class="keyfeatures-info">
                <p class="heading">${keyFeatureTitle}</p>
                <img data-src="${keyFeatureImagePlus}" alt="plusicon"
                    class="plusicon lozad" src="${keyFeatureImagePlus}"
                    data-loaded="true" style="display: block;">
                <img data-src="${keyFeatureImageMinus}" alt="minusicon"
                    class="minusicon lozad" style="display: none;"
                    src="${keyFeatureImageMinus}" data-loaded="true">
                <div class="keyfeatures" style="display: none;">
                    <div class="feature" id="hideshow">
                        <img data-src="${keyFeatureInnerImage1}" alt="cost"
                            class="lozad" src="${keyFeatureInnerImage1}"
                            data-loaded="true">
                        <div class="feature-details">
                            ${keyFeatureInnerText1.outerHTML}
                        </div>
                    </div>

                    <div class="feature" id="hideshow">
                        <img data-src="${keyFeatureInnerImage2}" alt="tenure"
                            class="lozad" src="${keyFeatureInnerImage2}"
                            data-loaded="true">
                        <div class="feature-details">
                            ${keyFeatureInnerText2.outerHTML}
                        </div>
                    </div>

                    <div class="feature" id="hideshow">
                        <img data-src="${keyFeatureInnerImage3}" alt="Interest"
                            class="lozad" src="${keyFeatureInnerImage3}"
                            data-loaded="true">
                        <div class="feature-details">
                        ${keyFeatureInnerText3.outerHTML}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` */

    const keyFeatureDiv = keyFeatureTitle ? ` 
    <div class="keyfeature-container">
        <div class="keyfeatures-info">
            <p class="heading">${keyFeatureTitle}</p>
            <img data-src="${keyFeatureImagePlus}" alt="plusicon"
                class="plusicon lozad" src="${keyFeatureImagePlus}"
                data-loaded="true" style="display: block;">
            <img data-src="${keyFeatureImageMinus}" alt="minusicon"
                class="minusicon lozad" style="display: none;"
                src="${keyFeatureImageMinus}" data-loaded="true">
            <div class="keyfeatures" style="display: none;">
                <div class="feature" id="hideshow">
                    <img data-src="${keyFeatureInnerImage1}" alt="cost"
                        class="lozad" src="${keyFeatureInnerImage1}"
                        data-loaded="true">
                    <div class="feature-details">
                        ${keyFeatureInnerText1.outerHTML}
                    </div>
                </div>
    
                <div class="feature" id="hideshow">
                    <img data-src="${keyFeatureInnerImage2}" alt="tenure"
                        class="lozad" src="${keyFeatureInnerImage2}"
                        data-loaded="true">
                    <div class="feature-details">
                        ${keyFeatureInnerText2.outerHTML}
                    </div>
                </div>
    
                <div class="feature" id="hideshow">
                    <img data-src="${keyFeatureInnerImage3}" alt="Interest"
                        class="lozad" src="${keyFeatureInnerImage3}"
                        data-loaded="true">
                    <div class="feature-details">
                    ${keyFeatureInnerText3.outerHTML}
                    </div>
                </div>
            </div>
        </div>
    </div>` : '';

    const html = `<div class="homeloanteaser teaser">
    <div id="" class="cmp-teaser">
        <a class="cmp-teaser__link" href="${containerLink}">
            <div class="cmp-teaser__content">
                ${cardDescription.outerHTML}
            </div>
            <div class="cmp-teaser__image">
                <div data-cmp-is="image"
                    data-cmp-filereference="${leftSideImage}" data-cmp-hook-image="imageV3" class="cmp-image" itemscope=""
                    itemtype="">
                    <img loading="lazy" class="cmp-image__image" itemprop="contentUrl" alt="${leftSideImageAlt}" src="${leftSideImage}">
                </div>
            </div>
        </a>
        <a href="${rightSideImageLink}" class="redirectionbutton">
        <img
                data-src="${rightSideImage}" class="lozad"
                src="${rightSideImage}" data-loaded="true" alt="${rightSideImageAlt}">
        </a>
       ${keyFeatureDiv}
    </div>
</div>`;

    return html;
}


function featureDropDownClick(block) {
    var featureClick = block.querySelectorAll('.keyfeatures-info .heading')
    featureClick.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
            var wrapperContainer = this.closest('.wrapper-creation-container');
            var keyfeaturesList = wrapperContainer.querySelectorAll('.keyfeatures-info .keyfeatures');
            keyfeaturesList.forEach(function (keyfeatures) {
                if (keyfeatures.style.display === 'none') {
                    keyfeatures.style.display = 'block';
                    block.querySelectorAll('.plusicon').forEach(function (icon) {
                        icon.style.display = 'none';
                    })
                    block.querySelectorAll('.minusicon').forEach(function (icon) {
                        icon.style.display = 'block';
                    })
                } else {
                    keyfeatures.style.display = 'none';
                    block.querySelectorAll('.plusicon').forEach(function (icon) {
                        icon.style.display = 'block';
                    })
                    block.querySelectorAll('.minusicon').forEach(function (icon) {
                        icon.style.display = 'none';
                    })
                }
            });
        })
    })
}

function viewLogic(block) {
    const viewMoreSection = block.closest('.home-loans-products-wrapper.view-more-less-js')
    // .forEach(each => {
    const wrapper = viewMoreSection?.querySelector('.wrappercreation-wrapper');
    const keyFeatures = wrapper?.querySelectorAll('.keyfeatures-wrapper');

    keyFeatures.forEach((eachFeature, index) => {
        eachFeature.classList.toggle("dp-none", index > 2);
    });

    const buttonContainer = wrapper.querySelector('.button-container');
    if (buttonContainer) {
        const buttonText = buttonContainer?.textContent.trim();
        buttonContainer.innerHTML = buttonText;
        viewMoreLogic(viewMoreSection);
    }
    // });
}

function viewMoreLogic(each) {
    const buttonContainer = each.querySelector('.wrappercreation-wrapper .button-container');
    !each.dataset.clickAdded && buttonContainer.addEventListener('click', function () {
        const isViewMore = this.textContent.toLowerCase() === 'view more';

        each.querySelectorAll('.keyfeatures-wrapper').forEach((eachFeature, index) => {
            eachFeature.classList.toggle("dp-none", !isViewMore && index > 2);
        });

        if (isViewMore) {
            this.innerText = "View Less";
            this.classList.add("up-arrow");
        } else {
            this.innerText = "View More";
            this.classList.remove("up-arrow");
            scrollToComponent(each);
        }
    });

    if (!each.dataset.clickAdded) {
        each.dataset.clickAdded = true;
    }

}

function scrollToComponent(component) {
    if (window.matchMedia("(max-width: 767px)").matches) {
        window.scroll({
            top: component.offsetTop - 100,
            left: 0,
            behavior: "smooth",
        });
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        window.scroll({
            top: component.offsetTop - 140,
            left: 0,
            behavior: "smooth",
        });
    } else {
        window.scroll({
            top: component.offsetTop - 180,
            left: 0,
            behavior: "smooth",
        });
    }
}
