class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({name, price, beforePrice, img, newMark}) => {

      htmlCatalog += `
      <li>          
      <article class="product-item ${newMark}">
        <img src="${img}" alt="" class="product-item__img">
        <div class="product-item__btns">
          <a class="btn product-item__btns__buy" href="#">Купить</a>
          <button class="btn product-item__btns__bookmarks">в закладки</button>
        </div>
        <h3 class="product-item__h3">${name}</h3>
        <span class="product-item__before-price">${beforePrice}</span>
        <div class="product-item__price">${price} P.</div>
      </article>
    </li>`;
    })

    const html = `
    <ul class="catalog__catalog">
      ${htmlCatalog}
    </ul>
    `;

    ROOT_PRODUCTS.innerHTML = htmlCatalog;
  } 
}


const productPage = new Products();
productPage.render()