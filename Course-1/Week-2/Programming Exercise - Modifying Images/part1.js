var picture = new SimpleImage("hilton.jpg");
var width = picture.getWidth();

for (var pixel of picture.values()) {
    if (pixel.getX() < width / 3) {
        pixel.setRed(255);
    }
    else if (pixel.getX() > width / 3 && pixel.getX() < 2 * width / 3) {
        pixel.setGreen(255);
    }
    else {
        pixel.setBlue(255);
    }
}

print(picture);
