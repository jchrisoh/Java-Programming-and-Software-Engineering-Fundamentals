var image = new SimpleImage("astrachan.jpg");

for (var pixel of image.values()) {
    if (image.getHeight() - pixel.getY() <= 10) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}

print(image);
