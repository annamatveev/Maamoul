class GalleryCtrl {
    constructor(Photos) {
        'ngInject';

        this._Photos = Photos;
    }

    deletePhoto(photoIndex, photoId) {
        self = this;
        if (confirm("Are you sure you want to delete this photo?")) {
            this._Photos.deletePhoto(photoId).then(function(res) {
                if (res.status === 200) {
                    self.photos.splice(photoIndex, 1);
                }
            })
        }

    }
}

export default GalleryCtrl;