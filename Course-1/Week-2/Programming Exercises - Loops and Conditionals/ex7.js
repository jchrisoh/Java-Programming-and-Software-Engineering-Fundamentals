function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for (var pixel of picture.values()) {
        pixel.setRed(red);
        pixel.setGreen(0);
        pixel.setBlue(0);
        if (pixel.getRed() < 255) {
            red = red + 1;
        }
        if (pixel.getRed() == 255) {
            red = 0;
        }
    }

    return picture;
}

var result = changeRed(256,200);
print(result);
