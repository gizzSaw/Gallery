import { createElem } from "./createElem.js";

export const createCardPhoto = (data) => {
    const card = document.createElement('li');
    card.className = 'card';

    const cardItem = document.createElement('a');
    cardItem.id = data.id;
    cardItem.className = 'grid-itm';
    cardItem.href = `page.html?photo=${data.id}`;

    const photo = new Image(); 
    photo.width = '200';
    photo.src = data.urls.small;
    photo.alt = data.alt_description;
    
    const author = document.createElement('a');
    author.className = 'card__author';
    author.href = data.user.links.html;

    const avatarAutor = new Image();
    avatarAutor.className = 'author__photo';
    avatarAutor.scr = data.user.profile_image.medium;
    avatarAutor.width = '32';
    avatarAutor.height = '32';
    avatarAutor.alt = data.user.bio;
    avatarAutor.title = data.user.username;


    author.append(avatarAutor);

    const likeBtn = document.createElement('button');
    likeBtn.className = 'card__photo-like';
    likeBtn.textContent = data.likes; 

    const dowloadLink = document.createElement('a');
    dowloadLink.className = 'card__download';
    dowloadLink.href = data.links.download;
    dowloadLink.download = true;
    dowloadLink.target = '_blank';

    cardItem.append(photo, author, likeBtn, dowloadLink);

    card.append(cardItem);

    return card;
}
