function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for (var pixel of picture.values()) {
        pixel.setRed(red);
        if (red < 255) {
            red = red + 1;
        }
        else {
            red = 0;
            red = red + 1;
        }
    }

    return picture;
}

var result = changeRed(256,200);
print(result);
