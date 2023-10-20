export enum Route {
  home = 'home',
  catalog = 'catalog',
  about = 'about',
  gallery = 'gallery',
  names = 'names',
}

export const routeHref = {
  [Route.home]: '/',
  [Route.catalog]: '/pages/catalog',
  [Route.about]: '/pages/about',
  [Route.gallery]: '/pages/gallery'
};

export const names = {
  [Route.home]: 'Главная',
  [Route.catalog]: 'Каталог',
  [Route.about]: 'О нас',
  [Route.gallery]: 'Галерея',
};

//export const routeImages: { [key: string]: string } = {
//  [Route.home]: '/images/karelia.jpg',
//  [Route.about]: '/images/aboutBackground.jpg',
//};
