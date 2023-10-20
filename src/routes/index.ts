export enum Route {
  home = 'home',
  about = 'about',
  names = 'names',
}

export const routeHref = {
  [Route.home]: '/',
  [Route.about]: '/pages/about',
};

export const names = {
  [Route.home]: 'Главная',
  [Route.about]: 'О нас',
};

//export const routeImages: { [key: string]: string } = {
//  [Route.home]: '/images/karelia.jpg',
//  [Route.about]: '/images/aboutBackground.jpg',
//};
