import { CFApiCall, fetchAPI } from '../../scripts/scripts.js';
import { setLocationObj } from '../moredetailsaddress/moredetailsaddress.js';

export default async function decorate(block) {
  const { geoInfo: { city } } = setLocationObj;
  const linkURL = block.textContent.trim();

  if (!linkURL) {
    return false;
  }

  const cfRepsonse = linkURL && await CFApiCall(linkURL);
  const repsonseData = cfRepsonse && cfRepsonse.data[0].branchloanmapping;
  const jsonResponseData = repsonseData && JSON.parse(repsonseData);

  Object.keys(jsonResponseData).forEach((eachKey) => {
    if (!jsonResponseData[eachKey].includes(city)) {
      const getDataPanel = document.querySelector(`.${eachKey}-branch-carousel`).getAttribute('data-panel');
      document.querySelectorAll(`[data-panel=${getDataPanel}]`).forEach((eachEle) => {
        eachEle.remove();
      });
    }
  });

  block.classList.add('dp-none');
}

