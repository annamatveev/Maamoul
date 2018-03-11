class GalleryCtrl {
    constructor(Photos) {
        'ngInject';

        this._Photos = Photos;
    }

    deletePhoto(photoIndex, photoId) {
        if (confirm("Are you sure you want to delete this photo?")) {
            this.photos.splice(photoIndex, 1);
        }

    }
}

export default GalleryCtrl;