var image = new SimpleImage("eastereggs.jpg");

for (var pixel of image.values()) {
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}

print(image);
