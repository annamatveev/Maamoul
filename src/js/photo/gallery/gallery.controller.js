class GalleryCtrl {
    constructor($rootScope, Photos) {
        'ngInject';

        this._Photos = Photos;

        let self = this;
        $rootScope.$on('upload', function(event, data) {
            self.photos.push(data);
        });
    }

    deletePhoto(photoIndex, photoId) {
        let self = this;
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