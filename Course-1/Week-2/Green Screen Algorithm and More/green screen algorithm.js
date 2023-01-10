var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");
var output = new SimpleImage(fgImage.getWidth(), bgImage.getHeight());

for (var pixel of fgImage.values()) {
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        output.setPixel(pixel.getX(), pixel.getY(), bgPixel);
    }
    else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}

print(output);
