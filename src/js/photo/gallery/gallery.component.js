import GalleryCtrl from './gallery.controller'

let Gallery = {
    bindings: {
        photos: '='
    },
    controller: GalleryCtrl,
    controllerAs: '$ctrl',
    templateUrl: 'photo/gallery/gallery.html'
};

export default Gallery;
