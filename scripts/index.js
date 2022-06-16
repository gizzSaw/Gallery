import { getData } from "./getData.js";
import { renderGallery } from './renderGallery.js';

const init = async () => {
    const photos = await getData();
    console.log('photos', photos);
    renderGallery(photos);
}

init();