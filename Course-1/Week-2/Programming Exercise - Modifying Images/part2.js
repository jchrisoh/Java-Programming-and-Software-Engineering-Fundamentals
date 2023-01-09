var picture = new SimpleImage("hilton.jpg");

function swapRedGreen(pixel) {
    var red = pixel.getRed();
    var green = pixel.getGreen();

    pixel.setRed(green);
    pixel.setGreen(red);
}

for (var pixel of picture.values()) {
    swapRedGreen(pixel);
}

print(picture);
