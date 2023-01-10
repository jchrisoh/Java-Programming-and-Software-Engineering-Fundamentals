function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}

function addBorder(image, thickness) {
    for (var pixel of image.values()) {
        if (pixel.getX() < thickness || image.getWidth() - pixel.getX() <= thickness) {
            setBlack(pixel);
        }
        if (pixel.getY() < thickness || image.getHeight() - pixel.getY() <= thickness) {
            setBlack(pixel);
        }
    }
    
    return image;
}

var picture = new SimpleImage("smallpanda.png");
addBorder(picture, 10);
print(picture);
