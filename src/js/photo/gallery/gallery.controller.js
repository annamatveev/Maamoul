class GalleryCtrl {
    constructor(Photos) {
        'ngInject';

        this._Photos = Photos;
    }

    deletePhoto(photoIndex, photoId) {
        console.log(photoIndex);

        this.photos.splice(photoIndex, 1);
    }
}

export default GalleryCtrl;