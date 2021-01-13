class ImagesController < ApplicationController
    def create
        Cloudinary::Uploader.upload()
    end

    def destroy
        Cloudinary::Uploader.destroy(id)
    end
end
